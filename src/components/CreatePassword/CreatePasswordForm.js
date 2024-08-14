import React from 'react'
import './CreatePasswordForm.scss'
import PasswordStrengthStepMeter from '../PasswordStrengthMeter/PasswordStrengthStepMeter'
import { useState } from 'react'

export default function CreatePasswordForm() {
  const [hidePassword, setHidePassword] = useState(true)
  const [passwordChecker, setPasswordChecker] = useState('')
  

  return (
    <div className='wrapper u-background-light-blue'>
    <form className='form-component ' action=''>
      <h1>Crear Contraseña</h1>
      <h4>Bienvenidos a Criteria Pension & Benefits</h4>
      <span className='text-divider' >Ingresa tus datos</span>
      <div className='input-box'>
        <input type='text' placeholder='Email'></input>
      </div>
    
     <div className='password-box'>
      <div className='input-box '>

     
      <input maxLength={15} value={passwordChecker} onChange={(e) =>setPasswordChecker(e.target.value)} type={hidePassword ? "password" :"text"} placeholder='Crear Contraseña' ></input>
     

          {/* cambiar a icono mostrar/ocultar Contraseña */}
          <span  className='hidePassword-btn' onClick={()=>{
            setHidePassword(!hidePassword)
          }} >Mostar/Ocultar</span>
    </div>
     </div>

      <div className='password-text'><p>Usa 8 caracteres que contengan letras, numeros y simbolos</p></div>

      <div><PasswordStrengthStepMeter password={passwordChecker}/></div>
 
      <div className='input-box '>
        <input  type='password' placeholder='Repetir Contraseña'></input>
      </div>


      {/* hacer boton componente para reutilizar */}
      <button type='sumbit'>Ingresar</button>
    </form>
  </div>
  )
}



