import React, { useState } from 'react';
import { InputPass } from '../../../components/InputPass/InputPass';
import { ActionButton } from '../../../components/ActionButton/ActionButton';
import './ForgotPassword.scss';
import { ReactComponent as Logo } from '../../../assets/logo-lower-opacity.svg';
import { ReactComponent as MessageBubble } from '../../../assets/message-bubble.svg';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/reset-password');
    setMessage(`If an account with ${email} exists, a password reset email has been sent.`);
  };

  return (
    <div className='forgot-component'>      
      <Logo className='logo-pass-flow'/>
      <button className='sign-in-button'>Sign In</button>
      <div className='u-password-card u-password-card-background '>
        <div className='u-paddingVl'>
          <MessageBubble/>
        </div>        
        <h2 className='u-color-dark-blue u-marginAn'>¿Olvidaste tu Contraseña?</h2>
        <span className='u-color-white u-marginAm'>
            Ingresa tu email para resetear tu contraseña:
        </span>
        <form onSubmit={handleSubmit} className='u-felxColumn u-marginVm'>
            <InputPass valueInput={email} setValue={setEmail} placeholder='Por favor ingresa tu email' inputType='email'/>
            <ActionButton buttonType = 'submit' buttonText = 'Enviar' buttonColor='u-color-white' buttonBackground='u-background-dark-blue'/>            
        </form>
        <a href='/#' className = 'u-linkStyleless u-color-dark-blue'>&lt; Regresar</a>
      </div>      
      {message && <p>{message}</p>}
      <div className='u-displayFlex u-color-white u-paddingAl login-footer'>
        <div>
          <span>
            © 2024 Criteria | Pension & Benefits
          </span>          
        </div>
        <div>
          <ul className="u-displayFlex footer-links">
            <li>About</li>
            <li>Support</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
