import React, { Component } from "react";
import {
  TextField,
  Input,
  FormControl,
  InputLabel,
  Select
} from "@material-ui/core";
import { connect } from "react-redux";
import { startEditNotes } from "../../Actions/notesAction";

export class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.notes && this.props.notes.title,
      body: this.props.notes ? this.props.notes.body : "",
      category: this.props.notes ? this.props.notes.category : ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const id = this.props.notes._id;
    const formData = {
      title: this.state.title,
      body: this.state.body,
      category: this.state.category
    };
    this.props.dispatch(startEditNotes(id, formData));
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
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">
              Category
            </InputLabel>
            <Select
              native
              value={this.state.category}
              onChange={this.handleChange}
              inputProps={{
                name: "category",
                id: "outlined-age-native-simple"
              }}
            >
              <option value="" />
              {this.props.categories.map(category => {
                return (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          <br />
          <br />
          <Input type="submit" variant="contained" />
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps)(CategoryForm);
