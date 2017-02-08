import * as actionsConstants from './actions-constants';
import * as Actions from './index';

describe ('ui state actions', () => {
  it ('should create window_resize action', () => {
    expect(Actions.windowResize({
      height: 100,
      width: 234
    })).toEqual({
      type: actionsConstants.WINDOW_RESIZE,
      windowSize: {
        height: 100,
        width: 234
      }
    });
  });
});
