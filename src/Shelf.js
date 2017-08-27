import React, { Component } from "react";
import Book from "./Book";

class Shelf extends Component {
  
  render() {

    const {Books}=this.props

    return (
      <div className="bookshelf">

        <h2 className="bookshelf-title">{this.props.ShelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {Books.map((book,i) =>
              <li key={i}>

                <Book book={book}/>
                <p>{book.shelf}</p>
              </li>
            )}


          </ol>
        </div>
      </div>
    );
  }
}
export default Shelf;
