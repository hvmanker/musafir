import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Skeleton } from "./components/Location_skeleton/Skeleton";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Booking } from "./components/book/Booking";
import "./App.css";
import { Scroll } from "./components/Scroll.js";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Router>
        <Scroll />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location/:id" element={<Skeleton />} />
          <Route path="/booking/:heading" element={<Booking />} />
        </Routes>
      </Router>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
