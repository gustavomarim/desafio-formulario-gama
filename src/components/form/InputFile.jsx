import React from 'react';
import Form from 'react-bootstrap/Form';


const InputFile = ({ id, ...props }) => {
  return (
    <div>
      <Form.Label>Currículo</Form.Label>
      <Form.Control
        type="file"
        required
        name="file"
      />
      <Form.Text id={id} muted>
        {props.textDescription}
      </Form.Text>
    </div>
  );
}

export default InputFile;