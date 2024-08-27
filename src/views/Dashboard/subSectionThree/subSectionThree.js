import React from 'react';
import "./SubSectionThree.scss"
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import { ActionButton } from '../../../components/ActionButton/ActionButton';
import  DonutChart  from '../../../components/DonutChart/DonutChart';
import CardTitleWSelect from '../../../components/CardTitleWSelect/CardTitleWSelect';


export default function SubSectionThree() {  

  return (
    <div>
      <div className="u-displayFlex u-flexWrap u-marginAm">      
      <div className="base-data-card default-data-card-bg u-marginAm u-displayFlex">
        <div className='u-felxColumn'>
          <div>            
            <CardTitleWSelect customTitle='Diversificación de Activos'/>
          </div>
          <DonutChart />  
        </div>        
      </div>
      <div className="base-data-card default-data-card-bg u-marginAm u-displayFlex">
      <div className='u-felxColumn'>
          <div>            
            <CardTitleWSelect customTitle='Distribución del $ segun portafolio'/>
          </div>
          <DonutChart />  
        </div>                
      </div>
      <div className="base-data-card seccondary-data-card-bg u-marginAm">
        <div className='u-felxColumn need-help-font-styles'>
            <HeadsetMicOutlinedIcon/>
            <h3 className='card-label'>Necesitas ayuda?</h3>
            <span className='card-sub-label'>
                Consulta nuestros canales de contactación
            </span>
            <ActionButton buttonType = 'button' buttonText = 'Contactanos' buttonColor='#252F40' buttonBackground='u-white-background'/>            
        </div>        
      </div>
      </div>
    </div>
    
  )
}