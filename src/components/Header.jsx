import React from 'react';
import logo from '../img/logo.png';

export default () => (
  <header className="main-header">
    <img src={logo} className="main-header__logo" alt="Logo" />
    <div className="main-header__text">
      <h1 className="main-header__title">Факты о котиках</h1>
      <p className="main-header__tagline">
        Из инстаграма&nbsp;
        <a className="main-header__link" href="https://instagram.com/catsfromreddit">
          @catsfromreddit
        </a>
      </p>
    </div>
  </header>
);
