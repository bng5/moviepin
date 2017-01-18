import React, { Component } from 'react';

import _ from 'lodash';

import Overlay from '../components/overlay';
import Menu from '../components/menu';
import Search from '../components/search';
import MovieDeck from '../components/movie-deck';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.inOverlayEffectes = {
      'user-menu': '-content-push -right'
    }

    this.state = {
      inOverlayEffect: '',
      outOverlayEffect: '',
      headerClass: '-full-screen',
      searchClass: '-middle',
      overlayView: ''
    };
  }

  showView(viewToShow) {
    this.setState({
      inOverlayEffect: this.inOverlayEffectes[viewToShow],
      outOverlayEffect: ''
    });
  }

  pinMovie(movie) {
    console.log('pin movie' + movie.id)
  }

  closeOverlay() {
    this.setState({
      outOverlayEffect: '-hidden'
    });
  }

  configureHeaderStyle(properties = this.props) {
    if (!_.isEmpty(properties.movies)) {
      this.setState({
        headerClass: '-as-header'
      });
    }
  }

  componentWillMount() {
    this.configureHeaderStyle();
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
          {this.state.overlayView}
        </Overlay>

        <div className={'container__dashboard -flex-column ' +
                        inOverlayEffect + ' ' + outOverlayEffect}>

          <div className={'dashboard__header -transparent ' +
                          '-flex-row ' + headerClass}>
            <div className='header__logo -flex-row -priority0'>
              <a className='logo__isotype'>
                <span key='icon-pin' className='icon-pin'></span>
              </a>
            </div>
            <Search className={ 'header_search -flex-row ' +
                               this.state.searchClass}/>

            <Menu className='header__menu -flex-row'
                  showFormFor={this.showView.bind(this)}/>
          </div>

          <MovieDeck movies={this.props.movies}
                     onPinMovie={this.pinMovie.bind(this)}
                     windowSize={this.props.windowSize}/>
        </div>
      </div>
    );
  }
}

Dashboard.defaultProps = {
  movies: []
}

export default Dashboard;
