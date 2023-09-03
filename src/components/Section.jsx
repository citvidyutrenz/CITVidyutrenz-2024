import React from 'react';
import white_logo_pngg from '../assets/white_logo_pngg.png';


const buttonStyle = {
  border: 'none',
  background: '#fff',
  borderRadius: '5px',
  marginTop: '20px',
  fontWeight: '600',
  fontSize: '15px',
  color: '#333',
  width: '100px',
  padding: '0',
  marginRight: '500px',
  marginBottom: '30px',
  transition: '0.3s',
};




const Section = () => {
  return (

    
      <section className='flex flex-col md:flex-row border rounded-3xl m-10 mt-12'style={{
        WebkitBackdropFilter: 'blur(3px)',
        backdropFilter: 'blur(10px)',
        backgroundColor:''
      }}>
        <div className='text-center md:text-left md:w-1/2'>
          <h1 className="  text-2xl font-bold p-6 pb-0 mb-4">Heading</h1>
          <p className="text-white p-6 pt-0 text-xs font-serif">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            perferendis cumque, quas nulla sint quam repellendus consequatur
            reiciendis illum laboriosam quos incidunt nobis modi voluptatum
            necessitatibus optio ut, porro quidem!
          </p>
        </div>
        <div className='flex justify-center md:w-1/2'>
          <img
            src={white_logo_pngg}
            className='w-[80px] h-50 md:w-[300px] md:h-50 '
            alt='Reload Again'
          />
        </div>
      </section>


  );
};

export default Section;
