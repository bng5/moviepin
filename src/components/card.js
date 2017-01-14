import React, { Component } from 'react';

import MovieCard from './movie-card';

class Card extends Component {

  detailClassForIndex() {
    let arrowClass = [];

    if (this.props.shouldDetail) {
      arrowClass.push('-arrow-for-this');
    }

    if (this.props.isSameRow) {
      arrowClass.push('-arrow-in-row');

      if (this.props.movieIndex == this.props.movie.index) {
        arrowClass.push('-arrow-in-row-for-this');
      }
    }

    return arrowClass.join(' ');
  }

  render() {
    const movie = this.props.movie;
    const detailClass = this.detailClassForIndex();

    return (
      <div key='deck-card'
          className={'deck-card -flex-row -priority0 ' +
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
