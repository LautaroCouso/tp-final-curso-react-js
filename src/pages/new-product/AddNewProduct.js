import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './newProductStyles.css';
import { Form, Formik } from 'formik';
import Input from '../../components/input/Input';
import { addNewProductsValidation } from './addNewProductsValidation';
import firebase from '../../config/firebase';
import Alert from '../../components/alert';
import ButtonWithLoading from '../../components/button-with-loading';

function AddNewProduct() {
  const [alert, setAlert] = useState({ variant: '', text: '' });
  const [loading, setLoading] = useState(false);
  const onSubmitAddNewProduct = async (data, { resetForm }) => {
    setLoading(true);
    console.log('Form', data);
    try {
      const document = await firebase.firestore().collection('products').add({
        name: data.name,
        description: data.description,
        price: data.price
      });
      setAlert({ variant: 'success', text: 'Fue agregado el producto ' + (data.name || '') });
      console.log('document', document);
      resetForm({});
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
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
              <ButtonWithLoading loading={loading} label={'Agregar producto'} type="submit" />

              <Alert {...alert} />
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
}

export default AddNewProduct;
