import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form className='form'>
        <fieldset>
          <input type='text'
                 className='form__text-input'/>
          <input type='submit'
                 className='form__submit--active'
                 value='Search'/>
        </fieldset>
      </form>
    );
  }
}

export default Search;
