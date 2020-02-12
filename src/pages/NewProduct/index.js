import React, { useContext, useState, useEffect, useRef, useMemo } from 'react';
import { RouteContext } from '../../App';

import { ThemeProvider } from "styled-components";
import theme from '../../styles/theme';

import { Container, Form, LabelPhoto, Input, Label, Button, Title, TextArea } from './styles';
import { MdPhotoCamera } from 'react-icons/md';
import { toast } from 'react-toastify';

import Header from '../../components/Header';

export default function NewProduct({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [drop, setDrop] = useState(false);

  const goBack = useContext(RouteContext);
  const labelPhoto = useRef(null);
  const inputPhoto = useRef(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail])

  useEffect(() => {
    (function dropzone() {
      const dropzone = labelPhoto.current;

      dropzone.ondrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length > 1) {
          toast.error('Arraste somente 1 arquivo de imagem!')
          setDrop(false);
          return false;
        }
        inputPhoto.current.files = e.dataTransfer.files
        setThumbnail(e.dataTransfer.files[0])
      }

      dropzone.ondragover = () => {
        setDrop(true);
        return false;
      }

      dropzone.ondragleave = () => {
        setDrop(false);
        return false;
      }
    })()
  }, [drop])

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header goBack={() => goBack(history)} backButton />
        <Form onSubmit={handleSubmit}>
          <Label>Foto do Produto</Label>
          <LabelPhoto 
          htmlFor="photo" 
          style={{ backgroundImage: `url(${preview})` }} 
          thumbnail={thumbnail}
          ref={labelPhoto}
          dropzone={drop}
          >
            {!thumbnail && (
              <>
                <MdPhotoCamera size={20} color={drop ? `${theme.colors.default}` : `${theme.colors.gray}`} /> 
                <Title dropzone={drop}>Selecione ou arraste uma foto</Title>
              </>
            )}
          </LabelPhoto>
          <Input 
            type="file" 
            id="photo"
            photo
            onChange={event => setThumbnail(event.target.files[0])} 
            ref={inputPhoto} 
            accept="image/*"
          />
          <Label>Título do Produto</Label>
          <Input type="text" placeholder="Título" />
          <Label>Preço do Produto</Label>
          <Input type="text" placeholder="R$ 00,00" />
          <TextArea placeholder="Descrição" />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Container>
    </ThemeProvider>
  );
}
