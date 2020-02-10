import React from 'react';
import { Container, ProductList} from './styles';
import ProductItem from '../../components/ProductItem';

export default function ListProducts() {
  return (
    <Container>
      <ProductList>
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ProductList>
    </Container>
  );
}
