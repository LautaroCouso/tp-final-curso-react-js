import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import './newProductStyles.css';
import { getNewProduct } from '../../service/productServicesFirebase';
import NewItem from '../../components/product/NewItem';

function NewProduct() {
  const [newProduct, setNewProduct] = useState([]);
  useEffect(() => {
    const products = async () => {
      try {
        const response = await getNewProduct();
        console.log('response', response);
        setNewProduct(response);
      } catch (e) {
        console.log(e);
      }
    };
    products();
  }, []);
  return (
    <Container className="container-fluid">
      <Card className="p-md-2">
        <h1>Nuevas 111 Consolas</h1>
      </Card>
      {newProduct && newProduct.length > 0 ? (
        <div className="row d-flex justify-content-center">
          {newProduct.map((item) => (
            <NewItem
              title={item?.data().name}
              id={item.id}
              price={item?.data().price}
              thumbnail={item?.thumbnail}
              key={item.id}
            />
          ))}
        </div>
      ) : (
        <p>No items found</p>
      )}
    </Container>
  );
}

export default NewProduct;
