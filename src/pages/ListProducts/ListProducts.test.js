import React from 'react';
import { shallow } from 'enzyme';
import ListProducts from './index';
import { expect } from 'chai';
import ProductItem from '../../components/ProductItem';
import Header from '../../components/Header';

it('Page List renders without crashing', () => {
    shallow(<ListProducts />);
});

it('Page list have Header', () => {  
    const wrapper = shallow(<ListProducts />);
    expect(wrapper.find(Header));
});

it('Page list have a ul', () => {
    const wrapper = shallow(<ListProducts />);
    expect(wrapper.find('styled.ul'));
})