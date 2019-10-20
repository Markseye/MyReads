import React from 'react';
import { Link } from "react-router-dom";

function SearchBar(props) {
  return (
    <div className="search-books">
      <form className="search-books-bar">
        <Link to="/">
          <button className="close-search" />
        </Link>
        <input
          type="text"
          placeholder="Search for book"
          value={props.query}
          onChange={(event) => props.onSearchUpdate(event.target.value)}
        >
        </input>
      </form>
    </div>
  )
}

export default SearchBar;