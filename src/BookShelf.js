import React from 'react';
import { update } from './BooksAPI';
import Book from './Book';

function BookShelf(props) {

  const handleShelfChange = (book, shelf) => {
    console.log(book, shelf);
    update(book, shelf).then(() => {
      props.onShelfChange(book, shelf)
    }
    )
  }

    return(
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title bookshelf">{props.name}</h2>
          <div className="bookshelf-books">
          <ol className="books-grid">
            {props.books.map((book) => {
              return (<Book key={book.id} book={book} onShelfChange={(shelf) => handleShelfChange(book, shelf)} />)
            })}
          </ol>
          </div>
        </div>
      </div>
    )
}

export default BookShelf;