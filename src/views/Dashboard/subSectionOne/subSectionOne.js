import React from 'react';
import "./SubSectionOne.scss"
import BarChartIcon from '@mui/icons-material/BarChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
//to be used in future logic
//import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MultipleLinesChart from '../../../components/MultipleLinesChart/MultipleLinesChart';


export default function SubSectionOne() {
  let currentPercentageValue = 0;

  return (
    <div>
      <div className="u-displayFlex u-flexWrap u-marginAm">
      <div className="base-data-card seccondary-data-card-bg u-marginAm">
        <div className='u-felxColumn'>
            <label className='card-label'>Valor Actual de la cartera</label>
            <label className='card-price'>U$D 7.303.451.-</label>
            <label className='card-sub-label'>
                <span className='u-color-success u-marginRs'>
                    {currentPercentageValue} %
                </span>                
                Desde el inicio del plan</label>
        </div>        
      </div>
      <div className="base-data-card default-data-card-bg u-marginAm u-displayFlex">
        <div className='card-icon-container'>
            <BarChartIcon/>
        </div>
        
        <div className='u-felxColumn u-marginHm'>
            <label className='card-label u-color-title-card'>Valor Inicial 2021</label>
            <label className='card-price'>U$D 7.303.451.-</label>
        </div>        
      </div>
      <div className="base-data-card default-data-card-bg u-marginAm u-displayFlex">
        <div className='card-icon-container'>
                <AttachMoneyIcon/>
        </div>
        <div className='u-felxColumn u-marginHm'>
            <label className='card-label u-color-title-card'>Valor a principio de año</label>
            <label className='card-price'>U$D 7.303.451.-</label>
        </div>        
      </div>
      <div className="base-data-card default-data-card-bg u-marginAm u-displayFlex">        
        <div className='u-felxColumn'>
            <label className='card-label u-color-title-card u-displayFlex u-justifySpaceBetween'>Rendimiento YTD $
                <div>
                    <InfoOutlinedIcon sx={{ fontSize: 10, cursor: 'pointer' }}/>
                </div>                
            </label>
            <label className='card-price'>U$D 7.303.451.-
                <span className='u-color-success'>
                    <TrendingUpIcon/>
                </span>
            </label>
        </div>        
      </div>
      <div className="base-data-card default-data-card-bg u-marginAm u-displayFlex">        
        <div className='u-felxColumn'>
            <label className='card-label u-color-title-card u-displayFlex u-justifySpaceBetween'>Rendimiento YTD %                
                    <InfoOutlinedIcon sx={{ fontSize: 10, cursor: 'pointer' }}/>                
            </label>
            <label className='card-price'>U$D 7.303.451.-
                <span className='u-color-success'>
                    <TrendingUpIcon/>
                </span>
            </label>
        </div>        
      </div>
      </div>
      <div className="u-displayFlex u-flexWrap u-marginAm">
        <div className="base-data-card default-data-card-bg u-marginAm u-displayFlex">
          <div className='u-flexColumn'>
            <h3>Rendimiento Histórico</h3>
            <MultipleLinesChart/>
          </div>
          
        </div>
        <div className='u-felxColumn'>
          <div className="base-data-card seccondary-data-card-side-bg u-marginAm">
            <div className='u-felxColumn'>
                <div className='seccondary-card-icon-container u-alignSelfEnd u-marginBs'>
                  <WalletOutlinedIcon/>
                </div>
                <label className='card-label'>Cash Disponible para invertir</label>
                <label className='card-price u-paddingBm'>U$D 7.303.451.-</label>                
            </div>        
          </div>
          <div className="base-data-card seccondary-data-card-side-bg u-marginAm">
            <div className='u-felxColumn'>
                <div className='seccondary-card-icon-container u-alignSelfEnd u-marginBs'>
                  <AttachMoneyIcon/>
                </div>
                <label className='card-label'>Cash invertido</label>
                <label className='card-price u-paddingBm'>U$D 7.303.451.-</label>                
            </div>        
          </div>
        </div>
      </div>
    </div>
    
  )
}