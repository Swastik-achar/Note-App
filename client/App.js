import React from 'react'
import Notes from './Components/Notes/Notes'
import Categories from './Components/Category/Categories'
import ShowCategory from './Components/Category/ShowCategory'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'


export default function App() {
    return (
        <div>
            <h1>Notes App</h1>

            <BrowserRouter>
            <Link to ='/categories'>Categories</Link>||
            <Link to='/notes'>Notes</Link>
            <Switch>
            <Route path='/notes' component={Notes}/>
            <Route exact path ='/categories' component={Categories}/>
            <Route path='/categories/:id' component={ShowCategory}/>
            </Switch>
             </BrowserRouter>
        </div>
    )
}
