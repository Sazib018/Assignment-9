import React from 'react';

const About = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between bg-blue-100 mt-20 h-[500px] p-8 shadow-lg shadow-blue-400 rounded-2xl ">
            
      {/* Left Side  */}
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">About Winter Donation</h2>
        <p className="text-gray-600">
          Every winter, many underprivileged people suffer from the extreme cold. Our Winter Clothing Donation campaign aims to provide warmth and comfort to those in need. Join us in making a difference.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">View More</button>
      </div>
      
      {/* Right Side */}
      <div className="md:w-1/2 h-full mt-6 md:mt-0 flex justify-center">
        <img 
          src="https://i.ibb.co.com/dwRk8xH1/cc.jpg" 
          alt="Winter Donation" 
          className="rounded-xl shadow-md"
        />
      </div>
    </section>
    );
};

export default About;
