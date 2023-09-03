import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import TechnicalEvents from './components/TechEvents';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import ContactUs from './pages/ContactUs';
import SingleEventPage from './components/SingleEvent';
import AllEvents from './pages/AllEvents';
import './App.css'


function App() {

  return (
    <div className='app flex-row bg-cover bg-center' >
      
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<AllEvents />} />
              <Route path="/events/:id" element={<SingleEventPage/>}/>
              <Route path="/about" element={ <AboutUs/>} />
              <Route path="/events" element={<Events/>} />
              <Route path="/contactus" element={<ContactUs/>} />
            </Routes>
          </Router>
    </div>
  );
}

export default App;
