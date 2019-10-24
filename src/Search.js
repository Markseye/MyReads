import React, { Component } from 'react';
import { search } from './BooksAPI';
import Book from "./Book";
import SearchBar from "./SearchBar";

class Search extends Component {

  state = {
    query: '',
    isLoading: false,
    results: []
  }

  updateSearchEntry = (text) => {
    this.setState({ query: text, isLoading: true })
    search(text).then((books) => {
      const bookResults = books && books.length > 1 ? books : []
      this.setState({ results: bookResults, isLoading: false });
      this.generateResults(bookResults)
    })
  }

  generateResults = (results) => {
    let bookOutput;
    let books = this.props.books.map((b) => Object.values(b)[0]);
    if (results.length > 0) {
      bookOutput = results.map((book) => {
                    let existing_book = books.find((prop_book) => prop_book.id === book.id);
                    return (<Book book={existing_book || book}
                                  key={book.id}
                                  onShelfChange={(shelf) => this.props.updateBookShelf(book, shelf)} />)
                    })
    } else if(this.state.query !== "" && results.length === 0) {
      let result_text = this.state.isLoading ? "Loading.." : "No results found";
      bookOutput = <h3>{result_text}</h3>
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
