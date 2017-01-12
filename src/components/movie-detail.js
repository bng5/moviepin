import React, { Component } from 'react';

class MovieDetail extends Component {
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
    const movie = this.props.movie;

    return (
      <div className={'card card__detail' +
                      ' card__detail' + this.props.showDetail}>

        <p className='movie__detail'>
          <span className='movie__detail--year'>
            {movie.year}
          </span>
        </p>

        <p>{movie.overview}</p>

        <button className={'card__' + this.state.pinit}
                onClick={this.togglePin.bind(this)}>Add</button>
      </div>
    );  
  }  
}

export default MovieDetail;
