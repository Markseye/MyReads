import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import BookList from './BookList';
import SearchBar from './SearchBar';
import AddBook from './AddBook';

class BooksApp extends Component {

  render() {
    return (
      <div className="app">

        <Header>
          <SearchBar />
        </Header>
        <BookList />
        <AddBook />
      </div>
    )
  }
}

export default BooksApp;
