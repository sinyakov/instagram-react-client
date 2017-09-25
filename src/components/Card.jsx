import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';
import styled from 'styled-components';
import like from '../img/like.svg';

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  max-width: 100%;
  margin: 0 0 2rem;
  text-align: left;
  border-radius: 0.25rem;
  background: #fff;
  box-shadow: 0 0 4px #bbb;
`;

const Link = styled.a`
  position: relative;
  display: block;
  overflow: hidden;
  color: rgb(255, 255, 255);
`;

const Img = styled.img`
  display: flex;
  width: 100%;
  transition: transform 0.25s ease-in-out;

  ${Link}:hover & {
    transform: scale(1.05);
  }
`;

const Like = styled.span`
  padding-left: 1.5rem;
  background-image: url(${like});
  background-repeat: no-repeat;
`;

const Meta = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: 0.25rem 0.5rem;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.6);
`;

const Caption = styled.p`
  margin: 0;
  padding: 0.5rem;
`;

const getDate = (num) => {
  moment.locale('ru');
  return moment(num * 1000).format('DD MMMM YYYY');
};

export default function Card({ card }) {
  return (
    <Wrapper>
      <Link href={card.link}>
        <Img
          className="card__image"
          src={card.loRes}
          srcSet={`${card.hiRes} 2x`}
          alt={card.caption}
        />
        <Meta>
          <Like>{card.likes}</Like>
          <div className="card__date">{getDate(card.time)}</div>
        </Meta>
      </Link>
      {card.caption && <Caption>{card.caption}</Caption>}
    </Wrapper>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    link: PropTypes.string,
    loRes: PropTypes.string,
    hiRes: PropTypes.string,
    caption: PropTypes.string,
    likes: PropTypes.number,
    time: PropTypes.string,
  }),
};

Card.defaultProps = {
  card: {},
};
