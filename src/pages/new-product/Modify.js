import React, { useState, useEffect } from 'react';
import './newProductStyles.css';
import { Form, Formik } from 'formik';
import Input from '../../components/input/Input';
import { newProductsValidation } from '../../Utils/newProductsValidation';
import ButtonWithLoading from '../../components/button-with-loading';
import { useParams } from 'react-router-dom';
import {
  deleteNewProduct,
  getDetailsNewProduct,
  updateNewProduct
} from '../../service/productServicesFirebase';
import Loading from '../../components/Loading';
import AlertCustom from '../../components/alert';

function Modify() {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ variant: '', text: '' });
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
      setAlert({ variant: 'primary', text: 'El producto fue modificado' });
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async () => {
    try {
      const documentDelete = await deleteNewProduct(id);
      console.log(documentDelete);
      setAlert({ variant: 'primary', text: 'El producto fue eliminado' });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Loading loading={!initialValues}>
      <h1>Modificar información de consola</h1>
      <div className="row d-flex justify-content-center">
        <Formik
          enableReinitialize={true}
          initialValues={initialValues ? initialValues : { name: '', description: '', price: '' }}
          validationSchema={newProductsValidation}
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
        <AlertCustom {...alert} />
      </div>
    </Loading>
  );
}

export default Modify;
