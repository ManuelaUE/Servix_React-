import React from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';

import Login from './Auth/Login';
import Register from './Auth/Register';

import Home from './Auth/Home';

function App () {
    return (
        <Router>
            <Routes>

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/home" element={<Home />} />

                <Route index element={<Navigate to = "/login" />} />
            </Routes>
        </Router>
    );
}

export default App;