import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import BancoPage from './pages/BancoPage';
import CadastroPage from './pages/CadastroPage';
import SobrePage from './pages/SobrePage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/banco" element={<BancoPage />} />
                <Route exact path="/cadastro" element={<CadastroPage />} />
                <Route exact path="/sobre" element={<SobrePage />} />
                <Route exact path="*" element={<h1>Invalid page !</h1>} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
