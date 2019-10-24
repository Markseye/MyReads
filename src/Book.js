import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';
import placeholder_image from './images/placeholder_book.jpg';

class Book extends Component {

  state = {
    currentShelf: this.props.book.shelf
  }

  render() {
    let cover = this.props.book.cover || (this.props.book.imageLinks || {}).thumbnail || placeholder_image;
    return(
      <li key={this.props.book.title} className="book">
        <div className="book-top">
          <div className="book-cover" style={{backgroundImage: `url(${cover})`}}></div>
          <BookShelfChanger
            currentShelf={this.state.currentShelf || "none"}
            onChange={(event) => this.props.onShelfChange(event.target.value)}/>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </li>
    )
  }
}

export default Book;