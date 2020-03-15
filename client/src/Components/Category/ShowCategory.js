import React from "react";
import { findCategory, findNotes } from "../../Selectors/Categories";
import { connect } from "react-redux";
import { Paper, Button } from "@material-ui/core";
import EditForm from "../Notes/EditForm";
import AddForm from '../Notes/AddForm'

class ShowCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      addNote: false,
      editNote: false,
      title: "",
      body: "",
      note: []
    };
  }
  handleAddNote = () => {
    this.setState({ addNote: !this.state.addNote });
  }
  handleEditNote = id => {
    const note = this.props.notes.find(note => note._id == id);
    this.setState({ note, editNote: !this.state.editNote });
  };
  render() {
    console.log(this.props.notes);
    return (
      <div>
        {this.props.category && (
          <>
            <h2>Category: {this.props.category.name} </h2>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleAddNote}
              disabled={this.state.addNote || this.state.editNote}
            >
              Add Note
            </Button>
            <br />
            <br />
            {this.state.editNote && (
              <div style={{ backgroundColor: "#C0C0C0" }}>
                <br />
                <EditForm notes={this.state.note} />
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
            {this.state.addNote && (
              <div style={{ backgroundColor: "#C0C0C0" }}>
                <br />
                const
                <AddForm />
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
            <br />
            <br />
            {this.props.notes.map(note => {
              return (
                <Paper elevation={5} key={note._id}>
                  <>
                    <br />
                    <br />
                    <h2>
                      {note.title}{" "}
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

                    <h4> &ensp;&ensp;{note.body}</h4>
                    <br />
                    <br />
                  </>
                  <br />
                  <br />
                </Paper>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    category: findCategory(state.categories, id),
    notes: findNotes(state.notes, id)
  };
};
export default connect(mapStateToProps)(ShowCategory);
