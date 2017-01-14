import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import _ from 'lodash';

import Utils from '../utils';
import Card from './card';
import DummyCard from './dummy-card';
import CardDetail from './card-detail';

class MovieDeck extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cardsPerRow: Math.floor(window.innerWidth / Utils.CARD_SIZE),
      movieIndex: 0,
      addDetailAfter: 0,
      detailInRow: 0,
      isSameRow: false
    };
  }

  showDetail(movie) {
    const movieIndex = _.findIndex(this.props.movies, { id: movie.id } ) + 1;
    const movieInRow = Math.ceil(movieIndex/this.state.cardsPerRow);
    const isSameRow = (this.state.detailInRow == movieInRow) &&
                      (this.state.detailInRow > 0) &&
                      (movieIndex != this.state.movieIndex);

    if (movieIndex == this.state.movieIndex) {
      this.setState({
        movieIndex: 0,
        addDetailAfter: 0,
        detailInRow: 0,
        isSameRow: false
      });

    } else {
      this.setState({
        movieIndex: movieIndex,
        addDetailAfter: movieInRow * this.state.cardsPerRow,
        detailInRow: movieInRow,
        isSameRow: isSameRow
      });
    }
  }

  card(movie, shouldDetail) {
    return (
      <Card key={'card-' + movie.id}
            movie={movie}
            shouldDetail={shouldDetail}
            isSameRow={this.state.isSameRow}
            movieIndex={this.state.movieIndex}
            showDetail={this.showDetail.bind(this)}
            onPinMovie={(movie) => {
              this.props.onPinMovie(movie);
            }}/>
    );
  }

  detail() {
    const movieIndex = this.state.movieIndex;

    return(
      <CardDetail key='card-detail'
                  movie={this.props.movies[movieIndex - 1]}
                  movieIndex={movieIndex}/>
    );
  }

  dummy() {
    return (
      <DummyCard key='dummy-card'
                 movies={this.props.movies}
                 cardsPerRow={this.state.cardsPerRow}/>
    );
  }

  cards() {
    let deck = [];
    let shouldDetail = false;
    let detailIt = false;
    let lastRowItem = false;

    for (let [index, movie] of this.props.movies.entries()) {
      shouldDetail = (this.state.movieIndex == index + 1);
      movie.index = index + 1;

      if (!detailIt) {
        detailIt = shouldDetail;
      }

      lastRowItem = (this.state.addDetailAfter == index + 1);

      deck.push(this.card(movie, shouldDetail));

      if (detailIt && lastRowItem) {
        deck.push(this.detail());
      }
    }

    deck.push(this.dummy());

    if (detailIt && !lastRowItem) {
      deck.push(this.detail());
    }

    return deck;
  }

  render() {
    if (_.isEmpty(this.props.movies)) { return null;}

    return (
      <ReactCSSTransitionGroup key={'rcsstg'}
                               component='div'
                               className='container__deck -flex-row'
                               transitionName={{
                                 enter: 'enter',
                                 enterActive: 'show',
                                 leave: 'leave',
                                 leaveActive: 'hidden'
                               }}
                               transitionEnterTimeout={2000}
                               transitionLeaveTimeout={2000}>
        {this.cards()}
      </ReactCSSTransitionGroup>
    );
  }
}

export default MovieDeck;
