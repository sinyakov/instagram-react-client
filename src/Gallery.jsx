import React from 'react';

import Card from './Card';

const cardsMock = [
  {
    url:
      'https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-15/e35/21879266_1955265944746318_7760295026654969856_n.jpg',
    alt: '123',
    text: 'Каждый год около четырех миллионов кошек съедают в Азии.',
  },
  {
    url:
      'https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-15/e35/21879469_689007304626253_1429359171874062336_n.jpg',
    alt: '123',
    text:
      'В среднем кошки тратят 2/3 суток на сон. Это означает, что девятилетний кот был активен только три года своей жизни.',
  },
  {
    url:
      'https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-15/e35/21980435_139046300039950_3926953293825179648_n.jpg',
    alt: '123',
    text:
      'В отличие от собак, кошки не имеют пристрастия к сладкому. Ученые считают, что это связано с мутацией в одном из ключевых рецепторов вкуса.',
  },
  {
    url:
      'https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-15/e35/21980916_2017885718445195_6553298470747242496_n.jpg',
    alt: '123',
    text:
      'В отличие от собак, кошки не имеют пристрастия к сладкому. Ученые считают, что это связано с мутацией в одном из ключевых рецепторов вкуса.',
  },
  {
    url:
      'https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-15/e35/21909546_119835172016177_2218938993133748224_n.jpg',
    alt: '123',
    text:
      'В отличие от собак, кошки не имеют пристрастия к сладкому. Ученые считают, что это связано с мутацией в одном из ключевых рецепторов вкуса.',
  },
];

const renderCards = cards =>
  cards.map(card => (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <Card url={card.url} alt={card.alt} text={card.text} />
    </div>
  ));

export default () => (
  <div className="gallery">
    <div className="row">{renderCards(cardsMock)}</div>
  </div>
);
