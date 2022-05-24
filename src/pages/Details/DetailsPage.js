import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import '../../globalStyles/globalStyles.css';

function DetailsPage() {
  let { id } = useParams();
  const [detailItem, setDetailItem] = useState(null);
  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data:', data);
        setDetailItem(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <Container className="containerMin">
      {detailItem !== null ? (
        <Card>
          <Card.Title>{detailItem.title}</Card.Title>
          <Card.Img src={detailItem.thumbnail} />
          <Card.Text>Precio:{detailItem.price}</Card.Text>
          {detailItem.available_quantity && (
            <Card.Text>Cantidad vendida:{detailItem.available_quantity}</Card.Text>
          )}
          <Button>Comprar</Button>
        </Card>
      ) : (
        <p>loading</p>
      )}
    </Container>
  );
}

export default DetailsPage;
