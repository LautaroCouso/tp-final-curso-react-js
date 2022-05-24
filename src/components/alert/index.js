import React from 'react';
import { Alert } from 'react-bootstrap';
import './alertStyles.css';
import PropTypes from 'prop-types';

function AlertCustom(props) {
  const { variant, text } = props;

  return (
    <Alert className={'alertContainer'} variant={variant}>
      {text}
    </Alert>
  );
}

AlertCustom.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string
};

export default AlertCustom;
