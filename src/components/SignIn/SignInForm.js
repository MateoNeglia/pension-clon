import React from 'react'
import './SignInForm.scss'






export default function SignInForm() {
  return (
    <div className='wrapper u-background-light-blue'>
    <form className='form-component ' action=''>
      <h1>Sign in</h1>
      <h4>Bienvenidos a Criteria Pension & Benefits</h4>
      <span className='text-divider' >Ingresa tus datos</span>
      <div className='input-box'>
        <input type='text' placeholder='Email'></input>
      </div>
      <div className='input-box '>
        <input type='password' placeholder='Contraseña'></input>
      </div>
      <div className='forgot-password'>
        <a href='#'>¿Olvidaste tu contraseña?</a>
      </div>
      {/* hacer boton componente para reutilizar */}
      <button type='sumbit'>Ingresar</button>
    </form>
  </div>
  )
}


