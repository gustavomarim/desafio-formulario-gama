import React from 'react';
import Form from 'react-bootstrap/Form';

const Checkbox = ({ label, ...props }) => {
  return (
    <div>
      <Form.Check
        required
        label={label}
        feedback={props.feedback}
        feedbackType="invalid"
      />
    </div>
  );
}

export default Checkbox;