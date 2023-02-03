import React from 'react'
import { BrowserRouter as RouterContainer, Routes, Route, Navigate } from "react-router-dom";
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';

export default function Router() {
    return (
        <RouterContainer>
            < NavBar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path= "*" element={<Navigate to="/" replace />} />
            </Routes>
            < Footer />
        </RouterContainer>
    )
}
