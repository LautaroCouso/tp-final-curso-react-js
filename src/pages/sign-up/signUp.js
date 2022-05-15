import React from 'react';
import { Formik } from 'formik';
import { singUpValidation } from './validations';
/*import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';*/

const initialValues = {
  name: '',
  lastName: '',
  email: '',
  password: ''
};

const SignUp = () => {
  /*const auth = getAuth();
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
    });*/
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
        <div>
          <input>
            <label> Nombre </label>
          </input>
          <input>
            <label> Apellido </label>
          </input>
          <input>
            <label> Email </label>
          </input>
          <input>
            <label> Contraseña </label>
          </input>
        </div>
      </Formik>
    </div>
  );
};

export default SignUp;
