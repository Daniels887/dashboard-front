import React, { useContext } from 'react';
import { Container, ProductList} from './styles';
import Header from '../../components/Header';
import ProductItem from '../../components/ProductItem';
import { RouteContext } from '../../App';

export default function ListProducts({ history }) {
  const goBack = useContext(RouteContext);
  
  return (
    <Container>
      <Header goBack={() => goBack(history)} addButton />
      <ProductList>
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ProductList>
    </Container>
  );
}
