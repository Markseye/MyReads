import React from 'react';
import Book from './Book';

function BookShelf(props) {

    return(
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title bookshelf">{props.name}</h2>
          <div className="bookshelf-books">
          <ol className="books-grid">
            {props.books.map((book) => {
              return (<Book key={book.id}
                            book={book}
                            onShelfChange={(shelf) => props.onShelfChange(book, shelf)} />)
            })}
          </ol>
          </div>
        </div>
      </div>
    )
}

export default BookShelf;