import React from 'react';
import { Container, ProductList} from './styles';
import Header from '../../components/Header';
import ProductItem from '../../components/ProductItem';

export default function ListProducts({ history }) {
  function goBack() {
    history.goBack();
  }

  return (
    <Container>
      <Header goBack={goBack} />
      <ProductList>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ProductList>
    </Container>
  );
}
