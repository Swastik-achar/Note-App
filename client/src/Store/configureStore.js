import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import categoriesReducer from '../Reducers/categoriesReducer'
import notesReducer from '../Reducers/notesReducer'
 

const configureStore=()=>{
    const store= createStore(combineReducers({
        categories:categoriesReducer,
        notes:notesReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore