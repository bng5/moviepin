import User from './user';

describe ('user reducer', () => {
  it ('should have initial state', () => {
    expect(User(undefined, {})).toEqual({});
  });
  
  it ('should handle SET_USER', () => {
    expect(User(undefined, {
      type: 'SET_USER',
      user: {
        id: 1,
        name: 'foo bar',
        email: 'foo@bar.com'
      }
    })).toEqual({
      id: 1,
      name: 'foo bar',
      email: 'foo@bar.com'
    });
  });

  it ('should handle UNSET_USER', () => {
    expect(User({
      id: 1,
      name: 'foo bar',
      email: 'foo@bar.com'
    }, {
      type: 'UNSET_USER'
    })).toEqual({});
  });
});
