import React from 'react';
import GlobalStyle from '../../styles/global';
import { addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

// Page ListProduct Import
import NewProduct from '../NewProduct';

addDecorator(StoryRouter());


export default {
  title: 'NewProduct',
};

export const NewProductPage = () => (
  <>
    <NewProduct />
    <GlobalStyle />
  </>
);
