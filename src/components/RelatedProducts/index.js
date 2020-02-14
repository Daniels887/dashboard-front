import React, { useState, useEffect } from 'react';
import ProductItem from '../ProductItem';

import {  Related, MoreProducts, TitleProducts  } from './styles';

export default function RelatedProducts({ products, id }) {
  const [productsRelated, setProductsRelated] = useState([]);

  useEffect(() => {
    const productsFinal = products.filter((product) => {
      return product.id !== id;
    })

    setProductsRelated(productsFinal);
  }, [id, products])
  return (
    <>
      <MoreProducts>
          <TitleProducts>Produtos relacionados! </TitleProducts>
        </MoreProducts>
        <Related>
          {productsRelated.map(product => (
            <ProductItem 
              key={product._id}
              id={product._id}
              price={product.price} 
              image={product.image_url} 
              description={product.description} 
              title={product.title} 
            />
          ))}
      </Related>
    </>
  );
}
