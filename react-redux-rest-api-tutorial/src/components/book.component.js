import React, { Component } from "react";
import { connect } from "react-redux";
import { updateBook, deleteBook } from "../actions/books";
import BookDataService from "../services/book.service";

class Book extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getBook = this.getBook.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.removeBook = this.removeBook.bind(this);

    this.state = {
      currentBook: { id: null, title: "",description: "",published: false},
      message: "",
    };
  }

  componentDidMount() {
    this.getBook(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBook: {
          ...prevState.currentBook,
          title: title,
        },
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentBook: {
        ...prevState.currentBook,
        description: description,
      },
    }));
  }

  getBook(id) {
    BookDataService.get(id)
      .then((response) => {
        this.setState({
          currentBook: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateStatus(status) {
    var data = {
      id: this.state.currentBook.id,
      title: this.state.currentBook.title,
      description: this.state.currentBook.description,
      published: status,
    };

    this.props
      .updateBook(this.state.currentBook.id, data)
      .then((reponse) => {
        console.log(reponse);

        this.setState((prevState) => ({
          currentBook: {
            ...prevState.currentBook,
            published: status,
          },
        }));

        this.setState({ message: "The status was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateContent() {
    this.props
      .updateBook(this.state.currentBook.id, this.state.currentBook)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The book was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  removeBook() {
    this.props
      .deleteBook(this.state.currentBook.id)
      .then(() => {
        this.props.history.push("/books");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentBook } = this.state;

    return (
      <div>
        {currentBook ? (
          <div className="edit-form">
            <h4>Book</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" value={currentBook.title}
                  onChange={this.onChangeTitle} />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" id="description"
                  value={currentBook.description} onChange={this.onChangeDescription} />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentBook.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentBook.published ? (
              <button className="badge badge-primary mr-2" onClick={() => this.updateStatus(false)} >UnPublish</button>
            ) : (
              <button className="badge badge-primary mr-2" onClick={() => this.updateStatus(true)} > Publish</button>
            )}

            <button className="badge badge-danger mr-2" onClick={this.removeBook} >Delete</button>

            <button type="submit" className="badge badge-success" onClick={this.updateContent}> Update</button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br /><p>Please click on a Book...</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateBook, deleteBook })(Book);