import React, { Component } from 'react';

import MovieDetail from './movie-detail';

class CardDetail extends Component {

  showDetailClass() {
    if (this.props.movieIndex > 0) {
      return 'transition-enter-show';
    }

    return 'transition-leave-hidden';
  }

  render() {

    if (this.props.movieIndex <= 0) { return null; }

    const showDetail = this.showDetailClass();

    return (
      <div key='card-detail'
           className={'deck-detail -flex-row -priority0 ' + showDetail}>
        <MovieDetail movie={this.props.movie}/>
        <div key='cover-detail'
             className={'card__detail ' +
                        '-with-react-transition ' +
                        '-as-cover '}></div>
      </div>
    )
  }
}

export default CardDetail;
