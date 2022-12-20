import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const registro = () => {

  return (
    <div class=" container border justify-content-center alert alert-light" style={{ minHeight: "auto", paddingTop:"2vh", marginTop:"5vh" }}>
    <h1 class="text-center">Registro</h1>
    <Form>

    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="name" placeholder="name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Apellidos</Form.Label>
        <Form.Control type="text" placeholder="Primer Apellido" />
        <Form.Control type="text" placeholder="Segundo Apellido" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Soy Profesor/a" />
        <Form.Text className="text-muted">
         Indicar unicamente en caso de ser docente.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Imagen de perfil</Form.Label>
        <Form.Control type="file" size="lg" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
 
    </div>
  );
}

export default registro