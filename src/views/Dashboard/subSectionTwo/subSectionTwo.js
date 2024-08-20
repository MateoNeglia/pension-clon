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

export default function SubSectionTwo() {
  
  return (
    <div className="u-displayFlex u-Width100 u-Height100  sectionTwoMain ">
      {/* cardOne 1 */}
      <div className="base-data-card u-Width25  u-Height100  sectionTwoCardOne ">
        <div className="u-subtitles u-color-bright-blue">
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
      <div className="base-data-card u-Width100 u-Height100 sectionTwoCardTwo">
        <div className="cardTwo-content">
          <div className="u-subtitles u-color-bright-blue">
            Movimientos de Cartera
          </div>
          <div className="cardTwo-header">
            <div className="cardTwo-header-value">
              U$S 5.987,34 <span>Saldo Acumulado</span>
            </div>

            <div>
              DowpDownMenu
           
            </div>
          </div>
          <div className="cardTwo-graph">Grafico</div>
          <div className="cardTwo-footer">
            <span>
              {" "}
              <span className="ref-color-1">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>{" "}
              Extracciones{" "}
            </span>
            <span>
              {" "}
              <span className="ref-color-2">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>{" "}
              Depositos
            </span>
            <span>
              {" "}
              <span className="ref-color-3">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>{" "}
              Evolucion de la cartera
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
