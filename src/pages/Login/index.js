import React from 'react';
import lock from '../../assets/lock.png';
import { ThemeProvider } from "styled-components";
import theme from '../../styles/theme';

import { Container, ContainerLogo, Logo, Content, Title, Form, Input, Label, Button } from './styles';

export default function Login({ history }) {
	function handleSubmit(e) {
		e.preventDefault();
		history.push('/products');
	}

	return (
		<ThemeProvider theme={theme}>
      <Container>
        <ContainerLogo>
          <Logo src={lock} alt="Login" />
        </ContainerLogo>
        <Content>
          <Title>Painel administrativo</Title>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="user">E-mail</Label>
            <Input type="text" placeholder="E-mail" id="user" />
            <Label htmlFor="password">Senha</Label>
            <Input type="password" placeholder="Senha"id="password" />
            <Button type="submit">Entrar</Button>
          </Form>
        </Content>
      </Container>
		</ThemeProvider>
  );
}
