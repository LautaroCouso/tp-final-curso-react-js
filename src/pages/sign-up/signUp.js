import React from 'react';
import { Formik, Form, Field } from 'formik';
import { singUpValidation } from './validations';
import firebase from '../../config/firebase';
import { Button } from 'react-bootstrap';

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
    <div className="mainContainer">
      <h1> Registro </h1>
      <h2> Por favor complete los siguientes campos</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={singUpValidation}>
        <Form>
          <Field name="name" type="text" />
          <Field name="lastName" type="text" />
          <Field name="email" type="email" />
          <Field name="password" type="password" />
          <Button variant="primary" type="submit">
            Confirmar
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
