import React from 'react';
import './InputPass.scss';

export const InputPass = ({ valueInput, setValue, placeholder, inputType }) => {
  return (    
      <input        
        value={valueInput}
        onChange={(e) => setValue(e.target.value)}
        placeholder = {placeholder}
        type = {inputType} 
        required
        className='input-pass u-pass-input-background u-marginVm'
      />  
  );
};