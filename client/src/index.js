/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from './Components/404/Page404';
import LandingPage from './Components/Home/LandingPage';
import NavBar from './Components/Shared/NavBar';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
    palette: {
        primary: {
            light: '#4574b9',
            main: '#325383',
            dark: '#213757',
            contrastText: '#FFF',
        },
        secondary: {
            light: '#FFF',
            main: '#FFF',
            dark: '#FFF',
            contrastText: '#000',
        },
    },
});

root.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route
                    path="/"
                    element={<LandingPage />}
                />
                <Route
                    path="*"
                    element={<Page404 />}
                />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
);

//!reportWebVitals() here
