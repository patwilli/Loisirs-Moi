import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
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
                    <Route path="/Accueil" element={<Home />} />
                    <Route path="/Loisirs" element={<Activities />} />
                    <Route path="/activities/:uniqueId" element={<ActivityDetails />} />
                    <Route path="/Cartes-des-loisirs" element={<InteractiveMapPage />} />
                    <Route path="/Mes-favoris" element={<About />} />
                    <Route path="/A-propos" element={<About />} />
                    <Route path="/Recherche" element={<About />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
