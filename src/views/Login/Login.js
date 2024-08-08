import React from 'react'
import './Login.scss';
//import SignInForm from './SignInForm';
import criteriaLogo from '../../assets/logo-lower-opacity.svg';
import { ActionButton } from '../../components/ActionButton/ActionButton';
import { InputPass } from '../../components/InputPass/InputPass';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
  return (
    <div className='sup-main-container'>
    <div className='main-container'>
        <div className='container'>
            <div className='titulo-text '>  
            <img src={criteriaLogo} alt='Criteria' className='logo'/>  
           
            </div>
            <div className='form-container'>
                {/*<SignInForm/>*/}
                <div className='login-card u-background-light-blue'>
                        <h1 className='u-marginBs'>Sign In</h1>
                        <span className='u-color-white u-marginBl'>Bienvenidos a Criteria Pension & Benefits</span>
                        <span className='text-divider' >Ingresa tus datos</span>
                    <form className='u-felxColumn u-marginVm' action=''>                        
                            <InputPass valueInput={email} 
                                       setValue={setEmail} 
                                       placeholder='Ingresa tu email' 
                                       inputType='email' 
                                       inputBackground='u-transparent-white-background'
                                       inputColor='u-color-lightest-blue'
                                       placeholderColor='u-placeholder-lightest-blue'/>
                            <InputPass valueInput={email} 
                                       setValue={setEmail} 
                                       placeholder='Ingresa tu nueva contraseña' 
                                       inputType='password' 
                                       inputBackground='u-transparent-white-background'
                                       inputColor='u-color-lightest-blue'
                                       placeholderColor='u-placeholder-lightest-blue'/>
                            <div className='forgot-password'>
                                <a href='/forgot-password'>¿Olvidaste tu contraseña?</a>
                            </div>
                            <ActionButton buttonType = 'submit' buttonText = 'Ingresar' buttonColor='u-color-dark-blue' buttonBackground='u-fog-white-background'/>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div className='bottom-container '>@ 2024 Criteria | Pension & benefits</div>
</div>
  )
}