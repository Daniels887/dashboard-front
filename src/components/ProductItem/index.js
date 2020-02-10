import React from 'react';
import { MdSearch } from "react-icons/md";
import {  Item, Imagem, Title, Price, Detail, DetailTitle  } from './styles';

import parafuso from '../../assets/parafuso.jpg';

export default function ProductItem() {
  return (
    <Item>
      <Imagem src={parafuso} alt="Parafuso" />
      <Title>Parafuso tipo 1</Title>
      <Price>R$ 5,00</Price>
      <Detail to="/dashboard">
      <MdSearch size={20} color="#FFF" />
        <DetailTitle>Ver mais</DetailTitle>
      </Detail>
    </Item>
  );
}
