import React, { useContext, useState, useMemo } from 'react';
import Header from '../../components/Header';
import { Container, Form, LabelPhoto, Input, Label, Button } from './styles';
import { MdPhotoCamera } from 'react-icons/md';
import { RouteContext } from '../../App';

export default function NewProduct({ history }) {
  const [thumbnail, setThumbnail] = useState(null);

  const goBack = useContext(RouteContext);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail])

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Cadastrar')
  }

  return (
    <Container>
      <Header goBack={() => goBack(history)} backButton />
      <Form onSubmit={handleSubmit}>
        <Label>Foto do Produto</Label>
        <LabelPhoto htmlFor="photo" style={{ backgroundImage: `url(${preview})` }} thumbnail={thumbnail}>
          {!thumbnail && <MdPhotoCamera size={20} color="#DDD" /> }
        </LabelPhoto>
        <Input type="file" id="photo" photo onChange={event => setThumbnail(event.target.files[0])}/>
        <Label>Título do Produto</Label>
        <Input type="text" placeholder="Título" />
        <Label>Preço do Produto</Label>
        <Input type="text" placeholder="R$ 00,00" />
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
}
