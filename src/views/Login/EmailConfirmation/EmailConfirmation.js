import React from 'react';
import './EmailConfirmation.scss';
import { ReactComponent as Logo } from '../../../assets/logo-lower-opacity.svg';
import { ReactComponent as EmailSent } from '../../../assets/email-sent.svg';


const EmailConfirmation = () => {

  return (
    <div className='forgot-component'> 
      <a href='/'>
        <Logo className='logo-pass-flow'/>
      </a>      
      <a className='sign-in-button u-linkStyleless' href="/">Sign In</a>
      <div className='u-password-card u-password-card-background '>
        <div className='u-paddingVl'>
            <EmailSent/>
        </div>
        <p>
            Hemos enviado un enlace para restablecer su contraseña a la dirección de correo electrónico proporcionada. 

            Por favor, revise su bandeja de entrada y Spam.
            Ingresa tu email para resetear tu contraseña
        </p>
      </div>
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

export default EmailConfirmation;
