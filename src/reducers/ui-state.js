const windowSize = {
  height: window.innerHeight,
  width: window.innerWidth
}

const cardSize = (windowSize) => {
  if (windowSize.width >= 720) {
    return 170;
  } else {
    return 116;
  }
}

const dummyCardWidth = (numberOfMovies, cardsPerRow, windowSize) => {
  const rowsFilled = Math.floor(numberOfMovies/cardsPerRow);
  const cardsLastRow = numberOfMovies - (cardsPerRow * rowsFilled);
  const itemsLeft = cardsPerRow - cardsLastRow;

  return itemsLeft * cardSize(windowSize);
}

const UIState = (state = {}, action) => {

  switch (action.type) {
  case 'WINDOW_RESIZE': { 

    const cardsPerRow = Math.floor(windowSize.width / cardSize(windowSize));
    const dummyWidth = dummyCardWidth(10, cardsPerRow, windowSize);

    return {
      cardsPerRow: cardsPerRow,
      dummyWidth: dummyWidth
    };}

  default:
    return {};
  }
}

export default UIState;
