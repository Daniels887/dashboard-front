import styled from 'styled-components';

export const Related = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(313px, 313px));
  grid-gap: 20px;
  list-style: none;
  justify-content: center;

  @media (max-width: 599px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 100%));
  }
`;

export const MoreProducts = styled.div`
  text-align: center;
  width: 100%;
  background: white;
  border-radius: 4px;
  margin-top: 10px;
  padding: 20px;
  background: ${props => props.theme.colors.orange};
`;

export const TitleProducts = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
  color: white;
`;