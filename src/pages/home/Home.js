import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import './homeStyles.css';
import Item from '../../components/product/Item';

function Home() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=consolas')
      .then((res) => res.json())
      .then((data) => {
        console.log('data items:', data);
        setItems(data.results);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <Container className="container-fluid">
      <Card className="p-md-2">
        <h1>¡Bienvenido a nuestro sitio!</h1>
        <h4>Trabajo práctico final del curso de React js</h4>
      </Card>
      {items && items.length > 0 ? (
        <div className="row d-flex justify-content-center">
          {items.map((item) => (
            <Item
              title={item.title}
              id={item.id}
              price={item.price}
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

export default Home;
