import React, { Component } from "react";
import {Link} from 'react-router-dom'
import sortBy from 'sort-by'
import Shelf from './Shelf'
import * as BooksAPI from "./BooksAPI";
import {debounce} from 'throttle-debounce';

class SearchBook extends Component {


  state = {
    query: '', datos:[]
  }

updateQuery = debounce (125,query => {
  this.setState({ query: query.trim() });
  (query==='')?(this.setState({datos:[]})) :(
  BooksAPI.search(query, 20).then(datos => {
    this.setState({ datos });
    })
  );
});

joinBooks = (searchBooks, listBooks) => {
  for (let searchBook of searchBooks) {
    for (let listBook of listBooks) {
      (searchBook.id === listBook.id) && (searchBook.shelf = listBook.shelf);
    }
  }
  return searchBooks
};

  render() {
let showBooks=[]
const {listBooks}=this.props
const {query, datos} = this.state

showBooks=(datos.length>0)
?(this.joinBooks(datos,listBooks)

)
:([]);

showBooks.sort(sortBy('authors'))


    return (
      <div className="search-books">

        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder='Search by title or author'
              value={query}
              onChange={(event)=> this.updateQuery(event.target.value)}

            />
          </div>
        </div>
        <div className="search-books-results">

          <Shelf
            Books={showBooks}
            ShelfName={` ${query}`}
            getAllData={this.props.getAllData}
          />
        </div>
      </div>
    );
  }
}

export default SearchBook;
