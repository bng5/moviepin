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
      searchClass: '-right-center',
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

  configureHeaderStyle(alreadyMounted, properties = this.props) {
    let headerClass = '';

    if (_.isEmpty(properties.movies)) {
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

  componentWillReceiveProps(nextProps) {
    this.configureHeaderStyle(true, nextProps);
  }

  componentWillMount() {
    this.configureHeaderStyle(false);
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

        <div className={'container__dashboard ' +
                        inOverlayEffect + ' ' + outOverlayEffect}>

          <div className={'dashboard__header -transparent ' +
                          '-flex-row ' + headerClass}>
            <span className='header__blank'/>
            <Search className={ 'header_search -flex-row ' +
                               this.state.searchClass}
                    searchFor={(searchTerm) => {
                      this.props.searchFor(searchTerm);
                    }}/>

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

export default Dashboard;
