import React from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertComponent = ({ variant, message }) => {

  return (
    <Alert key={variant} variant={variant} >
      {message}
    </Alert>
  );
}

export default AlertComponent;