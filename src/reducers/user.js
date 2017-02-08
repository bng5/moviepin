const User = (state = {}, action) => {
  switch (action.type) {
  case 'SET_USER': {
    const user = action.user;

    return {
      id: user.id,
      name: user.name,
      email: user.email
    }
  }

  case 'UNSET_USER':
    return {};

  default:
    return state;
  }
}

export default User;
