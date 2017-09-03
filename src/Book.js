import React from "react";

function Book(props) {

const {book:{title='',authors=[],imageLinks:{thumbnail='null'}='null',shelf='none'}={}}=props

    return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${thumbnail ? thumbnail: null})`
          }}
        />
        <div className="book-shelf-changer">
          <select value={shelf} onChange={(event)=>props.changeShelf(props.book,event.target.value)}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>

            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title"><p>{title}</p></div>
      <div className="book-authors"><p>
        {(authors.length>1)?(authors.join()):(authors)}

      </p></div>

    </div>
  );
}

export default Book;
