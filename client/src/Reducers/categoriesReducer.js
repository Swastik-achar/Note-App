const categoriesInitialValue = [];

const categoriesReducer = (state = categoriesInitialValue, action) => {
  switch (action.type) {
    case "GET_CATEGORIES": {
      return state.concat(action.payload);
    }
    case "ADD_CATEGORY": {
      return state.concat(action.payload);
    }
    case "REMOVE_CATEGORY": {
      return state.filter(category => category._id !== action.payload._id);
    }
    case "EDIT_CATEGORY": {
      return [...state].map(category => {
        if (category._id == action.payload._id) {
          return action.payload;
        } else {
          return { ...category };
        }
      });
    }
    default: {
      return state;
    }
  }
};
export default categoriesReducer;
