import React, { Component } from 'react';

class MovieCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pinit: 'pin'
    };
  }

  togglePin() {
    if (this.state.pinit == 'pin') {
      this.setState({ pinit: 'unpin' });
    } else {
      this.setState({ pinit: 'pin' });
    }
  }

  render() {
    return (
      <div className='container container--card'>
        <div className='card card--poster'>
          <img className='card__poster' src={this.props.movie.poster}/>
        </div>

        <a className={'card__pinit' +
                      ' card__pinit--poster' +
                      ' card__pinit--' + this.state.pinit}
                onClick={this.togglePin.bind(this)}>
          <span className='icon-pin'></span>
        </a>
      </div>
    );  
  }  
}

export default MovieCard;
