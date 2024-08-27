import React from 'react';
import SubSectionTwo  from './subSectionTwo/subSectionTwo';
import SubSectionOne  from './subSectionOne/subSectionOne';
import SubSectionThree  from './subSectionThree/subSectionThree';
import DashboardHeader from './DashboardHeader/DashboardHeader';
import "./MainDashboard.scss";

export default function MainDashboard() {
  return (
    <div className='u-displayGrid section-two-main main-dashboard'>
      <div className=''><DashboardHeader/></div>
      <div className=''><SubSectionOne/></div>
      <div className=''><SubSectionTwo/></div>
      <div className=''><SubSectionThree/></div>
    </div>
  )
}
