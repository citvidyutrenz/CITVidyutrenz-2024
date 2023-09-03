import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TechnicalEvents from './components/TechEvents';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import SingleEventPage from "./components/SingleEvent";
import Navbar from "./components/Navbar";
import AllEvents from "./pages/AllEvents";
import "./App.css";

function App() {
  return (
    <div className="app flex-row bg-cover bg-center">
      <Router>
        <div className=" fixed w-auto md:h-fit md:w-full z-50">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<AllEvents />} />
          <Route path="/events/:id" element={<SingleEventPage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
