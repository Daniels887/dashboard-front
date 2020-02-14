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
      <HeaderComponent backButton addButton/>
      <GlobalStyle />
    </>
);

export const ProductItem = () => (
  <>
    <div style={{ width: '310px', margin: '0 auto', marginTop: '10px' }}>
      <ProductItemComponent 
        title="Parafuso"
        price="R$ 5,50"
        image="http://localhost:3333/files/parafuso_area_molhada_3,9x19mm_auto_atarraxante_philips_15un_86941435_23cc_600x600-1581695731653.jpg"
      />
    </div>
    <GlobalStyle />
  </>
);