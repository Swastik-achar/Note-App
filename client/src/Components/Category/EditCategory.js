import React, { Component } from "react";
import { TextField, Input, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { startEditCategory } from "../../Actions/categoriesActions";
import { withRouter } from "react-router-dom";

export class EditCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.category ? this.props.category.name : "",
      addCategory: false
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const id = this.props.category._id;
    console.log(id)
    e.preventDefault();
    const formData = {
      name: this.state.name
    };
    console.log(formData)
    this.props.dispatch(startEditCategory(id, formData));
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

export default withRouter(connect()(EditCategory));
