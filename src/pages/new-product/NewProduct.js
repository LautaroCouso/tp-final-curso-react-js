import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './newProductStyles.css';
import { getNewProduct } from '../../service/productServicesFirebase';
import NewItem from '../../components/product/NewItem';
import Loading from '../../components/Loading';
import '../../globalStyles/globalStyles.css';
function NewProduct() {
  const [newProduct, setNewProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const products = async () => {
      try {
        const response = await getNewProduct();
        console.log('response', response);
        setNewProduct(response);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    products();
  }, []);
  return (
    <Loading loading={loading}>
      <Container className="container-fluid containerNewProduct containerMin ">
        <h1>Nuevas Consolas</h1>
        <Row className="justify-content-md-center">
          <Col md="auto">
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
          </Col>
        </Row>
      </Container>
    </Loading>
  );
}

export default NewProduct;
