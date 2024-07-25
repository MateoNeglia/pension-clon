import React from 'react'
import './SingInMain.scss';
import SignInForm from './SignInForm';

function SignInMain() {
  return (
<div className='sup-main-container'>
    <div className='main-container'>
        <div className='container'>
            <div className='titulo-text u-titles'> Criteria <span className='titulo-decorator'>|</span> Pension & Benefits</div>
            <div className='form-container'> <SignInForm/></div>
        </div>
    </div>
    <div className='bottom-container '>@ 2024 Criteria | Pension & benefits</div>
</div>
  )
}

export default SignInMain