import React from 'react';
import './CreatePassword.scss';
import criteriaLogo from '../../../assets/logo-lower-opacity.svg';
import { useState } from 'react';
import { ActionButton } from '../../../components/ActionButton/ActionButton';
import { InputPass } from '../../../components/InputPass/InputPass';
import PasswordStrengthStepMeter from '../../../components/PasswordStrengthMeter/PasswordStrengthStepMeter';

export default function CreatePasswordMain() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordReCheck, setPasswordReCheck] = useState('');
    //const [passwordChecker, setPasswordChecker] = useState('');
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
                        <h1 className='u-marginBs'>Crear Contraseña</h1>
                        <span className='u-color-white u-marginBl'>Bienvenidos a Criteria Pension & Benefits</span>
                        <span className='text-divider' >Ingresa tus datos</span>
                    <form className='u-felxColumn u-marginVm' action=''>                        
                            <InputPass valueInput={email} 
                                       setValue={setEmail} 
                                       placeholder='Email' 
                                       inputType='email' 
                                       inputBackground='u-transparent-white-background'
                                       inputColor='u-color-lightest-blue'
                                       placeholderColor='u-placeholder-lightest-blue'/>
                            <InputPass valueInput={password}  
                                       setValue={setPassword}  
                                       placeholder='Crear Contraseña' 
                                       inputType='password' 
                                       inputBackground='u-transparent-white-background'
                                       inputColor='u-color-lightest-blue'
                                       placeholderColor='u-placeholder-lightest-blue'/>

                            <PasswordStrengthStepMeter password={password}/>
                            <InputPass valueInput={passwordReCheck}  
                                       setValue={setPasswordReCheck}  
                                       placeholder='Repetir Contraseña' 
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