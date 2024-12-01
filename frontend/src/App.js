import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MonCompte from "./pages/MonCompte";
import ActivityDetails from "./pages/ActivityDetails";
import About from "./pages/About";
import InteractiveMapPage from "./pages/InteractiveMapPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/activities/:uniqueId" element={<ActivityDetails />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/mon-compte" element={<MonCompte />} />
                    <Route path="/map" element={<InteractiveMapPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
