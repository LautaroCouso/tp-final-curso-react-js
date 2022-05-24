import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Card, Container } from 'react-bootstrap';
import firebase from '../../config/firebase';
import Input from '../../components/input/Input';
import AlertCustom from '../../components/alert';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('El email ingresado no es válido').required('Campo requerido'),
  password: Yup.string().min(7, 'La contraseña ingresada no es válida').required('Campo requerido')
});

function SignIn() {
  const [alert, setAlert] = useState({ variant: '', text: '' });
  const onSubmitHandlerSingIn = async (values) => {
    try {
      const responseUser = await firebase.auth.signInWithEmailAndPassword(
        values.email,
        values.password
      );
      console.log('responseUser', responseUser);
      setAlert({ variant: 'primary', text: 'Bienvenido' });
    } catch (e) {
      console.log(e);
      setAlert({ variant: 'danger', text: 'Las cosas no siempre salen como las planeamos' });
    }
  };
  return (
    <Container className="formContainer">
      <Card className="p-3">
        <h1>Ingresar</h1>
        <h4>Complete el registro para ingresar</h4>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={SignInSchema}
          onSubmit={onSubmitHandlerSingIn}>
          {/*//render props*/}
          {() => (
            <Form>
              <Input
                label={'Email'}
                name={'email'}
                type={'email'}
                placeholder={'Escriba aquí su email'}
              />
              <Input
                label={'Password'}
                name={'password'}
                type={'password'}
                placeholder={'Escriba aquí su contraseña'}
              />
              <Button variant="primary" type="submit">
                Ingresar
              </Button>
              <AlertCustom {...alert} />
            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  );
}

export default SignIn;
