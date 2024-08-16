import React, { useEffect, useState } from "react";
import "./PasswordStrengthStepMeter.scss";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PasswordStrengthStepMeter({ password }) {
  const [progress, setProgress] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    handlePasswordCheck(password);
  }, [password]); 

  const handlePasswordCheck = (password) => {
    const strengthChecks = {
      length: password.length >= 8,
      hasUpperCase: /[A-Z]+/.test(password),
      hasLowerCase: /[a-z]+/.test(password),
      hasNumber: /[0-9]+/.test(password),
      hasSymbol: /[^A-Za-z0-9]+/.test(password),
    };

    const verifiedList = Object.values(strengthChecks).filter(Boolean);
    const strength = 
      verifiedList.length === 5 ? "Fuerte" :
      verifiedList.length >= 2 ? "Media" :
      "Débil";

    setProgress(`${(verifiedList.length / 5) * 100}%`);
    setMessage(strength);
  };

  const getActiveColor = (type) => {
    if (type === "Fuerte") return "#3FBB60";
    if (type === "Media") return "#FE8040";
    return "#FF0054";
  };

  return (
    <div>
      <div className="progress-bg u-marginVm">
        <div
          style={{
            width: progress,
            backgroundColor: getActiveColor(message),
          }}
          className="progress"
        ></div>
      </div>
      <div className="meter-text">Fortaleza de la Contraseña: {message}</div>

      <Accordion 
        className="u-marginVm meter-text"
        sx={{
          backgroundColor: '#089CAD4D',
          borderRadius: '12px !important', 
          color: '#FFFFFF',                
          '&:before': {
            display: 'none',                    
          }
        }} >
        <AccordionSummary            
            aria-controls="panel1-content"
            id="panel1-header"
            expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }} />}
            sx={{
              minHeight: '30px',
              '& .MuiAccordionSummary-content': {
                margin: 0,      
              },
            }}
          >
            ¿Cómo mejorar tu contraseña?
          </AccordionSummary>
          <AccordionDetails>
            Usa 8 caracteres que contengan mayúsculas, números y símbolos.
          </AccordionDetails>
      </Accordion>
    </div>
  );
}
