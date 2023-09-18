import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Login from './containers/Login';
import Register from './containers/Register';

import Home from './containers/Home';

function App () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;