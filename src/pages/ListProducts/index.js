import React, { useState, useEffect, useContext } from 'react';
import { Container, ProductList} from './styles';
import Header from '../../components/Header';
import ProductItem from '../../components/ProductItem';
import { RouteContext } from '../../App';
import api from '../../services/api';

export default function ListProducts({ history }) {
  const goBack = useContext(RouteContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function loadProducts() {
      const response = await api.get('/products');
      setProducts(response.data)
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
            price={product.price} 
            image={product.image_url} 
          />
        ))}
      </ProductList>
    </Container>
  );
}
