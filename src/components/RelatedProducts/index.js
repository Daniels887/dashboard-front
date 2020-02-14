import React, { useState, useEffect } from 'react';
import ProductItem from '../ProductItem';

import {  Related, MoreProducts, TitleProducts  } from './styles';
import { formatPrice } from '../../utils/format';

export default function RelatedProducts({ products, id }) {
  const [productsRelated, setProductsRelated] = useState([]);

  useEffect(() => {
    const productsFinal = products.filter((product) => {
      return product.id !== id;
    })

    const data = productsFinal.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }))

    setProductsRelated(data);
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
              price={product.priceFormatted} 
              image={product.image_url} 
              description={product.description} 
              title={product.title} 
            />
          ))}
      </Related>
    </>
  );
}
