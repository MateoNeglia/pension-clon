import React from 'react'
import './CreatePasswordMain.scss';
import CretePasswordForm from './CreatePasswordForm';
import criteriaLogo from '../../assets/logo-lower-opacity.svg'




export default function CreatePasswordMain() {
  return (
    <div className='sup-main-container'>
    <div className='main-container'>
        <div className='container'>
            <div className='titulo-text '>  
            <img src={criteriaLogo} alt='Criteria' className='logo'/>  
           
            </div>
            <div className='form-container'> <CretePasswordForm/></div>
        </div>
    </div>
    <div className='bottom-container '>@ 2024 Criteria | Pension & benefits</div>
</div>
  )
}





