import React, { Component } from 'react';

class MovieDetail extends Component {
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
  }

  render() {
    const movie = this.props.movie;

    if (!movie) { return null; }

    return (
      <div key='movie-detail'
           className={'card__detail ' +
                      this.props.showDetail}>

        <p className='detail'>
          <span className='detail__year'>
            {movie.year}
          </span>
        </p>

        <p className='detail'>
          {movie.overview}
        </p>

        <a className={'detail__pinit -next-to-poster ' + this.state.pinit}
          onClick={this.togglePin.bind(this)}>
          <span className='icon-pin'></span>
        </a>
      </div>
    );  
  }  
}

export default MovieDetail;
