import React from 'react';
import { GoReply, GoSignOut, GoPlus } from "react-icons/go";
import { Container, ContentIcon, Button } from './styles';

export default function Header({ goBack, backButton, addButton }) {
  return (
    <Container>
        { backButton && ( 
          <Button onClick={goBack}>
            <GoReply size={20} color="#000" />
          </Button>
        )}
        {
          addButton && (
          <ContentIcon to="/new">
            <GoPlus size={20} color="#000" />
          </ContentIcon>
        )}
        <ContentIcon to="/">
            <GoSignOut size={20} color="#000" />
        </ContentIcon>
    </Container>
  );
}
