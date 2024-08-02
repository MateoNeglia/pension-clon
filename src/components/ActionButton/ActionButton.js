import React from 'react';
import './ActionButton.scss';

export const ActionButton = ({ buttonType, buttonText, buttonBackground, buttonColor }) => {
  return (  
        <button
            type = {buttonType}
            className = {`action-button u-marginVm ${buttonColor} ${buttonBackground} `}
        >
            {buttonText}
      </button>  
  );
};