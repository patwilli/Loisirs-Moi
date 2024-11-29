import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MonCompte from "./pages/MonCompte";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mon-compte" element={<MonCompte />} />
            </Routes>
        </Router>
    );
}

export default App;
