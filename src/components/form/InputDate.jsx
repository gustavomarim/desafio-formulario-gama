import React from 'react';

const InputDate = ({ id, label, ...props }) => {
  return (
    <div>
      <label> {label} </label>
      <input
        id={id}
        type="date" />
    </div>
  );
}

export default InputDate;