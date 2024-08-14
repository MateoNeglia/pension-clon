import React, { useState, useEffect } from 'react';
import './InputPass.scss';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

export const InputPass = ({ valueInput, setValue, placeholder, inputType, inputBackground, inputColor, placeholderColor }) => {
  
  const [inputTypeState, setInputTypeState] = useState(inputType);

  useEffect(() => {
    setInputTypeState(inputType);
  }, [inputType]);
  
  const togglePasswordVisibility = () => {
    setInputTypeState((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  return (    
    <div className='input-pass-wrapper u-Width100'>
      <input        
        value={valueInput}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        type={inputTypeState} 
        required
        className= {`input-pass u-marginVm u-Width95 ${inputColor} ${inputBackground} ${placeholderColor} `}
      />
      {inputType === 'password' && (
        <span className={`hidePassword-btn ${inputColor} `}
              onClick={togglePasswordVisibility}>
          {inputTypeState === 'password' ? <VisibilityOutlinedIcon/> : <VisibilityOffOutlinedIcon/>}
        </span>
      )}
    </div>    
  );
};
