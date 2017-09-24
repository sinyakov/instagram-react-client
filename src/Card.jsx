import React from 'react';
import 'normalize.css';
import 'flexboxgrid2/flexboxgrid2.css';

export default ({ card }) => (
  <div className="card">
    <a href={card.link}>
      <img
        className="card__image"
        src={card.loRes}
        srcSet={`${card.hiRes} 2x`}
        alt={card.caption}
      />
    </a>
    {card.caption && <p className="card__text">{card.caption}</p>}
  </div>
);
