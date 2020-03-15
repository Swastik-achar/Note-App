import React, { Component } from "react";
import { Paper, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startDeleteCategory } from "../../Actions/categoriesActions";
import Swal from "sweetalert2";
import AddCategory from "./AddCategory";
import EditCategory from './EditCategory'

class Notes extends Component {
  constructor() {
    super();
    this.state = {
      addCategory: false,
      editCategory: false,
      name: "",
      category:[]
    };
  }

  handleAddCategory = () => {
    this.setState({ addCategory: !this.state.addCategory });
  };
  handleLink = id => {
    this.props.history.push(`/categories/${id}`);
  };
  handleEditCategory = (id) => {
  const category= this.props.categories.find(category=>category._id==id)
  this.setState({category, editCategory:!this.state.editCategory})
  };
  handleDeleteCategory = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        this.props.dispatch(startDeleteCategory(id));
      }
    });
  };
  render() {
    console.log(this.props.notes);
    return (
      <div>
        <h2 style={{ justifyContent: "center" }}>Listing Categories</h2>
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleAddCategory}
          disabled={this.state.addCategory}
        >
          Add Category
        </Button>
        <br />
        <br />
        {this.state.addCategory && (
          <div style={{ backgroundColor: "#C0C0C0" }}>
            <br />
            <>
              <AddCategory />
              <Button
                variant="contained"
                color="secondary"
                onClick={this.handleAddCategory}
              >
                Close
              </Button>
            </>
            <br />
            <br />
          </div>
        )}
        {this.state.editCategory && (
          <div style={{ backgroundColor: "#C0C0C0" }}>
            <br />
            <>
              <EditCategory category={this.state.category}/>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.handleEditCategory}
              >
                Close
              </Button>
            </>
            <br />
            <br />
          </div>
        )}
        <ul>
          {this.props.categories.map(category => {
            console.log(category);
            return (
              <Paper elevation={3} key={category._id}>
                {" "}
                <>
                  <br />
                  <h2>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      onClick={() => this.handleLink(category._id)}
                    >
                      {category.name}
                    </Link>
                    <span style={{ float: "right" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => this.handleEditCategory(category._id)}
                        disabled={this.state.addNote || this.state.editNote}
                      >
                        Edit
                      </Button>
                      &ensp;
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => this.handleDeleteCategory(category._id)}
                        disabled={this.state.editNote}
                      >
                        Delete
                      </Button>
                      &ensp;&ensp;
                    </span>
                  </h2>
                  <br />
                </>
                <br />
              </Paper>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    categories: state.categories,
    notes: state.notes
  };
};

export default connect(mapStateToProps)(Notes);
