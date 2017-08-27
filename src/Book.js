import React, { Component } from "react";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

function Book(props) {
  console.log(props.book.imageLinks.thumbnail)
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${props.book.imageLinks.thumbnail})`
          }}
        />
        <div className="book-shelf-changer">
          <select>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title"><p>{props.book.title}</p></div>
      <div className="book-authors"><p>{props.book.authors}</p></div>
      <div><Rater interactive={false} rating={props.book.averageRating}/></div>
    </div>
  );
}

export default Book;
