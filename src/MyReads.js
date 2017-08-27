import React, { Component } from "react";
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from "./Shelf";
import Book from "./Book";


class MyReads extends Component {
state={
currentR:[], wantR:[], alreadyR:[],listBooks:[]
}


cambios(){

let{currentR, wantR, alreadyR}=this.state
let {listBooks}=this.props;
listBooks.map((libro)=>{
  if(libro.shelf==="currentlyReading"){
currentR.push(libro)
  }
  else if (libro.shelf==="wantToRead") {
    wantR.push(libro)
  }
  else if(libro.shelf==="read"){
    alreadyR.push(libro)
  }
})


}

  render() {
let {currentR, wantR, alreadyR}=this.state
    let {listBooks}=this.props



    return (
      <div className="list-books">
        <cambios/>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

            {this.cambios(listBooks={listBooks})}
            <Shelf Books={currentR}
              ShelfName={'Currently Reading'}
            />
            <Shelf Books={wantR}
              ShelfName={'Want To Read'}
            />
            <Shelf Books={alreadyR}
              ShelfName={'Read'}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" >
          Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default MyReads;
