import React, { useEffect, useState, useCallback, useContext } from 'react';

import { ThemeProvider } from "styled-components";
import theme from '../../styles/theme';

import Header from '../../components/Header';
import RelatedProducts from '../../components/RelatedProducts';

import { useParams } from "react-router-dom";

import { Container, Content, Figure, Image, DataProduct, Title, Price, Description } from './styles';
import { RouteContext } from '../../App';

import { formatPrice } from '../../utils/format';
import api from '../../services/api';

export default function DetailProduct({ history, match }) {
  const zoom = useCallback((e) => {
    var zoomer = e.currentTarget;
    var x = 0;
    var y = 0;

    x = e.pageX/zoomer.offsetWidth*30;
    y = e.pageY/zoomer.offsetHeight*40;

    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }, []);

  const goBack = useContext(RouteContext);
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function loadProduct() {

      const response = await api.get(`product/${match.params.id}`);
      const data = response.data
      setProduct({ ...data, priceFormatted: formatPrice(data.price)
      })
    })()
  }, [match.params.id])

  useEffect(() => {
    (async function loadRelatedProducts() {
      const response = await api.get('products');
      setProducts(response.data)
    })()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header backButton goBack={() => goBack(history)}/> 
        <Content>
          <Figure onMouseMove={zoom} style={{ backgroundImage: `url(${product.image_url})`}}>
            <Image src={product.image_url} alt={product.title} />
          </Figure>
          <DataProduct>
            <Title>{product.title}</Title>
            <Price>{product.priceFormatted}</Price>
            <Description>{product.description}</Description>
          </DataProduct>
        </Content>
        <RelatedProducts products={products} id={match.params.id}/>
      </Container>
    </ThemeProvider>
  );
}
