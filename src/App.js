import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Login from './views/auth/Login';
import Register from './views/auth/Register';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/sign-up" component={Register} />
            </div>
        </BrowserRouter>
    );
}

export default App;
