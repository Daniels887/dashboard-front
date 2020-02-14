import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Login from './index';
import { Button, Input } from './styles';

it('Page login renders without crashing', () => {
  shallow(<Login />);
});

it('Page login have 1 button', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find(Button)).to.have.lengthOf(1);
})

it('Page login have 2 inputs', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find(Input)).to.have.lengthOf(2);
})