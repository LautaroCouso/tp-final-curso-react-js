import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './newProductStyles.css';
import { Form, Formik } from 'formik';
import Input from '../../components/input/Input';
import { addNewProductsValidation } from './addNewProductsValidation';
import firebase from '../../config/firebase';

function AddNewProduct() {
  const onSubmitAddNewProduct = async (data) => {
    console.log('Form', data);
    try {
      const document = await firebase.firestore().collection('products').add({
        name: data.name,
        description: data.description,
        price: data.price
      });
      console.log('document', document);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container className="container-fluid">
      <h1>Agregar una nueva consola</h1>
      <div className="row d-flex justify-content-center">
        <Formik
          initialValues={{
            name: '',
            description: '',
            price: ''
          }}
          validationSchema={addNewProductsValidation}
          onSubmit={onSubmitAddNewProduct}>
          {/*//render props*/}
          {() => (
            <Form>
              <Input
                label={'Nombre del producto'}
                name={'name'}
                type={'text'}
                placeholder={'Escriba aquí el nombre del producto'}
              />
              <Input
                label={'Descripción'}
                name={'description'}
                type={'text'}
                placeholder={'Escriba aquí la descripción del producto'}
              />
              <Input
                label={'Precio'}
                name={'price'}
                type={'number'}
                placeholder={'Escriba aquí el precio del producto'}
              />
              <Button variant="primary" type="submit">
                Agregar nueva consola
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
}

export default AddNewProduct;
