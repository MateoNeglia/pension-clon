import React from 'react'
import './CreatePasswordForm.scss'



function CretePasswordForm() {
  return (
    <div className='wrapper u-background-light-blue'>
      <form className='form-component ' action=''>
        <h1>Crear Contraseña</h1>
        <h4>Bienvenidos a Criteria Pension & Benefits</h4>
        <span className='text-divider' >Ingresa tus datos</span>
        <div className='input-box'>
          <input type='text' placeholder='Email'></input>
        </div>
        <div className='input-box '>
          <input type='password' placeholder='Crear Contraseña'></input>
        </div>
        {/* Hacer el password strenght progress bar */ }
        <div className='password-text'><p>Usa 8 Caracteres que contengan letras, numeros y simbolos</p></div>
        <div className='input-box '>
          <input type='password' placeholder='Repetir Contraseña'></input>
        </div>
        {/* hacer boton componente para reutilizar */}
        <button type='sumbit'>Ingresar</button>
      </form>
    </div>
  )
}

export default CretePasswordForm