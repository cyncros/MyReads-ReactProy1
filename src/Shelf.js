import React, { Component } from "react";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'




class Shelf extends Component {


  changeShelf= (book,shelf)=>{
    BooksAPI.update(book,shelf)
    this.props.getAllData()

  }

  changeAvrg=(book,tAvrg)=>{
    console.log('tAvrg',tAvrg)
    console.log('book',book)
    book.averageRating=tAvrg;
  BooksAPI.update(book,book.shelf)


  }
  render() {

    const {Books}=this.props

    return (
      <div className="bookshelf">

        <h2 className="bookshelf-title">{this.props.ShelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {Books.map((book,i) =>
              <li key={i}>

                <Book book={book}
                  changeShelf={this.changeShelf}
                />
                <div><Rater interactive={false} rating={book.averageRating}/></div>
                {/* <Rating
                  onClick={rate=>this.changeAvrg(book,rate)}
                  initialRate={book.averageRating}

                /> */}

              </li>
            )}


          </ol>
        </div>
      </div>
    );
  }
}
export default Shelf;
