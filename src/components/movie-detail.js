import React, { Component } from 'react';

class MovieDetailNav extends Component {
  render() {
    return (
      <nav className='card__nav'>
        <ul>
          <li className='nav__back'>
            <a href='/back'>Back</a>
          </li>
        </ul>
        <p className='nav__headline'>Movie Detail</p>
      </nav>
    );  
  }  
}

class MovieDetailStaff extends Component {
  render() {
    return (
      <div className='card__staff'>
        <img src='./directed.jpg' className='staff__picture'/>
        <p className='staff__name'>Directed By</p>
        <p className='staff__role'>Director</p>
      </div>
    );
  }
}

class MovieDetail extends Component {
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

  cast() {
    let cast = [];

    for (let i = 0; i <= 2; i++) {
      cast.push(<MovieDetailStaff key={`actor-${i}`} className='cast'/>);
    }

    return cast;
  }

  render() {
    return (
      <div className='container'>
        <div className='card card--detail'>
          <MovieDetailNav/>

          <img className='card__poster' src='./test.jpg'/>

          <p className='movie__detail'>
            <span className='movie__detail--year'>2015</span>
            <span className='movie__detail--genre'>Drama</span>
          </p>

          <MovieDetailStaff className='directed-by'/>
          <MovieDetailStaff className='written-by'/>
          <MovieDetailStaff className='produced-by'/>

          <p>Cast</p>
          {this.cast()}

          <button className={`card__${this.state.pinit}`}
                  onClick={this.togglePin.bind(this)}>Add</button>
        </div>
      </div>
    );  
  }  
}

export default MovieDetail;
