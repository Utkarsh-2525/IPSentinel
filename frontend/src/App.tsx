import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BulkScanner from "./pages/BulkScanner";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bulk" element={<BulkScanner />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;