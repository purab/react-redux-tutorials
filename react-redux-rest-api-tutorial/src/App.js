import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link,Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import AddBook from "./components/add-books.components";
import Book from "./components/book.component";
import BooksList from "./components/books-list.component";

class App extends Component {
  render() {
  return (
    <Router>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to={"/books"} className="navbar-brand">
        Purab Code Book
      </Link>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/books"} className="nav-link">
            books
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/add"} className="nav-link">
            Add
          </Link>
        </li>
      </div>
    </nav>
    <div className="container mt-3">
    <Routes>
    <Route exact path="/" element={<BooksList />} />
    <Route exact path="/books" element={<BooksList />} />
            <Route exact path="/add" element={<AddBook />} />
            <Route path="/books/:id" element={<Book/>} />
    </Routes>
    </div>
  </Router>
  );
}
}

export default App;
