import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './PageHeader.css';

const Header = () => (
  <header className="Header">
    <div>
      <Link to="/" className="LogoLink"> <img src={logo} alt="" /></Link>
    </div>
    <div className="HeaderLinksWrap">
      <div className="HeaderLinks bold uppercase">
        <Link to="#" className="HeaderLinkDocs">docs</Link>
        <Link to="/login" className="HeaderLinkLogin">login</Link>
      </div>
    </div>
  </header>
);

export default Header;
