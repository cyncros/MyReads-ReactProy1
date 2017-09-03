import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchBook from "./SearchBook";
import MyReads from "./MyReads";

class BooksApp extends Component {
  state = {
    querry:'', books:[]
  };

componentDidMount() {
this.getAllData()

}

getAllData=()=>{
  BooksAPI.getAll().then((books)=>{
    this.setState({books})

  })
}


  render() {

      return (
      <div className="app">

        <Route exact path="/" render={()=>(

          <MyReads listBooks={this.state.books}
          getAllData={this.getAllData}/>

        )}/>
          <Route path="/search" render={()=>(

            <SearchBook
              listBooks={this.state.books}
              getAllData={this.getAllData}
        />
      )}/>
    </div>
    )
  }
}

export default BooksApp;
