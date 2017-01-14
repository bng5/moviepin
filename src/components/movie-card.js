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
    
    this.props.onPin(this.props.movie);
  }

  render() {
    return (
      <div key='card' className='card'>
        <div key='card-poster' className='card__poster'
             onClick={() => {
               this.props.showDetail(this.props.movie);
             }}>
          <img key='poster-picture' className='card__poster -picture'
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
