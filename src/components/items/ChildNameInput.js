import React from 'react';

const ChildNameInput = ({ label, index, onChange }) => {
    return (
        <div className="form-item">
            <p className="formLabel">{ label }</p>
            <input type="text" onChange={(e) => onChange(e, index)} name="First Child" className="form-style" autoComplete="off" />
        </div>
  );
};

export default ChildNameInput;
