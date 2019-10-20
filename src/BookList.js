import React, { Component } from 'react';
import BookShelf from './BookShelf';
import _ from 'lodash';

const shelves =["currentlyReading", "wantToRead", "read"];

class BookList extends Component {

  booksByShelf = ((shelf) => {
    const books = this.props.books.map((book) => {
      if (Object.values(book)[0].shelf === shelf) {
         return Object.values(book)[0];
      }
      return null;
    });
    return books.filter((book) => (book != null))
  })

  render() {
    return (
      shelves.map((shelf) => {
        let books = this.booksByShelf(shelf);
        if (books.length > 0) {
          return (<div key={shelf} className="list-books-content">
            <BookShelf name={_.startCase(shelf)} books={books} onShelfChange={this.props.updateBookShelf}/>
          </div>)
        } else {
          return null;
        }
      })
    )
  }
}

export default BookList;