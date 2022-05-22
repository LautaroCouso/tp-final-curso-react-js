import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ButtonWithLoading(props) {
  const { configuration, loading, label } = props;

  return (
    <Button
      variant={configuration?.variant || 'outline-success'}
      type={configuration?.type || 'submit'}
      disabled={loading}>
      {label}
    </Button>
  );
}
ButtonWithLoading.propTypes = {
  configuration: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.any,
  loading: PropTypes.bool
};

export default ButtonWithLoading;
