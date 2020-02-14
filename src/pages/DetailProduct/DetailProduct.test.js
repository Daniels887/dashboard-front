import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import DetailProduct from './index';
import RelatedProducts from '../../components/RelatedProducts';
import ProductItem from '../../components/ProductItem';
import { Button, Input } from './styles';

it('Page Detail Product renders without crashing', () => {
  shallow(<DetailProduct match={{params: {id: 1}}} />);
});
