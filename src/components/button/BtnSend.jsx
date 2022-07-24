import React from 'react';
import Button from 'react-bootstrap/Button';

const BtnSend = ({ id, name, ...props }) => {
  return (
    <Button id={id} {...props} variant="primary">
      {name}
    </Button>
  );
}

export default BtnSend;