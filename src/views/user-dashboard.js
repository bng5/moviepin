import React, { Component } from 'react';

import Firebase from 'firebase';

import MPFirebase from '../services/firebase';
import MovieDeck from '../components/movie-deck';
import UserMenu from '../components/user-menu';

class UserDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewToShow: 'videoteque',
      exploreView: this.exploreInConstruction(),
      followView: this.followInConstruction(),
      pinnedMovies: [],
      shouldUpdate: true
    };
  }

  componentDidMount() {

    MPFirebase.onPinnedMovie((movie) => {
      Firebase.database().ref(`movies/${movie.key}`)
              .once('value').then((snapshot) => {
                let movie = snapshot.val();
                let pinnedMovies = this.state.pinnedMovies;
                movie.isPinned = true;

                pinnedMovies.push(movie);

                this.setState({
                  pinnedMovies: pinnedMovies
                });
              });
    });

    MPFirebase.onUnpinnedMovie((movie) => {

      let pinnedMovies = this.state.pinnedMovies.filter((pinnedMovie) => {
        return pinnedMovie.id != movie.key;
      });

      this.setState({
        pinnedMovies: pinnedMovies
      });

    });
  }

  moviesPinned() {
    if (this.state.viewToShow == 'videoteque') {
      const movies = this.state ? this.state.pinnedMovies : [];

      return (
        <MovieDeck movies={movies}
                   className='-for-user'
                   cardKey='user'
                   windowSize={this.props.windowSize}/>
      );

    } else {
      return null;    
    }
  }

  inConstruction(viewDetail) {
    if (this.state.viewToShow == 'follow' ||
        this.state.viewToShow == 'explore') {
      return (
        <div className='in-construction -full-screen -flex-column -middle'>
          <h3 className='-emphasis'>
            Sorry this section is still being implemented
          </h3>
          {viewDetail}
        </div>
      );

    } else {
      return null;    
    }
  }

  exploreInConstruction() {
    return (
      <p className='in-construction__detail'>
        Here you can check top <span className='-emphasis'>pinned </span>
        movies, and they will be classified :)
      </p>
    );
  }

  followInConstruction() {
    return (
      <p className='in-construction__detail'>
        Here you can check other user's
        <span className='-emphasis'> pinned </span>
        movies, follow them or search for
        <span className='-emphasis'> friends </span>:)
      </p>
    );
  }

  showView(viewToShow) {
    if (viewToShow == 'dashboard-menu') {
      this.props.showFormFor(viewToShow);

    } else {
      this.setState({
        viewToShow: viewToShow
      });
    }
  }

  render() {
    
    return (
      <div className='container -full-screen -allow-overflow-y'>
        <UserMenu className={'header__menu -flex-row ' +
                             '-transparent -as-header -for-user'}
              showFormFor={this.showView.bind(this)}/>

        {this.moviesPinned()}

        {this.inConstruction('explore')}
        {this.inConstruction('follow')}
      </div>
    );
  }
}

export default UserDashboard;
