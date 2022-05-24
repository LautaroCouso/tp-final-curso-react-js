import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ButtonWithLoading(props) {
  const { configuration, loading, label, onPress } = props;

  return (
    <Button
      variant={configuration?.variant || 'primary'}
      type={configuration?.type || 'submit'}
      disabled={loading}
      onClick={onPress}>
      {label}
    </Button>
  );
}

ButtonWithLoading.propTypes = {
  configuration: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.any,
  loading: PropTypes.bool,
  onPress: PropTypes.any
};

export default ButtonWithLoading;
