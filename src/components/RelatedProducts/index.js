import React from 'react';
import ProductItem from '../ProductItem';

import {  Related, MoreProducts, TitleProducts  } from './styles';

export default function RelatedProducts() {
  return (
    <>
      <MoreProducts>
          <TitleProducts>Produtos relacionados! </TitleProducts>
        </MoreProducts>
        <Related>
          <ProductItem />
          <ProductItem />
          <ProductItem />
      </Related>
    </>
  );
}
