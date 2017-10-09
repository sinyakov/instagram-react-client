import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import jsonp from 'jsonp';

import { token } from '../constants';
import Card from './Card';

const Wrapper = styled.div`margin: 1rem 0;`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  margin: 1rem;
  cursor: pointer;
  color: #000;
  border: solid 0.5rem rgba(98, 188, 78, 1);
  border-bottom-color: #fff;
  border-radius: 50%;
  background: rgba(98, 188, 78, 1);
  box-shadow: 0 0 6px #aaa;
  font-family: 'Kurale', Helvetica, Arial, sans-serif;

  &:hover {
    box-shadow: 0 0 3px #aaa;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 5rem;
  height: 5rem;
  margin: 1rem;
  animation: ${rotate360} 1s infinite linear;
  border: solid 0.5rem rgba(98, 188, 78, 1);
  border-bottom-color: #fff;
  border-radius: 50%;
`;

const renderCards = cards =>
  cards.map((card, index) => (
    <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3" key={card.id}>
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
      } else if (res.meta.code === 200) {
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
      <Wrapper>
        <div className="row middle-xs">{!this.state.isLoading && renderCards(this.state.data)}</div>
        <div className="row middle-xs center-xs">
          {(this.state.isLoading || this.state.isLoadingMore) && <Spinner />}
          {isShowingButton && (
            <Button onClick={this.loadMore} type="button">
              Больше котиков
            </Button>
          )}
        </div>
      </Wrapper>
    );
  }
}
