import React, { Component } from 'react';
import { search } from './BooksAPI';
import Book from "./Book";
import SearchBar from "./SearchBar";

class Search extends Component {

  state = {
    query: '',
    results: []
  }

  updateSearchEntry = (text) => {
    this.setState({ query: text.trim() })
    search(this.state.query).then((books) => {
      const bookResults = books ? books : []
      this.setState({ results: bookResults });
      this.generateResults(bookResults)
    })
  }

  generateResults = (results) => {
    let bookOutput;
    if (results.length > 0) {
      bookOutput = results.map((book) => (
                     <Book book={book}
                           key={book.id}
                           onShelfChange={(shelf) => this.props.updateBookShelf(book, shelf)} />
                    ))
    } else if(this.state.query !== "" && results.length === 0) {
      bookOutput = <h3>No results found</h3>
    }
    return bookOutput;
  }

  render() {
    return(
      <div>
        <SearchBar query={this.state.query} onSearchUpdate={this.updateSearchEntry}/>
        <div className="list-books-content search-books-results">
          <ol className="books-grid">
            {this.generateResults(this.state.results)}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;
