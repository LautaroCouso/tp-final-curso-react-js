import React from 'react';
import './inputStyles.css';
import { Form } from 'react-bootstrap';
import { ErrorMessage, useField } from 'formik';

function Input(props) {
  // eslint-disable-next-line react/prop-types
  const { label, name, type, placeholder } = props;
  const [field, meta] = useField(props);
  return (
    <>
      <Form.Group className="mb-3 inputContainer">
        <Form.Label htmlFor={field.name} className="label">
          {label}
        </Form.Label>
        <Form.Control
          className={`shadow-none input ${meta.error && meta.touched && <div>{meta.error}</div>}`}
          type={type}
          name={name || ''}
          placeholder={placeholder}
          required
        />
        <ErrorMessage name={field.name} component={'div'} className="error" />
      </Form.Group>
    </>
  );
}

export default Input;
