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

    this.props.searchFor(searchTerm);
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className={'form -search ' + this.props.className}
            autoComplete='off'
            onSubmit={this.onSubmit.bind(this)}>
          <InputField className='-search'
                      fieldValue={this.state.searchValue}
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
