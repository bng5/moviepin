import React, { Component } from 'react';

import MovieDeck from '../components/movie-deck';
import UserMenu from '../components/user-menu';

class UserDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewToShow: this.moviesPinned(),
      exploreView: this.exploreInConstruction(),
      followView: this.followInConstruction()
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.moviesPinned != this.props.moviesPinned) {
      this.setState({
        viewToShow: this.moviesPinned(nextProps.moviesPinned)
      });
    }
  }

  moviesPinned(movies = this.props.moviesPinned) {
    return (
      <MovieDeck movies={movies}
                 className='-for-user'
                 onPinMovie={(movie) => {
                   this.props.onUnpinMovie(movie)}}
                 windowSize={this.props.windowSize}/>
    );
  }

  inConstruction(viewDetail) {
    return (
      <div className='in-construction -full-screen -flex-column -middle'>
        <h3 className='-emphasis'>
          Sorry this section is still being implemented
        </h3>
        {viewDetail}
      </div>
    );
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

      let view;

      if (viewToShow == 'videoteque') {
        view = this.moviesPinned();
      } else {
        view = this.inConstruction(this.state[`${viewToShow}View`]);
      }

      this.setState({
        viewToShow: view
      });
    }
  }

  render() {
    return (
      <div className='container -full-screen -allow-overflow-y'>
        <UserMenu className={'header__menu -flex-row ' +
                             '-transparent -as-header -for-user'}
              showFormFor={this.showView.bind(this)}/>

        {this.state.viewToShow}
      </div>
    );
  }
}

export default UserDashboard;
