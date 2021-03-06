import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 20px;
`;

export const Content = styled.div`
  width: 100%;
  background: white;
  border-radius: 4px;
  padding: 30px;
  display: flex;

  @media (max-width: 599px) {
    flex-direction: column;
  }
`;

export const Figure = styled.figure`
  background-position: 50% 50%;
  max-width: 350px;
  width: 100%;
  overflow: hidden;
  border: ${props => `1px solid ${props.theme.colors.gray}`};
  border-radius: 4px;
  cursor: zoom-in;
  background-repeat: no-repeat;

  @media (max-width: 599px) {
    background-position: 30% 20% !important;
    background-size: cover !important;
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  transition: opacity .5s;
  display: block;
  width: 100%;
  height: 100%;
  &:hover {
    opacity: 0;
  }
`;

export const DataProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;

  @media (max-width: 599px) {
    margin-left: 0;
    align-items: justify;
  }
`;

export const Title = styled.strong`
  font-size: ${props => props.theme.fontSizes.large};
  line-height: 20px;
  color: ${props => props.theme.colors.onyx};
  margin-bottom: 15px;
`;
export const Price = styled.span`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.onyx};
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