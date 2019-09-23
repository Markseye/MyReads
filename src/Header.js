import React, { Component } from 'react';
import SearchBar from './SearchBar';

class Header extends Component {
  
  render() {
    return(
      <div className="header">
        <h1 className="header main">MyReads</h1>
        <SearchBar />
      </div>
    )
  }
}

export default Header;