import React, { Component } from "react";
import { Route } from "react-router-dom";
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchBook from "./SearchBook";
import MyReads from "./MyReads";
import Book from "./Book"
import Shelf from "./Shelf"
const libros=[
  {
    "title":"The Linux Command Line",
    "authors":"William E. Shotts, Jr.",
    "shelf":"currentlyReading",
    "thumbnail": "http://books.google.com/books/content?id=nggnmAEAC…J&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    "averageRating":"4"

  }
]

class BooksApp extends Component {
  state = {
    querry:'', books:[]
  };


componentDidMount() {
  BooksAPI.getAll().then((books)=>{
    this.setState({books})

  })
}

  render() {

      return (
      <div className="app">

        <Route exact path="/" render={()=>(

          <div>
          <MyReads listBooks={this.state.books}/>
          </div>
        )}/>
          <Route path="/search" render={()=>(
            <div>
            <SearchBook
              listBooks={this.state.books}
        /></div>
      )}/>




    </div>
    )
  }
}

export default BooksApp;
