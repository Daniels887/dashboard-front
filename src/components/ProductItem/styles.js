import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 2px;
  padding: 20px;
  flex-wrap: wrap;
`;

export const Imagem = styled.img`
  align-self: center;
  max-width: 150px;
`;

export const Title = styled.strong`
  font-size: 16px;
  line-height: 20px;
  color: ${props => props.theme.colors.onyx};
  margin-top: 5px;
`;
export const Price = styled.span`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const Detail = styled(Link)`
  background: ${props => props.theme.colors.orange};
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.5s;

    &:hover {
        background: ${props => darken(0.05, `${props.theme.colors.orange}`)}
    }
`;

export const DetailTitle = styled.strong`
  font-size: ${props => props.theme.fontSizes.medium};
  margin-left: 5px;
`;