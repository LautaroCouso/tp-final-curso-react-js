import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import firebase from '../../config/firebase';

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
    <div className={'signInContainer'}>
      <h1>Ingresar</h1>
      <h2>Complete el registro para ingresar</h2>
      <Formik
        initialValues={{
          email: 'ingrese su email',
          password: ''
        }}
        validationSchema={SignInSchema}
        onSubmit={onSubmitHandlerSingIn}>
        {/*//renderprops*/}
        {({ errors, touched }) => (
          <Form>
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" type="password" />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignIn;
