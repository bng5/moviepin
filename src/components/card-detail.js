import React, { Component } from 'react';

import MovieDetail from './movie-detail';

class CardDetail extends Component {

  showDetailClass() {
    if (this.props.movieIndex > 0) {
      return '-show';
    }

    return '-hidden';
  }

  render() {

    if (this.props.movieIndex <= 0) { return null; }

    const showDetail = this.showDetailClass();

    return (
      <div key='card-detail'
           className={'deck-detail -flex-row -priority0 ' + showDetail}>
        <MovieDetail movie={this.props.movie}
                     showDetail={showDetail}/>
        <div className={'card__detail -as-cover ' + showDetail}></div>
      </div>
    )
  }
}

export default CardDetail;
