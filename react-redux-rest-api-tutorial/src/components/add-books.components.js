import React, { Component } from "react";
import { connect } from "react-redux";
import { createBook } from "../actions/books";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveBook = this.saveBook.bind(this);
    this.newBook = this.newBook.bind(this);

    this.state = {id: null,title: "",description: "",published: false,submitted: false};
  }

  onChangeTitle(e) {
    this.setState({ title: e.target.value});
  }

  onChangeDescription(e) {
    this.setState({description: e.target.value});
  }

  saveBook() {
    const { title, description } = this.state;

    this.props
      .createBook(title, description)
      .then((data) => {
        this.setState({ id: data.id,title: data.title, 
          description: data.description,published: data.published,submitted: true,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newBook() {
    this.setState({id: null,title: "",description: "",published: false,submitted: false});
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newBook}>Add</button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" className="form-control" id="title" required
                value={this.state.title} onChange={this.onChangeTitle} name="title" />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input type="text" className="form-control" id="description"required 
              value={this.state.description} onChange={this.onChangeDescription} name="description" />
            </div>

            <button onClick={this.saveBook} className="btn btn-success">Submit</button>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { createBook })(AddBook);