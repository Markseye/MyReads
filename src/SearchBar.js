import React, { Component } from 'react';
import { update, search } from './BooksAPI';
import Book from "./Book";

class SearchBar extends Component {

  state = {
    query: '',
    results: []
  }

  updateSearchEntry = (text) => {
    this.setState({ query: text.trim() })
    search(this.state.query).then((books) => {
      console.log(books)
      const bookResults = books ? books : []
      this.setState({ results: bookResults })
    })
  }

// how do i handle passing in onBookShelf update down to book
// right now it is passed down from bookshelf
// should each book managed its own state of the shelf? 
  render() {
    return(
      <div className="search-books">
        <form className="search-books-bar">
          <input
            type="text"
            placeholder="Search for book"
            value={this.query}
            onChange={(event) => this.updateSearchEntry(event.target.value)}
          >
          </input>
          {this.state.results.map((book) => (<Book book={book} key={book.id}/>))}
        </form>
      </div>
    )
  }
}

export default SearchBar;
