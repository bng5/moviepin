import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className='search'>
        <form className='b-form'>
          <input className='b-form__input-box'/>
          <button className='b-form__search-button'>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
