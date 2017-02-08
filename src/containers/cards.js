import { connect } from 'react-redux';

import { windowResize } from '../actions/index';

import DummyCard from '../components/dummy-card';

const mapStateToProps = (state) => {
  return {
    cardsPerRow: state.UIState.cardsPerRow,
    dummyWidth: state.UIState.dummyWidth
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onWindowResize: () => dispatch(windowResize())
  };
}

const Cards = connect(
  mapStateToProps,
  mapDispatchToProps
)(DummyCard);

export default Cards; 
