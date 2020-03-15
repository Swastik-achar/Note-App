import React, { Component } from "react";
import { TextField, Input } from "@material-ui/core";
import { connect } from "react-redux";
import { startAddNotes } from "../../Actions/notesAction";
import { withRouter } from "react-router-dom";

export class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:  "",
      body: ""
    };
  }
   handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      title: this.state.title,
      body: this.state.body,
      category: this.props.match.params.id
    };
    this.props.dispatch(startAddNotes(formData));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="filled-name"
            name="title"
            label="Title"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.title}
            placeholder="Enter the title"
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            name="body"
            label="Body"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.body}
            placeholder="Enter body"
          />{" "}
          <br />
          <br />
          <Input type="submit" variant="contained" />
        </form>
      </div>
    );
  }
}

export default withRouter(connect()(CategoryForm))
