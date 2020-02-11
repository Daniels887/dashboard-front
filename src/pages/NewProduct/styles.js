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
  border: ${props => props.thumbnail ? 0 :  (props.dropzone ? '1px dashed #333' : '1px dashed #ddd')};
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
  font-size: 16px;
  margin-top: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #444;
  font-weight: bold;
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

export const Title = styled.h2`
  font-size: 16px;
  line-height: 20px;
  color: ${props => props.dropzone ? '#333' : '#ddd' };
  margin-top: 5px;
`;