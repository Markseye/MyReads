import React, { Component } from 'react';
import { getAll } from './BooksAPI';
import BookShelf from './BookShelf';
import _ from 'lodash';

const shelves =["currentlyReading", "wantToRead", "read"];

class BookList extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    getAll().then((books) => {
      const bookList = books.map((book) => (
        { [book.id] : { title: book.title,
          authors: book.authors,
          subtitle: book.subtitle,
          cover: book.imageLinks.thumbnail,
          shelf: book.shelf,
          id: book.id
        }}
      ))

      this.setState(() => {
        return { books: 
                  [...bookList] }
      })
    })
   }

  booksByShelf = ((shelf) => {
    const books = this.state.books.map((book) => {
      if (Object.values(book)[0].shelf === shelf) {
        return Object.values(book)[0]
      }
    });
    return books.filter((book) => (book != null))
    // return Object.values(books);
    // const uniqueShelves = new Set(this.state.books.map((book) => book.shelf));
    // const sortedShelves = {}
    // shelves.forEach((shelf) => shelves[shelf] = {});
    // const newShelves = Object.entries(shelves)

    // this.state.books.map((book) => {
    //   shelves[book.shelf] = [{...shelves[book.shelf],
    //                         book}]
    // })
  })

  updateBookShelf = ((book, shelf) => {
    const newBook = {...book, shelf: shelf}

    this.setState((prevState) => {
      const withRemovedBook = prevState.books.filter((prevBook) => {
        return book.id !== Object.keys(prevBook)[0]
      })
      // (...prevState.books).delete([newBook.title]);
      // why doesn't this new book title override the existing key?
      return {
        books:  [...withRemovedBook ,
                {[newBook.id]: newBook}]
      }}
    ) 
  })

  render() {
    return (
      shelves.map((shelf) => (
        <div key={shelf} className="list-books-content">
          <BookShelf name={_.startCase(shelf)} books={this.booksByShelf(shelf)} onShelfChange={this.updateBookShelf}/>
        </div>
      ))
    )
  }
}

export default BookList;