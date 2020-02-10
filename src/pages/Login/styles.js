import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 50px auto 0;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  background: white;
  margin-top: 50px;
  border-radius: 4px;
  padding: 30px;
`;

export const ContainerLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 100px;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  margin: 25px;
  text-align: center;
  color: #444;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #444;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 45px;
  padding: 0 10px;
  font-size: 16px;
`;

export const Button = styled.button`
  border: 0;
  border-radius: 2px;
  width: 100%;
  height: 42px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  background: #DF7401;
  cursor: pointer;
  color: #fff;
  transition: all 0.5s;

    &:hover {
      background: ${darken(0.04, '#DF7401')};
    }
`;