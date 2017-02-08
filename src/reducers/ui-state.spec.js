import UIState from './ui-state';

describe ('UI State', () => {
  describe ('Window', () => {

    it ('should have default window size', () => {
      expect(UIState.windowSize(undefined, {}))
        .toEqual({
          cardsPerRow: 5,
          dummyWidth: 850
        });
    });

    it ('should set window size', () => {
      expect(UIState.windowSize(undefined,
        {
          type: 'WINDOW_RESIZE',
          windowSize: {
            height: 768,
            width: 1920
          }
        }))
        .toEqual({
          cardsPerRow: 11,
          dummyWidth: 170
        });
    });
  });
});
