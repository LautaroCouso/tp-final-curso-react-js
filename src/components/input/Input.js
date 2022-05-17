import React from 'react';
import './inputStyles.css';
import { Form } from 'react-bootstrap';
import { ErrorMessage, useField, Field } from 'formik';

function Input(props) {
  // eslint-disable-next-line react/prop-types
  const { label, name, type, placeholder } = props;
  const [field, meta] = useField(props);
  return (
    <>
      <Form className="mb-3 inputContainer">
        <label htmlFor={field.name} className="label">
          {label}
        </label>
        <Field
          className={`form-control input  ${meta.error && meta.touched && 'is-invalid'}`}
          type={type}
          name={name || ''}
          placeholder={placeholder}
        />
        <ErrorMessage name={field.name} component={'div'} className="error" />
      </Form>
    </>
  );
}

export default Input;
