import React, { Component } from 'react';

import _ from 'lodash';

import Overlay from '../components/overlay';
import Menu from '../components/menu';
import Search from '../components/search';

import MovieDeck from '../components/movie-deck';
import MovieDetail from '../components/movie-detail';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.overlayClasses = {
      'user-menu': '--content-push--right',
      'movie-detail': '--content-scale'
    }

    this.state = {
      overlayClass: '',
      overlayHidden: '--hidden',
      containerScreenClass: 'full-screen',
      searchClass: 'container--flex--align-middle',
      overlayView: ''
    };
  }

  showView(viewToShow) {
    this.setState({
      overlayClass: this.overlayClasses[viewToShow],
      overlayHidden: ''
    });
  }

  showMovie(movie) {
    this.setState({
      overlayView: <MovieDetail movie={movie}/>
    });

    this.showView('movie-detail');
  }

  closeOverlay() {
    this.setState({
      overlayHidden: '--hidden'
    });
  }

  configureHeaderStyle(properties = this.props) {
    if (!_.isEmpty(properties.movies)) {
      this.setState({
        containerScreenClass: 'header'
      });

      _.delay(() => {
        this.setState({
          searchClass: 'container--flex--align-top'
        });
      }, 2000);
    }
  }

  componentWillMount() {
    this.configureHeaderStyle();
  }

  componentWillReceiveProps(nextProps) {
    this.configureHeaderStyle(nextProps);
  }

  render() {
    const containerRow = 'container--flex container--flex--row';

    return (
      <div className='container'>
        <Overlay showEffect={this.state.overlayClass}
                 hidden={this.state.overlayHidden}
                 onClose={ this.closeOverlay.bind(this) }>
          {this.state.overlayView}
        </Overlay>

        <div className={'container--flex' +
                        ' container--flex--column' +
                        ' container' +
                        this.state.overlayClass +
                        this.state.overlayHidden +
                        ' container--dashboard'}>
          <div className={containerRow +
                          ' container--' +
                          this.state.containerScreenClass}>

            <div className='container--flex container--logo'/>

            <Search className={'container--flex ' +
                               this.state.searchClass}/>

            <Menu className='container--flex'
                  showFormFor={this.showView.bind(this)}/>
          </div>

          <MovieDeck movies={this.props.movies}
                     onMovieClick={this.showMovie.bind(this)}/>
        </div>
      </div>
    );
  }
}

Dashboard.defaultProps = {
  movies: []
}

export default Dashboard;
