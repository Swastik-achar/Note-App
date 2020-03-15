import React, { Component } from "react";
import { Paper, Button } from "@material-ui/core";
import { connect } from "react-redux";
import AddNotes from "./AddNotes";
import EditNotes from './EditNotes' 

class Notes extends Component {
  constructor() {
    super();
    this.state = {
      note: [],
      addNote: false,
      editNote: false,
      title: "",
      body: "",
      category: ""
    };
  }

  handleEditNote = id => {
    const note = this.props.notes.find(note => note._id == id);
    this.setState({ note, editNote: !this.state.editNote });
  };
  handleAddNote = () => {
    this.setState({ addNote: !this.state.addNote });
  };
  render() {
    console.log(this.props.notes);
    return (
      <div>
        <h2 style={{ justifyContent: "center" }}>Listing Notes</h2>
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleAddNote}
          disabled={this.state.addNote}
        >
          Add Note
        </Button>
        <br />
        <br />
        {this.state.addNote && (
          <div style={{ backgroundColor: "#C0C0C0" }}>
            <br />
            <AddNotes />
            <br />
            <br />
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleAddNote}
            >
              Close
            </Button>
            <br />
            <br />
          </div>
        )}
        {this.state.editNote && (
          <div style={{ backgroundColor: "#C0C0C0" }}>
            <br />
            <EditNotes notes={this.state.note} />
            <br />
            <br />
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleEditNote}
            >
              Close
            </Button>
            <br />
            <br />
          </div>
        )}
        <ul>
          {this.props.notes.map(note => {
            console.log(note);
            return (
              <Paper elevation={3} key={note._id}>
                {" "}
                <>
                  <br />
                  <h2>
                    {note.title}
                    <span style={{ float: "right" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => this.handleEditNote(note._id)}
                        disabled={this.state.addNote || this.state.editNote}
                      >
                        Edit
                      </Button>
                      &ensp;
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => this.handleDeleteNote(note._id)}
                        disabled={this.state.editNote}
                      >
                        Delete
                      </Button>
                      &ensp;&ensp;
                    </span>
                  </h2>
                  <h3>&ensp;&ensp;Body: &ensp;{note.body}</h3>
                  <h3>&ensp;&ensp;Category: &ensp;{note.category.name}</h3>
                  <br />
                </>
                <br />
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
    notes: state.notes,
    categories: state.categories
  };
};

export default connect(mapStateToProps)(Notes);
