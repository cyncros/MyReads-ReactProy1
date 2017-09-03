import React, { Component } from "react";
import {Link} from 'react-router-dom'
import Shelf from "./Shelf";

class MyReads extends Component {
cambios=(listBooks=[])=> {

  let currentR = [],
    wantR = [],
    alreadyR = [];

  listBooks.map(libro => {
    if (libro.shelf === "currentlyReading") {
      currentR.push(libro);
    } else if (libro.shelf === "wantToRead") {
      wantR.push(libro);
    } else if (libro.shelf === "read") {
      alreadyR.push(libro);
    }
  })
  return [currentR, wantR, alreadyR];

}

  render() {
let [currentR=[], wantR=[], alreadyR=[]]=this.cambios(this.props.listBooks)
    // let {listBooks}=this.props
        return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Shelf
              Books={currentR}
              ShelfName={"Currently Reading"}
              getAllData={this.props.getAllData}
            />
            <Shelf
              Books={wantR}
              ShelfName={"Want To Read"}
              getAllData={this.props.getAllData}
            />
            <Shelf
              Books={alreadyR}
              ShelfName={"Read"}
              getAllData={this.props.getAllData}
            />
          </div>

          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      );

  }
}

export default MyReads;
