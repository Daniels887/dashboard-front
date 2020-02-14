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

it('Page Detail have Related Products', () => {
    const wrapper = shallow(<DetailProduct match={{params: {id: 1}}} />);
    expect(wrapper.find(RelatedProducts)).to.have.lengthOf(1);
})