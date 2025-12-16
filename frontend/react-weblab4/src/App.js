import React from "react"
import { Routes, Route } from 'react-router-dom';
import IndexPage from "./pages/index";
import LoginPage from "./pages/login";
import MainPage from "./pages/main";
import RegisterPage from "./pages/register";
import ChangePage from "./pages/change";

function App() {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<ChangePage />} />
        </Routes>
    )
}

export default App;
