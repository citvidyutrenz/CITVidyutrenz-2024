
// import Home1 from "../components/Home";
// import "./home.css";

// const Home = () => {
//   return (
//     <div className="bgg op-0 h-screen bg-fixed ">
//       <div>
//         <Home1 />
//       </div>
//     </div>
//   );
// };
// //  border-b border-gray-600
// export default Home;


import React from 'react';

const Announcement = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Vidyutrenz</h1>
        <p className="text-lg text-gray-600 mb-4">Our team is working hard to make the website live ASAP. Stay tuned!</p>
        <img 
          src="https://via.placeholder.com/400x300?text=Coming+Soon" 
          alt="Coming Soon"
          className="mx-auto mb-6 rounded-lg shadow-md"
        />
        <div className="mt-6">
          <svg className="w-16 h-16 text-blue-500 animate-spin mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v4m0 8v4m4-8h4m-8 4H4m4-4H4m8-8V4m4 4h4m-8 4h4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Announcement;

