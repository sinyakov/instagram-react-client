import React from 'react';
import 'normalize.css';
import 'flexboxgrid2/flexboxgrid2.css';

const getDate = num => new Date(num * 1000).toDateString();

export default ({ card, order }) => (
  <div className="card" style={{ transform: `rotate(${order % 2 ? 1 : -1}deg)` }}>
    <a className="card__link" href={card.link}>
      <img
        className="card__image"
        src={card.loRes}
        srcSet={`${card.hiRes} 2x`}
        alt={card.caption}
      />
      <div className="card__meta">
        <div className="card__likes">Likes: {card.likes}</div>
        <div className="card__date">{getDate(card.time)}</div>
      </div>
    </a>
    {card.caption && <p className="card__text">{card.caption}</p>}
  </div>
);
