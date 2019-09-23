import React, { Component } from 'react';

class SearchBar extends Component {

  onSearchEntry = ((text) => {

  })
  
  render() {
    return(
      <div className="search-books">
        <form className="search-books-bar">
          <input placeholder="Search for book"
            onChange={(event) => this.updateInputText(event.target.value)}
          >
          </input>
        </form>
      </div>
    )
  }
}

export default SearchBar;