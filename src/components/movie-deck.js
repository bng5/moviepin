import React, { Component } from 'react';

import MovieCard from './movie-card';

class MovieDeck extends Component {
  cards() {
    let deck = [];

    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].forEach((i) => { 
      const test = this.props.movies.map((movie) => {
        return (
          <div key={'container-' + (movie.id + i)}
               className={'container--flex' +
                          ' container--flex--priority0' +
                          ' container--flex--row'}>
            <MovieCard key={(movie.id + i)}
                       movie={movie}
                       onClick={ (movie) => {
                         this.props.onMovieClick(movie)
                       }}/>
          </div>
        )
      });

      deck.push(test);
    })}

    return deck;
  }

  render() {
    const containerRow = 'container--flex container--flex--row';

    return (
      <div className={containerRow +
                      ' container--deck'}>
        {this.cards()}
      </div>
    );
  }
}

export default MovieDeck;
