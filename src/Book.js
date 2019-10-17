import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';

class Book extends Component {

  state = {
    currentShelf: this.props.book.shelf
  }

  render() {
    return(
      <li key={this.props.book.title} className="book">
        <div className="book-top">
          <div className="book-cover" style={{backgroundImage: `url(${this.props.book.cover})`}}></div>
          <BookShelfChanger
            currentShelf={this.state.currentShelf}
            onChange={(event) => this.props.onShelfChange(event.target.value)}/>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </li>
    )
  }
}

export default Book;