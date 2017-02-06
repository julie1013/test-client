import React, { Component } from 'react';
import './Enter-book.css';

class EnterBook extends Component {
  render () {
    return (
    <div className="book-form-field">
      <input id="title" className="title" />
      <input id="author" className="author" />
    </div>
    );
  }
}


export default EnterBook;
