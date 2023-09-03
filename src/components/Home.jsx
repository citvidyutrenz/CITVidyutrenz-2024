import {motion} from 'framer-motion';
import AnimateVariant from './framer';
import Footer from './footer';
import Section from './Section';
import Memories from './Memories';
import ContactUS from './ContactUs';
import CardWithVideo from './Memories1';

const Home1 = () => {
    return (
      <motion.div className="text-white flex-grow h-screen md:h-screen"
      initial="offscreen"
      animate="onscreen"
      variants={AnimateVariant}
      viewport={{ once: true, amount: 0.8 }}

    //   style={{WebkitBackdropFilter: 'blur(5px)', // Apply the blur effect using -webkit-backdrop-filter
    // backdropFilter: 'blur(5px)'}}
      >

        <div className='flex flex-col items-center w-full h-screen pt-24'>
         
         <div className="mt-24 rounded-lg justify-center p-3" style={{WebkitBackdropFilter: 'blur(3px)', // Apply the blur effect using -webkit-backdrop-filter
    backdropFilter: 'blur(3px)'}} >           
             <h1 className="text-center text-2xl md:text-5xl " >VIDYUTRENZ</h1>
             <p className="font-serif text-center text-xs md:text-base  text-white text-opacity-40">
                National Level Technical Symposiyum from the Department of Electronics and Communication Engineering
            </p>
        </div> 
         <div className="mt-[250px] md:mt-[370px]">
            <Footer/>
        </div>
            <Section/>
            <Memories/>
            <CardWithVideo/>
            <ContactUS/>
            <Footer/> 
        </div>
        

      </motion.div>
      );
  }
   
  export default Home1;