import NavBar from "./Common/components/NavBar";
import HomePage from "./HomePage/HomePage";
import Footer from "./Common/components/Footer";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./About/About";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
