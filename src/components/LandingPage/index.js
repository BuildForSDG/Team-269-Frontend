import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton';
import Header from '../PageHeader';
import LandingFooter from '../PageFooter';
import statsicon from '../../images/statsicon.png';
import './LandingPage.css';

const LandingPage = () => (
  <div className="LandingPageMain">
    <Header />
    <div className="LandingPageMainContent">
      <div className="LandingPageMainContentInfo">
        <div>
          <h1 className="uppercase extra-bold">Your  stats bank for slum data</h1>
          <h3 className="bold">A data collection app to measure proportion of urban population living in slums, informal settlements or inadequate housing.</h3>
          <Link to='/register'><PrimaryButton label="SignUp" /></Link>
        </div>
      </div>
      <div className="LandingPageMainContentImg">
      <img src={statsicon} alt="" className="logo-center" />
      </div>
    </div>
    <div className="LandingPageFooter">
      <LandingFooter />
    </div>
  </div>
);

export default LandingPage;
