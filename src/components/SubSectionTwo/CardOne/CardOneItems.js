import React from 'react'
import './CardOneItems.scss'


export const CardOneItems = ({icon, descripcion, value, valueType}) => {
  return (
    <div className='base-data-card default-data-card-bg u-displayFlex u-marginAm nested-card'>
      <div className='card-icon-container'>
        {icon}
      </div>
      <div className='u-felxColumn u-marginHm'>
        <div className='card-label u-color-title-card'>{descripcion}</div>
        <span className='card-price'>{valueType} {value}</span>
      </div>
    </div>
  )
}
