import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './newProductStyles.css';
import { Form, Formik } from 'formik';
import Input from '../../components/input/Input';
import { newProductsValidation } from '../../Utils/newProductsValidation';
import firebase from '../../config/firebase';
import Alert from '../../components/alert';
import ButtonWithLoading from '../../components/button-with-loading';
import '../../globalStyles/globalStyles.css';

function AddNewProduct() {
  const [alert, setAlert] = useState({ variant: '', text: '' });
  const [loading, setLoading] = useState(false);
  const onSubmitAddNewProduct = async (data, { resetForm }) => {
    setLoading(true);
    console.log('Form', data);
    try {
      await firebase.firestore().collection('products').add({
        name: data.name,
        description: data.description,
        price: data.price
      });
      setAlert({ variant: 'primary', text: 'Fue agregado el producto ' + (data.name || '') });
      resetForm({});
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <Container className="container-lg containerNewProduct containerMin">
      <h1>Agregar una nueva consola</h1>
      <div className="row d-flex justify-content-center">
        <Formik
          initialValues={{
            name: '',
            description: '',
            price: ''
          }}
          validationSchema={newProductsValidation}
          onSubmit={onSubmitAddNewProduct}>
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
