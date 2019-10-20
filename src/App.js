import React, { Component } from 'react';
import { getAll, update } from './BooksAPI';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './Header';
import BookList from './BookList';
import Search from './Search';
import AddBook from './AddBook';

class BooksApp extends Component {

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

  updateBookShelf = ((book, shelf) => {
    update(book, shelf).then(() => {
      const newBook = {...book, shelf: shelf}

      this.setState((prevState) => {
        const withRemovedBook = this.state.books.filter((prevBook) => {
          return book.id !== Object.keys(prevBook)[0]
        })

        return {
          books:  [...withRemovedBook ,
                  {[newBook.id]: newBook}]
        }
      })
    })
  })

  render() {
    return (
      <Router>
          <Route path="/search" component={() => <Search updateBookShelf={this.updateBookShelf} />} />
          <Route exact path="/" component={() => (
            <div className="app">
              <Header />
              <BookList books={this.state.books} updateBookShelf={this.updateBookShelf}/>
              <Link to="/search">
                <AddBook />
              </Link>
            </div>
            )}
          />
      </Router>
    )
  }
}

export default BooksApp;
