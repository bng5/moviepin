import React, { Component } from 'react';

import Utils from '../utils';

class DummyCard extends Component {
  constructor(props) {
    super(props);


    this.state = {
      dummyWidth: this.dummyCardWidth(this.props)
    };
  }

  dummyCardWidth(props) {
    const numberOfMovies = props.movies.length;
    const cardsPerRow = props.cardsPerRow;
    const rowsFilled = Math.floor(numberOfMovies/cardsPerRow);
    const cardsLastRow = numberOfMovies - (cardsPerRow * rowsFilled);
    const itemsLeft = cardsPerRow - cardsLastRow;

    return itemsLeft * Utils.CARD_SIZE;
  }

  componentWillReceiveProps(nextProps) {
    this.dummyCardWidth(nextProps);
  }

  render() {
    const dummyWidth = {width: this.state.dummyWidth + 'px'}

    return (
      <div key='dummy-expandable-container'
           className='container__dummy -flex-row -priority0'
           style={dummyWidth}/>
    );
  }
}

export default DummyCard;
