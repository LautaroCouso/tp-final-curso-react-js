import React, { useState, useEffect } from 'react';
import './newProductStyles.css';
import { Form, Formik } from 'formik';
import Input from '../../components/input/Input';
import { addNewProductsValidation } from './addNewProductsValidation';
import ButtonWithLoading from '../../components/button-with-loading';
import { useParams } from 'react-router-dom';
import { getDetailsNewProduct, updateNewProduct } from '../../service/productServicesFirebase';
import Loading from '../../components/Loading';
import firebase from '../../config/firebase';

function Modify() {
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const products = async () => {
      try {
        const response = await getDetailsNewProduct(id);
        console.log('response', response);
        setInitialValues({
          name: response.data().name,
          description: response.data().description,
          price: response.data().price
        });
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    products();
  }, [id]);

  const onSubmitModify = async (data) => {
    console.log('data', data);
    try {
      const documentInfo = await updateNewProduct(id, data);
      console.log(documentInfo);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async () => {
    const document = await firebase.db.doc('products/' + id).delete();
    console.log(document);
  };

  return (
    <Loading loading={!initialValues}>
      <h1>Modificar información de consola</h1>
      <div className="row d-flex justify-content-center">
        <Formik
          enableReinitialize={true}
          initialValues={initialValues ? initialValues : { name: '', description: '', price: '' }}
          validationSchema={addNewProductsValidation}
          onSubmit={onSubmitModify}>
          {/*//render props*/}
          {() => (
            <Form>
              <Input
                label={'Nombre del producto'}
                name={'name'}
                type={'text'}
                placeholder={'Escriba aquí el nombre del producto que desea modificar'}
              />
              <Input
                label={'Descripción'}
                name={'description'}
                type={'text'}
                placeholder={'Escriba aquí la descripción del producto que desea modificar'}
              />
              <Input
                label={'Precio'}
                name={'price'}
                type={'number'}
                placeholder={'Escriba aquí el precio del producto que desea modificar'}
              />
              <ButtonWithLoading
                loading={loading}
                label={'Modificar console'}
                onPress={onSubmitModify}
              />
            </Form>
          )}
        </Formik>
        <ButtonWithLoading loading={loading} onPress={handleDelete} label={'Eliminar console'} />
      </div>
    </Loading>
  );
}

export default Modify;
