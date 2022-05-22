import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import consola from '../../assets/images/consola.jpg';

const NewItem = ({ title, price, thumbnail, description, id }) => {
  const imageSource = thumbnail ? thumbnail : consola;
  return (
    <Card style={{ width: '18rem' }} className="col-sm-3 col-xs-1">
      <Card.Img variant="top" src={imageSource} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title>{id}</Card.Title>
        <Card.Title>{description}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary">Comprar</Button>
        <Button variant="primary" as={Link} to={`/new/${id}`}>
          Detalles
        </Button>
      </Card.Body>
    </Card>
  );
};

NewItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  thumbnail: PropTypes.string,
  id: PropTypes.string,
  description: PropTypes.string
};

export default NewItem;
