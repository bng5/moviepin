import React, { Component } from 'react';

import _ from 'lodash';

import Card from './card';
import DummyCard from './dummy-card';
import CardDetail from './card-detail';

const CARD_SIZE = 295;

class MovieDeck extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cardsPerRow: Math.floor(window.innerWidth / CARD_SIZE),
      movieIndex: 0,
      addDetailAfter: 0
    };
  }

  showDetail(movie) {
    const movieIndex = _.findIndex(this.props.movies, { id: movie.id } ) + 1;
    const movieInRow = Math.ceil(movieIndex/this.state.cardsPerRow);
    
    if (movieIndex == this.state.movieIndex) {
      this.setState({
        movieIndex: 0,
        addDetailAfter: 0
      });

    } else {
      this.setState({
        movieIndex: movieIndex,
        addDetailAfter: movieInRow * this.state.cardsPerRow
      });
    }
  }

  card(movie, shouldDetail) {
    return (
      <Card key={'card-' + movie.id}
            movie={movie}
            shouldDetail={shouldDetail}
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

    for (const [index, movie] of this.props.movies.entries()) {
      shouldDetail = (this.state.movieIndex == index + 1);

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
      <div className='container__deck -flex-row'>
        {this.cards()}
      </div>
    );
  }
}

export default MovieDeck;
