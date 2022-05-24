import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Button, Container } from 'react-bootstrap';
import firebase from '../../config/firebase';
import Input from '../../components/input/Input';
import AlertCustom from '../../components/alert';
import { singInValidation } from '../../Utils/validationsSignIn';
import '../../globalStyles/globalStyles.css';
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
      <div className={'containerMin'}>
        <h1>Ingresar</h1>
        <h4>Complete el registro para ingresar</h4>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={singInValidation}
          onSubmit={onSubmitHandlerSingIn}>
          {/*//render props*/}
          {() => (
            <Form>
              <Input label="Email" name="email" type="email" placeholder="Escriba aquí su email" />
              <Input
                label="Password"
                name="password"
                type="password"
                placeholder="Escriba aquí su contraseña"
              />
              <Button variant="primary" type="submit">
                Ingresar
              </Button>
              <AlertCustom {...alert} />
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
}

export default SignIn;
