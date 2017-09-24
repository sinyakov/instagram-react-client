import React, { Component } from 'react';
import jsonp from 'jsonp';
import { token } from './constants';

import Card from './Card';

const renderCards = cards =>
  cards.map(card => (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={card.id}>
      <Card card={card} />
    </div>
  ));

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentWillMount() {
    const url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`;

    jsonp(url, null, (err, res) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(res);
        const data = res.data.map(card => ({
          id: card.id,
          link: card.link,
          time: card.created_time,
          likes: card.likes.count,
          loRes: card.images.low_resolution.url,
          hiRes: card.images.standard_resolution.url,
          caption: card.caption ? card.caption.text : null,
        }));

        this.setState({
          isLoading: false,
          data,
        });
      }
    });
  }

  render() {
    return (
      <div className="gallery">
        <div className="row">
          {this.state.isLoading ? 'Загрузка' : renderCards(this.state.data)}
        </div>
      </div>
    );
  }
}
