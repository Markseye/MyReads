import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';
import { update } from './BooksAPI';

class BookShelf extends Component {

  handleShelfChange = (book, shelf) => {
    console.log(shelf);
    update(book, shelf).then((book) => (console.log(book)))
  }

  render() {
    return(
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title bookshelf">{this.props.name}</h2>
          <div className="bookshelf-books">
          <ol className="books-grid">
          {this.props.books.map((book) => {
              return (
              <li key={book.title}>
                <div key={book.title} className="book">
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                  <div className="book-cover" style={{backgroundImage: `url(${book.cover})`}}></div>
                  <BookShelfChanger currentShelf={book.shelf} onChange={(event) => this.handleShelfChange(book, event.target.value)}/>
                </div>
              </li>
              )
          })}
          </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf;