import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Card, Container } from 'react-bootstrap';
import firebase from '../../config/firebase';
import './stylesSignIn.css';
import Input from '../../components/input/Input';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(7, 'Revise su contraseña').required('ingrese su contraseña')
});

function SignIn() {
  const onSubmitHandlerSingIn = async (values) => {
    try {
      const responseUser = await firebase.auth.signInWithEmailAndPassword(
        values.email,
        values.password
      );
      console.log('responseUser', responseUser);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container className="signInContainer">
      <Card className="p-md-2">
        <h1>Ingresar</h1>
        <h4>Complete el registro para ingresar</h4>
        <Formik
          initialValues={{
            email: 'ingrese su email',
            password: ''
          }}
          validationSchema={SignInSchema}
          onSubmit={onSubmitHandlerSingIn}>
          {/*//render props*/}
          {({ errors, touched }) => (
            <Form>
              <Input label={'Email'} name={'email'} type={'email'} />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <Input label={'Password'} name={'password'} type={'password'} />
              {errors.password && touched.password ? <div>{errors.password}</div> : null}
              <Button variant="primary" type="submit">
                Ingresar
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  );
}

export default SignIn;
