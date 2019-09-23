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
        { title: book.title,
          authors: book.authors,
          subtitle: book.subtitle,
          cover: book.imageLinks.thumbnail,
          shelf: book.shelf
        }
      ))

      this.setState((prevState) => {
        return { books: 
                [...bookList] }
      })
    })
   }

  booksByShelf = ((shelf) => {
    return this.state.books.filter((book) => (book.shelf === shelf));
    // const uniqueShelves = new Set(this.state.books.map((book) => book.shelf));
    // console.log(uniqueShelves);
    // const sortedShelves = {}
    // shelves.forEach((shelf) => shelves[shelf] = {});
    // console.log(shelves);
    // console.log(shelves["currentlyReading"]);
    // console.log(Object.keys(shelves));
    // const newShelves = Object.entries(shelves)
    // console.log(newShelves)

    // this.state.books.map((book) => {
    //   shelves[book.shelf] = [{...shelves[book.shelf],
    //                         book}]
    // })
  })

  // handleShelfChange = (newShelf, book) => {

  //   this.setState((prevState) => {
  //     books: [...prevState.books,
  //             {...prevState[`${book.title}`]: book.title}

  //   })
  // }

// <BookShelfChanger currentShelf={book.shelf} onChange={shelf => this.handleShelfChange(shelf, book)}/>

  render() {
    return (
      shelves.map((shelf) => (
        <div key={shelf} className="list-books-content">
          <BookShelf name={_.startCase(shelf)} books={this.booksByShelf(shelf)} />
        </div>
      ))
    )
  }
}

export default BookList;