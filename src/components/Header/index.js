import React from 'react';
import { GoReply, GoSignOut, GoPlus } from "react-icons/go";
import { Container, ContentIcon, Button } from './styles';

export default function Header({ goBack, backButton }) {
  return (
    <Container>
        { backButton && ( 
          <Button onClick={goBack}>
            <GoReply size={20} color="#000" />
          </Button>
        )}
        <ContentIcon to="/addProduct">
          <GoPlus size={20} color="#000" />
        </ContentIcon>
        <Button onClick={goBack}>
            <GoSignOut size={20} color="#000" />
        </Button>
    </Container>
  );
}
