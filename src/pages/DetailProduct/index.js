import React, { useCallback, useContext } from 'react';

import { ThemeProvider } from "styled-components";
import theme from '../../styles/theme';

import Header from '../../components/Header';
import ProductItem from '../../components/ProductItem';

import parafuso from '../../assets/parafuso.jpg';

import { Container, Content, Figure, Image, DataProduct, Title, Price, Description, RelatedProducts, MoreProducts, TitleProducts } from './styles';
import { RouteContext } from '../../App';

export default function DetailProduct({ history }) {
  const zoom = useCallback((e) => {
    var zoomer = e.currentTarget;
    var x = 0;
    var y = 0;

    x = e.pageX/zoomer.offsetWidth*100;
    y = e.pageY/zoomer.offsetHeight*100;

    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }, []);

  const goBack = useContext(RouteContext);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header backButton goBack={() => goBack(history)}/> 
        <Content>
          <Figure onMouseMove={zoom} style={{ backgroundImage: `url(${parafuso})`}}>
            <Image src={parafuso} alt="Parafuso" />
          </Figure>
          <DataProduct>
            <Title>Parafuso 1</Title>
            <Price>R$ 5,00</Price>
            <Description>Um parafuso muito utilizado para tarefas simples!</Description>
          </DataProduct>
        </Content>
        <MoreProducts>
          <TitleProducts>Produtos relacionados! </TitleProducts>
        </MoreProducts>
        <RelatedProducts>
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </RelatedProducts>
      </Container>
    </ThemeProvider>
  );
}
