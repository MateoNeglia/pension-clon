import React from "react";
import "./subSectionTwo.scss";
//iconos
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
//Selector de lenguaje
// import DropdownLanguage from "../../../components/LanguageSelector/LanguageDropdownMenu";
// import { useTranslation } from "react-i18next";
//componentes
import { CardOneItems } from "../../../components/SubSectionTwo/CardOne/CardOneItems";
import CardTitleWSelect from '../../../components/CardTitleWSelect/CardTitleWSelect';
import VerticalBarsChart from "../../../components/VerticalBarsChart/VerticalBarsChart";

export default function SubSectionTwo() {
  
  return (
    <div className="u-displayFlex u-flexWrap u-Width100 sectionTwoMain ">
      {/* cardOne 1 */}
      <div className="base-data-card u-Height100 default-data-card-bg u-marginAm">
        <div className="card-label u-color-bright-blue">
          Movimientos de cartera
        </div>
        <div className="card-items u-Width100 u-displayFlex">
          <CardOneItems
            icon={<AttachMoneyRoundedIcon className="sub-card-icon" />}
            descripcion={"Depositos"}
            value={720.129}
            valueType={"U$D"}
          />
          <CardOneItems
            icon={<CurrencyExchangeOutlinedIcon className="sub-card-icon" />}
            descripcion={"Extracciones"}
            value={750.606}
            valueType={"U$D"}
          />
          <CardOneItems
            icon={<ListAltRoundedIcon className="sub-card-icon" />}
            descripcion={"Valor de cuota parte"}
            value={72.444}
            valueType={"U$D"}
          />
          <CardOneItems
            icon={<PeopleAltRoundedIcon className="sub-card-icon" />}
            descripcion={"Participantes Adheridos"}
            value={499}
            valueType={""}
          />
        </div>
      </div>

      {/* cardTwo 2 */}
      <div className="base-data-card u-Height100 default-data-card-bg u-marginAm">
        <div className="cardTwo-content">
          <div className="u-color-bright-blue">
            <CardTitleWSelect customTitle='Movimiento de Cartera'/>                    
          </div>
          <div className="cardTwo-header">
            <div className="cardTwo-header-value">
              U$S 5.987,34 <span>Saldo Acumulado</span>
            </div>
          </div>
          <VerticalBarsChart />
          
        </div>
      </div>
    </div>
  );
}
