import React, { useState } from 'react';
import { InputPass } from '../../../components/InputPass/InputPass';
import { ActionButton } from '../../../components/ActionButton/ActionButton';
import './ResetPassword.scss';
import { ReactComponent as Logo } from '../../../assets/logo-lower-opacity.svg';
import { ReactComponent as MessageBubble } from '../../../assets/message-bubble.svg';
import PasswordStrengthStepMeter from '../../../components/PasswordStrengthMeter/PasswordStrengthStepMeter';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [passwordReCheck, setPasswordReCheck] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setMessage(`If an account with ${password} exists, a password reset email has been sent.`);
  };

  return (
    <div className='forgot-component'>      
      <a href='/'>
        <Logo className='logo-pass-flow'/>
      </a>
      <a className='sign-in-button u-linkStyleless' href="/">Sign In</a>
      <div className='u-password-card u-password-card-background '>
        <div className='u-paddingVl'>
            <MessageBubble/>
        </div>
        
        <h2 className='u-color-dark-blue u-marginAn'>Reestablecer Contraseña</h2>        
        <form onSubmit={handleSubmit} className='u-felxColumn u-marginVm'>
            <InputPass valueInput={password} setValue={setPassword} placeholder='Ingresa tu nueva contraseña' inputType='password'/>
            <PasswordStrengthStepMeter password={password}/>
            <InputPass valueInput={passwordReCheck} setValue={setPasswordReCheck} placeholder='Repetir contraseña' inputType='password'/>
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

export default ResetPassword;
