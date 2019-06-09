import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Home from './views/Home';
import Login from './views/auth/Login';
import Register from './views/auth/Register';
import Headline from './components/headline/Headline';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/sign-up" component={Register} />
                <Headline header="Post" desc="Click the button to render posts" />
            </div>
        </BrowserRouter>
    );
}

export default App;
