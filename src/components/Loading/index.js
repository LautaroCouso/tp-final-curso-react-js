import React from 'react';
import { Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Loading(props) {
  const { loading, children, type } = props;

  if (loading) {
    return (
      <div className="spinner">
        <p>Espere por favor...</p>
        <Spinner variant={type?.variant || 'secondary'} animation={type?.animation || 'border'} />
      </div>
    );
  } else {
    return <div>{children}</div>;
  }
}

Loading.propTypes = {
  type: PropTypes.string,
  loading: PropTypes.bool,
  children: PropTypes.any
};
export default Loading;
