import React, { useContext, useState, useEffect, useRef, useMemo } from 'react';
import { RouteContext } from '../../App';
import api from '../../services/api';

import { ThemeProvider } from "styled-components";
import theme from '../../styles/theme';

import { Container, Form, LabelPhoto, Input, Label, Button, Title, TextArea } from './styles';
import { MdPhotoCamera } from 'react-icons/md';
import { toast } from 'react-toastify';

import Header from '../../components/Header';

export default function NewProduct({ history }) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [drop, setDrop] = useState(false);

  const goBack = useContext(RouteContext);
  const labelPhoto = useRef(null);
  const inputPhoto = useRef(null);

  const preview = useMemo(() => {
    return image ? URL.createObjectURL(image) : null;
  }, [image])

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
        setImage(e.dataTransfer.files[0])
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

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();

    data.append('image', image);
    data.append('title', title);
    data.append('description', description);
    data.append('price', price);

    await api.post('/new', data)

    history.push('/products');
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
          image={image}
          ref={labelPhoto}
          dropzone={drop}
          >
            {!image && (
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
            onChange={event => setImage(event.target.files[0])} 
            ref={inputPhoto} 
            accept="image/*"
          />
          <Label>Título do Produto</Label>
          <Input 
            type="text" 
            placeholder="Título" 
            value={title} 
            onChange={event => setTitle(event.target.value)} 
          />
          <Label>Preço do Produto</Label>
          <Input 
            type="text" 
            placeholder="00,00" 
            value={price}
            onChange={event => setPrice(event.target.value)}
          />
          <TextArea 
            placeholder="Descrição"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Container>
    </ThemeProvider>
  );
}
