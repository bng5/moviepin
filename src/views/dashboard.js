import React, { Component } from 'react';

import _ from 'lodash';

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
      movies: [],
      pinnedIds: []
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
      let pinnedIds = this.state.pinnedIds;
      pinnedIds.push(pinnedMovie.key);

      this.setState({
        pinnedIds: pinnedIds
      });
    });

    MPFirebase.onUnpinnedMovie((movie) => {
      let pinnedIds = _.filter(this.state.pinnedIds, (pinnedId) => {
        return pinnedId != movie.key
      });

      this.setState({
        pinnedIds: pinnedIds
      });
    });
  }

  searchTheMovieDB(searchTerm, success) {
    var data = "{}";

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        success(this.responseText);
      }
    });

    xhr.open("GET", 'https://api.themoviedb.org/3/' +
                    'search/movie?include_adult=false&page=1' +
                    '&query=' + searchTerm +
                    '&language=en-US&api_key=b27b7226b1668de47e543bd5f6e00fe4');
    xhr.send(data);
  }

  searchFor(searchTerm) {
    this.searchTheMovieDB(searchTerm, (data) => {
      const moviesResult = JSON.parse(data);

      const movies = _.map(moviesResult.results, (movieResult) => {
        let posterPath = ''; 
        let moviePosterPath = movieResult.poster_path;
        let isPinned = false;

        if (!_.isEmpty(moviePosterPath)) {
          const imageDomain = 'http://image.tmdb.org/t/p/w185';
          posterPath = imageDomain.concat(moviePosterPath);
        }

        if (_.includes(this.state.pinnedIds, movieResult.id.toString())) {
          isPinned = true;
        }

        return {
          id: movieResult.id,
          title: movieResult.original_title,
          year: movieResult.release_date,
          poster: posterPath, 
          overview: movieResult.overview,
          isPinned: isPinned
        };
      });

      this.configureHeaderStyle(true, movies);

      this.setState({
        movies: movies
      });
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
          <UserDashboard showFormFor={this.showView.bind(this)}/>
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
                     cardKey='dashboard'/>
        </div>
      </div>
    );
  }
}

export default Dashboard;
