import React, { Component } from 'react';
import jsonp from 'jsonp';
import { token } from './constants';

import Card from './Card';

const renderCards = cards =>
  cards.map((card, index) => (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={card.id}>
      <Card card={card} order={index} />
    </div>
  ));

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      isLoadingMore: false,
      nextUrl: null,
    };

    this.loadData = this.loadData.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  componentWillMount() {
    const url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`;
    this.loadData(url, this);
  }

  loadData(url) {
    jsonp(url, null, (err, res) => {
      if (err) {
        console.error(err.message);
      } else {
        const nextUrl = res.pagination.next_url;
        const cards = res.data.map(card => ({
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
          isLoadingMore: false,
          data: [...this.state.data, ...cards],
          nextUrl: nextUrl || null,
        });
      }
    });
  }

  loadMore(e) {
    e.preventDefault();
    this.setState({
      isLoadingMore: true,
    });
    this.loadData(this.state.nextUrl);
  }

  render() {
    const isShowingButton = !this.state.isLoadingMore && this.state.nextUrl;
    return (
      <div className="gallery">
        <div className="row middle-xs center-xs">
          {!this.state.isLoading && renderCards(this.state.data)}
          {(this.state.isLoading || this.state.isLoadingMore) && <div className="loading" />}
          {isShowingButton && (
            <button onClick={this.loadMore} className="load-btn" type="button">
              Больше котиков
            </button>
          )}
        </div>
      </div>
    );
  }
}
