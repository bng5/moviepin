import React, { Component } from 'react';

class DummyCard extends Component {
  constructor(props) {
    super(props);


    this.state = {
      dummyWidth: this.dummyCardWidth()
    };
  }

  dummyCardWidth() {
    const numberOfMovies = this.props.movies.length;
    const cardsPerRow = this.props.cardsPerRow;
    const rowsFilled = Math.floor(numberOfMovies/cardsPerRow);
    const cardsLastRow = numberOfMovies - (cardsPerRow * rowsFilled);
    const itemsLeft = cardsPerRow - cardsLastRow;

    return itemsLeft * 295;
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
