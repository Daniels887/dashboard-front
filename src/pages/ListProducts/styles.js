import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 20px;
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(313px, 313px));
  grid-gap: 20px;
  list-style: none;
  justify-content: center;

  @media (max-width: 599px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 100%));
  }
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ContainerSpinner = styled.div`
  display: flex;
  justify-content: center;

  svg {
    animation: ${rotate} 2s linear infinite;
  }
  
`;