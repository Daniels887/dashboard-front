import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1020px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding: 20px;
`;

export const Form = styled.form`
  margin: 0 auto;
  max-width: 450px;
  width: 100%;
  background: white;
  border-radius: 4px;
  padding: 30px;
`;

export const LabelPhoto = styled.label`
  border: ${props => props.thumbnail ? 0 :  (props.dropzone ? `1px dashed ${props.theme.colors.default}` : `1px dashed ${props.theme.colors.gray}`)};
  border-radius: 4px;
  height: 150px;
  cursor: pointer;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const Input = styled.input`
  display: ${props => props.photo ? 'none' : 'block'};
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 45px;
  padding: 0 10px;
  font-size: ${props => props.theme.fontSizes.medium};
  margin-top: 8px;
`;

export const Label = styled.label`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.default};
  font-weight: bold;
`;

export const Button = styled.button`
  border: 0;
  border-radius: 2px;
  width: 100%;
  height: 42px;
  padding: 0 20px;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: bold;
  background: ${props => props.theme.colors.orange};
  cursor: pointer;
  color: #fff;
  transition: all 0.5s;
    &:hover {
      background: ${props => darken(0.04, `${props.theme.colors.orange}`)};
    }
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 20px;
  color: ${props => props.dropzone ? `${props.theme.colors.default}` : `${props.theme.colors.gray}` };
  margin-top: 5px;
`;