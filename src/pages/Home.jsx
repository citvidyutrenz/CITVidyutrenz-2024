import Navbar from '/src/components/Navbar';
import Home1 from '../components/Home';
import "./home.css";
import cd from '../assets/cd.jpg';


const Home = () => {
  return (
    <div className='bgg op-0 h-screen bg-fixed '>
      
      <div className=' fixed w-auto md:h-screen md:w-full z-50'>
        <Navbar/>
      </div>
      <div >
        <Home1/>
      </div>
      
    </div>
    );
}
//  border-b border-gray-600
export default Home;