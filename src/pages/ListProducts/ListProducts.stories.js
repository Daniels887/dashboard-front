import React from 'react';
import GlobalStyle from '../../styles/global';
import { addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

// Page ListProduct Import
import ListProducts from '../ListProducts';

// Header Import
import HeaderComponent from '../../components/Header';

// ProductItem Import
import ProductItemComponent from '../../components/ProductItem';

addDecorator(StoryRouter());


export default {
  title: 'ListProducts',
};

export const ListProductPage = () => (
  <>
    <ListProducts />
    <GlobalStyle />
  </>
);

export const Header = () => (
    <>
      <HeaderComponent backButton/>
      <GlobalStyle />
    </>
);

export const ProductItem = () => (
  <>
    <div style={{ width: '310px', margin: '0 auto', marginTop: '10px' }}>
      <ProductItemComponent />
    </div>
    <GlobalStyle />
  </>
);