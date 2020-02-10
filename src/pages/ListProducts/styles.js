import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 20px;
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 310px));
  grid-gap: 20px;
  list-style: none;
  justify-content: center;

  @media (max-width: 599px) {
    grid-template-columns: repeat(auto-fit, minmax(310px, 100%));
  }
`;