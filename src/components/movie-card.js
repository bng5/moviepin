import React, { Component } from 'react';

class MovieCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pinit: '-pin'
    };
  }

  togglePin() {
    if (this.state.pinit == '-pin') {
      this.setState({ pinit: '-unpin' });
    } else {
      this.setState({ pinit: '-pin' });
    }
    
    this.props.onPinMovie(this.props.movie);
  }

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
    const detailClass = this.detailClassForIndex();

    return (
      <div key='deck-card'
          className={'deck__card ' +
                     '-up-arrow ' + detailClass}>
        <div key='card-poster' className='card__poster'
             onClick={() => {
               this.props.showDetail(this.props.movie);
             }}>
          <img key='poster-picture' className='card-poster -picture'
               src={this.props.movie.poster}/>
        </div>

        <a key='poster-pin'
           className={'card__pinit -next-to-poster ' + this.state.pinit}
           onClick={this.togglePin.bind(this)}>
          <span key='icon-pin' className='icon-pin'></span>
        </a>
      </div>
    );  
  }  
}

export default MovieCard;
