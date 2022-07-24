import React from 'react';
import Form from 'react-bootstrap/Form';

const RadioButton = ({ options, value, setValue, ...props }) => {

  return (
    <div>
      <div>
        <label> {props.label} </label>
      </div>
      {options.map((option) => (
        <Form.Check key={option}
          inline
          type="radio"
          id={option}
          value={option}
          label={option}
          checked={value === option}
          onChange={({ target }) => setValue(target.value)}
        />
      ))}
    </div>
  );
}

export default RadioButton;