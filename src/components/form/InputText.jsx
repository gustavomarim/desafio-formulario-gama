import React from 'react'
import Form from 'react-bootstrap/Form';

const Input = ({ id, label, onChange, ...props }) => {

  return (
    <div>
      <Form.Label htmlFor={id} style={{ textTransform: 'capitalize' }} >
        {props.name}
      </Form.Label>
      <Form.Control
        type={props.type}
        id={id}
        aria-describedby={id}
        placeholder={props.placeholder}
      />
      <Form.Text id={id} muted>
        {props.textDescription}
      </Form.Text>
    </div>
  );
}

export default Input;