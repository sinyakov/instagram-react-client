import React from 'react';
import 'normalize.css';
import 'flexboxgrid2/flexboxgrid2.css';

export default props => (
  <div className="card">
    <img className="card__image" src={props.url} alt={props.alt} />
    <p className="card__text">{props.text}</p>
  </div>
);
