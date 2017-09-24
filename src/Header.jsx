import React from 'react';

export default () => (
  <header className="main-header">
    <img
      src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-256.png"
      className="main-header__logo"
      alt="Logo"
    />
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
