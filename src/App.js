import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';
import VisitSection from './components/VisitSection';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlanYourVisitRoute from "./components/PlanYourVisitRoute";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <HeroSection />
                        <VisitSection />
                        <Cards />
                    </>
                } />
                <Route path="/plan" element={<PlanYourVisitRoute />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
