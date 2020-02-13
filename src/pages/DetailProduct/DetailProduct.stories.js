import React from 'react';
import GlobalStyle from '../../styles/global';
import { addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

// Theme Import
import { ThemeProvider } from "styled-components";
import theme from '../../styles/theme';

// Page ListProduct Import
import DetailProduct from '../DetailProduct';

// Component RelatedProducts Import
import Related from '../../components/RelatedProducts';

// Component Header Import
import HeaderComponent from '../../components/Header';

addDecorator(StoryRouter());


export default {
  title: 'DetailProduct',
};

export const DetailProductPage = () => (
  <>
    <DetailProduct />
    <GlobalStyle />
  </>
);

export const RelatedProducts = () => (
  <> 
    <ThemeProvider theme={theme}>
      <div  style={{ width: '985px', margin: '0 auto', marginTop: '10px' }}>
        <Related />
      </div>
    </ThemeProvider>
    <GlobalStyle />
  </>
);

export const Header = () => (
  <>
    <HeaderComponent backButton/>
    <GlobalStyle />
  </>
);