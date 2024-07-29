import React, { useEffect, useState } from 'react'
import './PasswordStrengthStepMeter.scss'




export default function PasswordStrengthStepMeter({password}) {
  const [progress, setProgress] = useState('')
  const [message, setMessage] = useState('')
  const [passwordValue, setPasswordValue] = useState('')



  useEffect(()=>{
    handlePasswordCheck(password)
  },[password])


  const handlePasswordCheck = (password)=>{
  
    const strengthChecks = {
      length:0,
      hasUpperCase: false,
      hasLowerCase: false,
      hasNumber: false,
      hasSymbol: false
    }

    strengthChecks.length = password.length >= 8 ? true:false;
    strengthChecks.hasUpperCase = /[A-Z]+/.test(password)
    strengthChecks.hasLowerCase = /[a-a]+/.test(password)
    strengthChecks.hasNumber = /[0-9]+/.test(password)
    strengthChecks.hasSymbol = /[^A-Za-z0-9]+/.test(password)

    let verifiedList = Object.values(strengthChecks).filter((value)=>value)

    let strenght = verifiedList.length === 5
    ? "Strong"
    : verifiedList.length >= 2
    ? "Medium"
    : "Weak"

    setPasswordValue(password);
    setProgress(`${(verifiedList.length/5) * 100}%`);
    setMessage(strenght)

    

  }

  const getActiveColor =(type)=>{
    if(type === "Strong") return '#3FBB60';
    if(type === "Medium") return '#FE8040';
    return "#FF0054";
  }


  return (
  <div className='progress-bg'>
    <div 
    style={{
      width: progress,
      backgroundColor: getActiveColor(message)
    }}
    className='progress'></div>
  </div>
)
}

