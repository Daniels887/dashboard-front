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
    
    <DetailProduct match={{params: {id: "5e46c2f3d146745e314ebd9d"} }} />
    <GlobalStyle />
  </>
);

export const RelatedProducts = () => (
  <> 
    <ThemeProvider theme={theme}>
      <div  style={{ width: '985px', margin: '0 auto', marginTop: '10px' }}>
        <Related 
          products={[{description: "Parafuso",title: "Parafuso", price: 5.5, image_url:"http://localhost:3333/files/parafuso_area_molhada_3,9x19mm_auto_atarraxante_philips_15un_86941435_23cc_600x600-1581695731653.jpg"}]} 
          id={1}
        />
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