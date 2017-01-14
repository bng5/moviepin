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
      <div key='details'
           className='card__detail -with-react-transition'>

        <p key='detail-year'
           className='detail'>
          <span key='detail-year-span'
                className='detail__year'>
            {movie.year}
          </span>
        </p>

        <p key='detail-overview'
           className='overview'>
          {movie.overview}
        </p>

        <a key='detail-pin'
           className={'detail__pinit -next-to-poster ' +
           this.state.pinit}
          onClick={this.togglePin.bind(this)}>
          <span key='detail-pin-icon'
                className='icon-pin'></span>
        </a>
      </div>
    );  
  }  
}

export default MovieDetail;
