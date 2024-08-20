import React from 'react'
import './CardOneItems.scss'


export const CardOneItems = ({icon, descripcion, value, valueType}) => {
  return (
    <div className='base-data-card  sub-card-main-container  '>

    <div className=''>{icon}</div>

    <div className='sub-card-container'>
      <div className='subtitle-alpha'>{descripcion}</div>
      <span className='sub-card-value'>{valueType} {value}</span>
    </div>

    </div>
  )
}
