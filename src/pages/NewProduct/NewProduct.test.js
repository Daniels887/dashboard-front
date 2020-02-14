import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import NewProduct from './index';
import Header from '../../components/Header';
import { Input, Button } from './styles';

it('Page new product renderer without crashing', () => {
    shallow(<NewProduct />);
})

it('Page new product have Header', () => {
    const wrapper = shallow(<NewProduct />);
    expect(wrapper.find(Header));
})

it('Page new product have 3 inputs', () => {
    const wrapper = shallow(<NewProduct />);
    expect(wrapper.find(Input)).to.have.lengthOf(3);
})

it('Page new product have 1 button', () => {
    const wrapper = shallow(<NewProduct />);
    expect(wrapper.find(Button)).to.have.lengthOf(1);
})
