import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import './newProductStyles.css';
import Item from '../../components/product/Item';
import { getNewProduct } from '../../service/productServicesFirebase';

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
        <h1>Nuevas Consolas</h1>
      </Card>
      {newProduct && newProduct.length > 0 ? (
        <div className="row d-flex justify-content-center">
          {newProduct.map((item) => (
            <Item
              title={item.data().name}
              id={item.id}
              price={item.data().price}
              thumbnail={item.thumbnail}
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
