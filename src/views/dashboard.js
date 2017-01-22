import React, { Component } from 'react';

import _ from 'lodash';

import MoviesMock from '../mocks/movies';

import MPFirebase from '../services/firebase';
import Overlay from '../components/overlay';
import Menu from '../components/menu';
import Search from '../components/search';
import MovieDeck from '../components/movie-deck';
import UserDashboard from './user-dashboard';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.inOverlayEffects = {
      'user-menu': '-content-push -right',
      'dashboard-menu': '-content-push -right -hidden'
    }

    this.state = {
      inOverlayEffect: '',
      outOverlayEffect: '',
      headerClass: '-full-screen',
      searchClass: '-right-center',
      movies: []
    };
  }

  showView(viewToShow) {
    this.setState({
      inOverlayEffect: this.inOverlayEffects[viewToShow],
      outOverlayEffect: ''
    });
  }

  closeOverlay() {
    this.setState({
      outOverlayEffect: '-hidden'
    });
  }

  configureHeaderStyle(alreadyMounted, movies) {
    let headerClass = '';

    if (_.isEmpty(movies)) {
      headerClass = '-full-screen';

      if (alreadyMounted) {
        headerClass = headerClass.concat(' -animated');
      }

    } else {
      headerClass = '-as-header';
    }

    this.setState({
      headerClass: headerClass
    });
  }

  componentDidMount() {
    MPFirebase.onPinnedMovie((pinnedMovie) => {
      if (this.state.movies.length >0) {
        let movieToPin =this.state.movies.find((movie) => {
          return pinnedMovie.key == movie.id;
        });

        movieToPin.isPinned = true;
      }
    });
  }

  searchFor(searchTerm) {
    let movies = [];

    if (searchTerm.length >=3) {
      movies = MoviesMock.filter((movie) => {
        return movie.title.match(searchTerm);
      });

    } else if (searchTerm.length < 3 &&
               searchTerm.length > 0 &&
               this.state.movies.length > 0) {
      movies = this.state.movies;

    } else if (searchTerm.length == 0 &&
               this.state.movies.length > 0) {
      movies = [];

    } else {
      return;
    }
    
    this.configureHeaderStyle(true, movies);

    this.setState({
      movies: movies
    });
  }

  render() {
    const inOverlayEffect = this.state.inOverlayEffect;
    const outOverlayEffect = this.state.outOverlayEffect;
    const headerClass = this.state.headerClass;

    return (
      <div className='container'>
        <Overlay inEffect={this.state.inOverlayEffect}
                 outEffect={this.state.outOverlayEffect}
                 onClose={ this.closeOverlay.bind(this) }>
          <UserDashboard showFormFor={this.showView.bind(this)}
                         windowSize={this.props.windowSize}/>
        </Overlay>

        <div className={'container__dashboard ' +
                        inOverlayEffect + ' ' + outOverlayEffect}>

          <div className={'dashboard__header -transparent ' +
                          '-flex-row ' + headerClass}>
            <span className='header__blank'/>
            <Search className={ 'header_search -flex-row ' +
                               this.state.searchClass}
                    searchFor={this.searchFor.bind(this)}/>

            <Menu className='header__menu -flex-row'
                  showFormFor={this.showView.bind(this)}/>
          </div>

          <MovieDeck movies={this.state.movies}
                     cardKey='dashboard'
                     windowSize={this.props.windowSize}/>
        </div>
      </div>
    );
  }
}

export default Dashboard;
