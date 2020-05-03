import React, { Component } from "react";
import Comment from "./Comment.jsx";

export default class TabPane extends Component {
  constructor(props) {
    super(props);

    this.identifier = this.props.project.identifier;

    this.state = {
      title: "",
      comment: "",
      comments: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeComment = this.handleChangeComment.bind(this);
  }

  componentDidMount() {
    const commentsAtLS = localStorage.getItem(this.identifier);
    if (commentsAtLS) {
      this.setState(prevState => ({
        ...prevState,
        comments: JSON.parse(commentsAtLS)
      }));
    }
  }

  handleChangeTitle(event) {
    const title = event.target.value;
    this.setState(prevState => {
      return {
        ...prevState,
        title: title
      };
    });
  }

  handleChangeComment(event) {
    const comment = event.target.value;
    this.setState(prevState => {
      return {
        ...prevState,
        comment: comment
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addComment();
  }

  addComment() {
    const idcomment = new Date().getTime();
    const newComment = {
      id: idcomment,
      title: this.state.title,
      comment: this.state.comment
    };

    this.setState(prevState => {
      return {
        title: "",
        comment: "",
        comments: [...prevState.comments, newComment]
      };
    });

    this.pushToLocalStorage(this.state.comments, newComment);
  }

  pushToLocalStorage(prevComments, newComment) {
    localStorage.setItem(
      this.identifier,
      JSON.stringify([...prevComments, newComment])
    );
  }

  render() {
    const {
      id,
      name,
      identifier,
      description,
      status,
      custom_fields,
      created_on,
      updated_on
    } = this.props.project;

    return (
      <div
        className="tab-pane fade show"
        id={identifier}
        aria-labelledby={identifier}
        role="tabpanel"
      >
        <h2>{name}</h2>
        <h4>{description}</h4>
        <ul className="list-group">
          <li className="list-group-item">ID: {id}</li>
          <li className="list-group-item">Status: {status}</li>
          <li className="list-group-item">Created on: {created_on}</li>
          <li className="list-group-item">Updated on: {updated_on}</li>
          <li className="list-group-item">Identifier: {identifier}</li>
          <li className="list-group-item">
            Custom fields:
            {custom_fields.map(({ id, name, value }) => (
              <ul className="list-unstyled" key={id}>
                <li className="font-weight-bold">{name}</li>
                <li>ID: {id}</li>
                {value && <li>Value: {value}</li>}
              </ul>
            ))}
          </li>
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            type="text"
            placeholder="Title:"
            className="w-100 p-3"
            onChange={this.handleChangeTitle}
            value={this.state.title}
            required
          />
          <textarea
            name="comment"
            type="text"
            placeholder="Your comment:"
            className="w-100 p-3"
            onChange={this.handleChangeComment}
            value={this.state.comment}
            required
          />
          <button className="btn btn-primary w-100 p-3" type="submit">
            Submit
          </button>
        </form>
        {this.state.comments.length !== 0 && (
          <ul className="d-flex flex-column-reverse list-group">
            {this.state.comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}
