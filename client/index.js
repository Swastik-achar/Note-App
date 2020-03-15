import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore from './Store/configureStore'
import {Provider} from 'react-redux'
import { startGetNotes } from "./Actions/notesAction";
import {startGetCategories} from './Actions/categoriesActions'

const store= configureStore()

store.dispatch(startGetNotes())
store.dispatch(startGetCategories())
const jsx= (
    <Provider store={store}>
        <App />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById("root"));
