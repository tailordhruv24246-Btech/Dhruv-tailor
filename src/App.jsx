
import './App.css'
import Hero from "./components/Hero";
import Home from './pages/Home';
import Journey from './pages/Journey';
import Creations from './pages/Creations';
import Connect from './pages/Connect';  
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Hero />
      {/* Navbar always visible */}
   <Navbar />

      {/* Page Routes */}
      <Routes>
   

        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/creations" element={<Creations />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
