import React, { Component } from 'react';

import InputField from './input-field';

class Search extends Component {
  constructor() {
    super();
    
    this.state = {
      searchValue: ''
    };
  }

  searchValueChange(searchTerm) {
    this.setState({
      searchValue: searchTerm
    });
  }

  render() {
    return (
      <form className='form'>
          <InputField fieldValue={this.state.searchValue}
                      inputType='text'
                      inputName='search'
                      onChange={(searchTerm) => {
                        this.searchValueChange(searchTerm);
                      }}/>
      </form>
    );
  }
}

export default Search;
