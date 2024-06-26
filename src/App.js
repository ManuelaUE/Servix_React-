import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Login from './Auth/Login';
import Register from './Auth/Register';
import Servicios from './services/Servicios';
import User from './user/ofertante';
import Subcategoria from './services/Subcategoria';

import Home from './Auth/Home';
import Profile from './profile/PerfilSolicitante';

function App () {
    return (
        <Router>
            <Routes>

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/home" element={<Home />} />
                <Route path="/services" element={<Servicios />} />
                <Route path="/ofertante" element={<User />} />
                <Route path="/subcategorias" element={<Subcategoria />} />

                <Route index element={<Navigate to = "/login" />} />
            </Routes>
        </Router>
    );
}

export default App;