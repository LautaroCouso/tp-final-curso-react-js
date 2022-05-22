import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import { getDetailsNewProduct } from '../../service/productServicesFirebase';

function DetailsNewProductPage() {
  let { id } = useParams();
  const [item, setItem] = useState({});
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detailsProducts = async () => {
      try {
        const response = await getDetailsNewProduct(id);
        console.log('response', response);
        setItem(response.data());
      } catch (e) {
        console.log(e);
      }
    };
    detailsProducts();
  }, [id]);
  return (
    <Container className="main">
      <Card>
        <Card.Title>{item?.name}</Card.Title>
        <Card.Title>{item?.description}</Card.Title>
        <Card.Title>{item?.thumbnail}</Card.Title>
        <Card.Title>{item?.id}</Card.Title>
        <Card.Text>Precio:{item?.price}</Card.Text>
        <Button>Comprar</Button>
      </Card>
    </Container>
  );
}

export default DetailsNewProductPage;
