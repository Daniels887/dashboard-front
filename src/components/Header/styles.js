import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 20px;
`;

export const ContentIcon = styled(Link)`
    background: #FFF;
    padding: 20px;
    border-radius: 50%;

    &:hover {
        background: ${darken(0.1, '#FFF')}
    }
`;

export const Button = styled.button`
    background: #FFF;
    padding: 20px;
    border-radius: 50%;
    border: none;
    cursor: pointer;

    &:hover {
        background: ${darken(0.1, '#FFF')}
    }
`;