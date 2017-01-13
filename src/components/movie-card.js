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
      <div className='card'>
        <div className='card__poster'
             onClick={() => {
               this.props.showDetail(this.props.movie);
             }}>
          <img className='card__poster -picture' src={this.props.movie.poster}/>
        </div>

        <a className={'card__pinit -next-to-poster ' + this.state.pinit}
                onClick={this.togglePin.bind(this)}>
          <span className='icon-pin'></span>
        </a>
      </div>
    );  
  }  
}

export default MovieCard;
