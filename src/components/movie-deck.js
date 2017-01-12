import React, { Component } from 'react';

import _ from 'lodash';

import MovieCard from './movie-card';
import MovieDetail from './movie-detail'

const CARD_SIZE = 295;

class MovieDeck extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cardsPerRow: 0,
      dummyWidth: 0,
      movieDetail: null,
      addDetailAfter: 0,
      movieDetailIndex: 0,
      showDetailClass: '',
      showDetail: '--show'
    };
  }
  
  componentWillMount() {
    // parameter must be this.props.movies.length
    // it also must be called when window resizes (redux)
    this.setDummyContainer(15);
  }

  showDetail(movie) {
    const movieIndex = _.findIndex(this.props.movies, { id: movie.id } ) + 1;
    const movieInRow = Math.ceil(movieIndex/this.state.cardsPerRow);

    let movieComponent = null;

    if (movieInRow > 0) {
      movieComponent = this.movieDetailComponentWith(movie);

      if (_.isEmpty(this.state.showDetailClass)) {
        this.setState({
          movieDetailIndex: movieIndex,
          showDetailClass: 'container--card-with-detail',
          showDetail: '--show'
        });

      } else {
        console.log('bitch')
        this.setState({
          movieDetailIndex: 0,
          showDetailClass: '',
          showDetail: '--hidden'
        });
      }
        
    }

    this.setState({
      addDetailAfter: movieInRow * this.state.cardsPerRow,
      movieDetail: movieComponent
    });
  }

  movieDetailComponentWith(movie) {
    return (
      <div key='card-detail'
           className={'container--flex' +
                      ' container--flex--priority0' +
                      ' container--flex--row' +
                      ' container--card-detail' +
                      ' container--card-detail' +
                      this.state.showDetail}>
        <MovieDetail movie={movie}
                     showDetail={this.state.showDetail}/>
      </div>
    )
  }

  setDummyContainer(numberOfMovies) {
    const cardsPerRow = Math.floor(window.innerWidth / CARD_SIZE);
    const rowsFilled = Math.floor(numberOfMovies/cardsPerRow);
    const cardsLastRow = numberOfMovies - (cardsPerRow * rowsFilled);
    const itemsLeft = cardsPerRow - cardsLastRow;
    const dummyWidth = itemsLeft * CARD_SIZE;

    this.setState({
      cardsPerRow: cardsPerRow,
      dummyWidth: dummyWidth
    });
  }

  cards() {
    let deck = [];

    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].forEach((i) => { 
      for (const [index, movie] of this.props.movies.entries()) {
        console.log(index)

        let detailClass = '';

        if (this.state.movieDetailIndex == i) {
          detailClass = this.state.showDetailClass;
        }

        const test = (
          <div key={'container-' + (movie.id + i)}
               className={'container--flex' +
                          ' container--flex--priority0' +
                          ' container--flex--row' +
                          ' container--detail-arrow ' +
                          detailClass}>
            <MovieCard key={(movie.id + i)}
                       movie={movie}
                       showDetail={ (movie) => {
                         this.showDetail(movie);
                       }}
                       onPin={ (movie) => {
                         this.props.onPinMovie(movie)
                       }}/>
          </div>
        )

        deck.push(test);

        // @TODO when real data arrives change i for (index + 1)
        if (this.state.addDetailAfter == i) {
          deck.push(this.state.movieDetail);
        }
      }
    })}
    
    const dummyWidth = {width: this.state.dummyWidth + 'px'}

    deck.push(
      <div key='dummy-expandable-container'
           className={'container--flex' +
                      ' container--flex--priority0' +
                      ' container--flex--row'}
           style={dummyWidth}/>
    )

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
