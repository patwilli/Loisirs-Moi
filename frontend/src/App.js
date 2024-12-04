import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import ActivityDetails from "./pages/ActivityDetails";
import About from "./pages/About";
import InteractiveMapPage from "./pages/InteractiveMapPage";
import Search from "./pages/Search";

//Components
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
                    <Route path="loisirs/details/:id" element={<ActivityDetails />} />
                    <Route path="/Cartes-des-loisirs" element={<InteractiveMapPage />} />
                    <Route path="/Mes-favoris" element={<About />} />
                    <Route path="/A-propos" element={<About />} />
                    <Route path="/Recherche" element={<Search />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
