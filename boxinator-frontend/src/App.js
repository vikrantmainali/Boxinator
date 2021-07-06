import React, {Component} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import addbox from './components/addbox';
import boxList from './components/listboxes';

class App extends Component 
{
    render() // Rendering the pages for the application
    {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Route exact path='/' component={addbox}/> 
                    <Route exact path='/addbox' component={addbox}/>
                    <Route exact path='/listboxes' component={boxList}/>
                    <Route exact path ='*'component={addbox}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;