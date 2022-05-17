import React from 'react';
import { Formik, Form } from 'formik';
import { singUpValidation } from './validations';
import firebase from '../../config/firebase';
import { Button, Container, Card } from 'react-bootstrap';
import Input from '../../components/input/Input';
import './stylesSignUp.css';

const initialValues = {
  name: '',
  lastName: '',
  email: '',
  password: ''
};

const SignUp = () => {
  const handleSubmit = async (values) => {
    console.log('data: ', values.email, values.password);
    try {
      const responseCreateUser = await firebase.auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );
      console.log('responseCreateUser', responseCreateUser);
      if (responseCreateUser.user.uid) {
        const document = await firebase.db.collection('users').add({
          name: values.name,
          lastname: values.lastName,
          userId: responseCreateUser.user.uid
        });
        console.log('document', document);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container className="formContainer">
      <Card className="p-3">
        <h1> Registro </h1>
        <h2> Por favor complete los siguientes campos</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={singUpValidation}>
          <Form>
            <Input name="name" type="text" label="Nombre" placeholder="Nombre" />
            <Input name="lastName" type="text" label="Apellido" placeholder="Apellido" />
            <Input name="email" type="email" label="Email" placeholder="Email" />
            <Input name="password" type="password" label="Contraseña" placeholder="Contraseña" />
            <Button variant="primary" type="submit">
              Confirmar
            </Button>
          </Form>
        </Formik>
      </Card>
    </Container>
  );
};

export default SignUp;
