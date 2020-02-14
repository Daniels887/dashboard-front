import React from 'react';
import { MdSearch } from "react-icons/md";

import { ThemeProvider } from "styled-components";
import theme from '../../styles/theme';

import {  Item, Image, Title, Price, Detail, DetailTitle  } from './styles';

export default function ProductItem({ image, price, title, id }) {
  return (
    <ThemeProvider theme={theme}>
      <Item>
        <Image src={image} alt="Parafuso" />
        <Title>{title}</Title>
        <Price>R$ {price}</Price>
        <Detail to={`/detail/${id}`}>
        <MdSearch size={20} color="#FFF" />
          <DetailTitle>Ver mais</DetailTitle>
        </Detail>
      </Item>
    </ThemeProvider>
  );
}
