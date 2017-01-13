import React, { Component } from 'react';

import MovieCard from './movie-card';

class Card extends Component {

  detailClassForIndex() {
    if (this.props.shouldDetail) {
      return '-arrow-for-this';
    }

    return '';
  }

  render() {
    const movie = this.props.movie;
    const detailClass = this.detailClassForIndex();

    return (
      <div className={'deck-card -flex-row -priority0 ' +
                      '-up-arrow ' + detailClass}>
        <MovieCard key={movie.id}
                   movie={movie}
                   showDetail={ (movie) => {
                     this.props.showDetail(movie);
                   }}
                   onPin={ (movie) => {
                     this.props.onPinMovie(movie)
                   }}/>
      </div>
    );
  }
}

export default Card;
