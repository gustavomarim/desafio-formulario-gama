import React from 'react';
import Form from 'react-bootstrap/Form';

const Select = ({ options, value, ...props }) => {

  return (
    <div>
      <Form.Label htmlFor={props.id} style={{ textTransform: 'capitalize' }} >
        {props.name}
      </Form.Label>
      <Form.Select value={value} {...props} >
        <option value="disabled">Selecione</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}

export default Select;