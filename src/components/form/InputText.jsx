import React from 'react'
import Form from 'react-bootstrap/Form';

const Input = ({
  id,
  label,
  value,
  type,
  onChange,
  error,
  onBlur,
  placeholder
}) => {

  return (
    <div>
      <Form.Label htmlFor={id} style={{ textTransform: 'capitalize' }} >
        {label}
      </Form.Label>
      <Form.Control
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        aria-describedby={id}
      />
      {error && <p> {error} </p>}
      {/* <Form.Text id={id} muted>
        {props.textDescription}
      </Form.Text> */}
    </div>
  );
}

export default Input;