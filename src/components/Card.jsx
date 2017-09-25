import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';

const getDate = (num) => {
  console.log(moment.locale);
  moment.locale('ru');
  return moment(num * 1000).format('DD MMMM YYYY');
};

export default function Card({ card }) {
  return (
    <div className="card">
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
}

Card.propTypes = {
  card: PropTypes.shape({
    link: PropTypes.string,
    loRes: PropTypes.string,
    hiRes: PropTypes.string,
    caption: PropTypes.string,
    likes: PropTypes.number,
    time: PropTypes.number,
  }),
};

Card.defaultProps = {
  card: {},
};
