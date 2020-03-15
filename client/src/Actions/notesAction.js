import axios from "axios";

export const getNotes = notes => {
  return {
    type: "GET_NOTES",
    payload: notes
  };
};
export const startGetNotes = () => {
  return dispatch => {
    axios
      .get("http://localhost:3040/notes")
      .then(response => {
        const notes = response.data;
        dispatch(getNotes(notes));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const addNote = note => {
  return {
    type: "ADD_NOTES",
    payload: note
  };
};

export const startAddNotes = notes => {
  return dispatch => {
    axios
      .post(`http://localhost:3040/notes`, notes)
      .then(response => {
        const note = response.data;
        dispatch(addNote(note));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const editNotes = note => {
  return {
    type: "EDIT_NOTES",
    payload: note
  };
};
export const startEditNotes = (id, formData) => {
  return dispatch => {
    axios
      .put(`http://localhost:3040/notes/${id}`, formData)
      .then(response => {
        const note = response.data;
        console.log(note);
        dispatch(editNotes(note));
        window.location.reload()
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const deleteNote = note => {
  return {
    type: "DELETE_NOTE",
    payload: note
  };
};
export const startDeleteNote = id => {
  return dispatch => {
    axios
      .delete(`http://localhost:3040/notes/${id}`)
      .then(response => {
        const note = response.data;
        dispatch(deleteNote(note));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
