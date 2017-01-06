import React, { Component } from 'react';

class MovieCard extends Component {
  constructor() {
    super();

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
      <div className='container'>
        <div className='card card--poster'>
          <img className='card__poster' src='./test.jpg'/>
          <button className={`card__${this.state.pinit}`}
                  onClick={this.togglePin.bind(this)}>Add</button>
        </div>
        <p className='headline'></p>
      </div>
    );  
  }  
}

export default MovieCard;
