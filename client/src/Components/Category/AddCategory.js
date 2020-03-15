import React, { Component } from "react";
import { TextField, Input, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { startAddCategory } from "../../Actions/categoriesActions";
import { withRouter } from "react-router-dom";

export class AddCategory extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      addCategory:false
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      name: this.state.name
    };
    this.props.dispatch(startAddCategory(formData));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="filled-name"
            name="name"
            label="Name"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Enter the title"
          />
          <br />
          <br />
          <Input type="submit" variant="contained" />
        </form>
        <br />
        <br />
      </div>
    );
  }
}

export default withRouter(connect()(AddCategory));
