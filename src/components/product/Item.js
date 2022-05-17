import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Item = ({ title, price, thumbnail, id }) => {
  return (
    <Card style={{ width: '18rem' }} className="col-sm-3 col-xs-1">
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary">Comprar</Button>
        <Button variant="primary" as={Link} to={`/details/${id}`}>
          Detalles
        </Button>
      </Card.Body>
    </Card>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  thumbnail: PropTypes.string,
  id: PropTypes.string
};

export default Item;
