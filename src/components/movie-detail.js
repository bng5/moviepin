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
           className='detail -as-summary'>
          <span key='detail-year-span'
                className='detail__year'>
            {movie.year}
          </span>
        </p>

        <p key='overview'
           className='overview -as-summary'>
          {movie.overview}
        </p>
      </div>
    );  
  }  
}

export default MovieDetail;
