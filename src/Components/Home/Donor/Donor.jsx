import React from 'react';

const Donor = () => {
    return (
        <div>
           <section className="mt-12 text-center">
            <h2 className="text-3xl font-bold text-blue-700">Donor Testimonials</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg shadow-blue-500/50">
                <p className="text-gray-600 ">"I donated my old winter clothes, and it truly helped those in need. A fantastic initiative!"</p>
                <h4 className="mt-4 font-semibold">- Rafi Ahmed</h4>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg shadow-blue-500/50">
                <p className="text-gray-600 ">"It feels great to help those suffering in the cold. I will contribute every year!"</p>
                <h4 className="mt-4 font-semibold">- Nusrat Jahan</h4>
              </div>
            </div>
          </section> 
        </div>
    );
};

export default Donor;