import React from 'react';
import { Formik } from 'formik';
import { singUpValidation } from './validations';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Button } from 'react-bootstrap';

const initialValues = {
  name: '',
  lastName: '',
  email: '',
  password: ''
};

const SignUp = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  return (
    <div className="mainContainer">
      <h1> Registro </h1>
      <h2> Por favor complete los siguientes campos</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log('values: ', values);
        }}
        validate={(values) => singUpValidation(values)}>
        <form
          onSubmit={(values) => {
            console.log('values: ', values);
          }}>
          <input name="name" type="text" />
          <input name="lastName" type="text" />
          <input name="email" type="email" />
          <input name="password" type="password" />
          <Button variant="primary" type="submit">
            Confirmar
          </Button>
        </form>
      </Formik>
    </div>
  );
};

export default SignUp;
