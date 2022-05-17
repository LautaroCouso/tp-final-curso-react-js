import React from 'react';
import './inputStyles.css';
import { ErrorMessage, useField, Field } from 'formik';
import PropTypes from 'prop-types';

function Input(props) {
  const { label, name, type, placeholder } = props;
  const [field, meta] = useField(props);
  return (
    <>
      <div className=" form mb-3 inputContainer">
        <label htmlFor={field.name} className="label">
          {label}
        </label>
        <Field
          className={`form-control input  ${meta.error && meta.touched && 'is-invalid'}`}
          type={type}
          name={name || ''}
          placeholder={placeholder || ''}
        />
        <ErrorMessage name={field.name} component={'div'} className="error" />
      </div>
    </>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'email', 'password']).isRequired,
  placeholder: PropTypes.string
};

export default Input;
