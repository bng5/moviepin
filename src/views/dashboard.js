import React, { Component } from 'react';

import _ from 'lodash';

import Overlay from '../components/overlay';
import Menu from '../components/menu';
import Search from '../components/search';

import MovieCard from '../components/movie-card';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      overlayClass: '',
      containerScreenClass: 'full-screen'
    };
  }

  showFormFor() {
    this.setState({
      overlayClass: 'content-push--right'
    });
  }

  closeOverlay() {
    this.setState({
      overlayClass: 'content-push--right--hidden'
    });
  }

  flexColumnWithCard(movie) {
    return(
      <div key={'container-' + movie.id}
           className={'container--flex' +
                      ' container--flex--priority0' +
                      ' container--flex--row'}>
        <MovieCard key={movie.id} movie={movie}/>
      </div>
    );
  }

  moviesSection() {
    if (!_.isEmpty(this.props.movies)) {
      const containerRow = 'container--flex container--flex--row';
      let movieCards = [];
      
      _.each(this.props.movies, (movie) => {
        movieCards.push(this.flexColumnWithCard(movie));
      });

      return (
        <div className={containerRow +
                        ' container--deck'}>
          {movieCards}
        </div>
      );
    }
  }

  configureHeaderStyle(properties = this.props) {
    if (!_.isEmpty(properties.movies)) {
      this.setState({
        containerScreenClass: 'header'
      });
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
                 onClose={this.closeOverlay.bind(this)}>
        </Overlay>


        <div className={'container--flex' +
                        ' container--flex--column' +
                        ' container--' + this.state.overlayClass +
                        ' container--dashboard'}>
          <div className={containerRow +
                          ' container--' +
                          this.state.containerScreenClass}>
            <div className='container--flex container--logo'/>
            <Search className={'container--flex' +
                               ' container--flex--align-middle'}/>

            <Menu className='container--flex'
                  showFormFor={this.showFormFor.bind(this)}/>
          </div>

          {this.moviesSection()}
        </div>
      </div>
    );
  }
}

Dashboard.defaultProps = {
  movies: []
}

export default Dashboard;
