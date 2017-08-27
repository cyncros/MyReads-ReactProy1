import React, { Component } from "react";
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import Shelf from './Shelf'

class SearchBook extends Component {
  static PropTypes={

  }
  state = {
    query: ''
  }

  updateQuery=(query)=>{
    this.setState({ query: query.trim() })
  }


  render() {
let showBooks
const {listBooks}=this.props
const {query} = this.state

if(query){
  const match =new RegExp(escapeRegExp(query),'i')
  showBooks=listBooks.filter((book)=>match.test(book.authors)||match.test(book.title))
} else{
  showBooks=listBooks
}
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
        <ol className="books-grid" />

          <Shelf
            Books={showBooks}
            ShelfName={`Searching of ... ${query}`}
          />
        </div>
      </div>
    );
  }
}

export default SearchBook;
