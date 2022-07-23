import React, { Component } from "react";
import { connect } from "react-redux";
import {
  retrieveBooks,
  findBooksByTitle,
  deleteAllBooks,
} from "../actions/books";
import { Link } from "react-router-dom";

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveBook = this.setActiveBook.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeAllBooks = this.removeAllBooks.bind(this);

    this.state = {
      currentBook: null,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveBooks();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }

  refreshData() {
    this.setState({
      currentBook: null,
      currentIndex: -1,
    });
  }

  setActiveBook(book, index) {
    this.setState({
      currentBook: book,
      currentIndex: index,
    });
  }

  removeAllBooks() {
    this.props
      .deleteAllBooks()
      .then((response) => {
        console.log(response);
        this.refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  findByTitle() {
    this.refreshData();

    this.props.findBooksByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle, currentBook, currentIndex } = this.state;
    const { books } = this.props;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.findByTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Books List</h4>

          <ul className="list-group">
            {books &&
              books.map((book, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveBook(book, index)}
                  key={index}
                >
                  {book.title}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllBooks}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentBook ? (
            <div>
              <h4>Book</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentBook.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentBook.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentBook.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/books/" + currentBook.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Book...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps, {
  retrieveBooks,
  findBooksByTitle,
  deleteAllBooks,
})(BooksList);