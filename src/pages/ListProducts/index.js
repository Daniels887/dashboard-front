import React, { useState, useEffect, useContext } from 'react';
import { Container, ProductList} from './styles';
import Header from '../../components/Header';
import ProductItem from '../../components/ProductItem';
import { RouteContext } from '../../App';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

export default function ListProducts({ history }) {
  const goBack = useContext(RouteContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function loadProducts() {
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }))

      setProducts(data)
    })()
  }, [])
  
  return (
    <Container>
      <Header goBack={() => goBack(history)} addButton />
      <ProductList>
        { products.map(product => (
          <ProductItem 
            key={product._id} 
            id={product._id} 
            title={product.title} 
            price={product.priceFormatted} 
            image={product.image_url} 
          />
        ))}
      </ProductList>
    </Container>
  );
}
