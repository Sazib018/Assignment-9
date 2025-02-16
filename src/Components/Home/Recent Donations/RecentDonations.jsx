import React from 'react';

const RecentDonations = () => {
    return (
        <div>
           <section className="mt-12 text-center">
            <h2 className="text-3xl font-bold text-blue-700">Recent Donations</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg shadow-blue-500/50">
                <h3 className="text-xl font-semibold">100+ Winter Clothes</h3>
                <p className="text-gray-600">Recently distributed in Dhaka.</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg shadow-blue-500/50">
                <h3 className="text-xl font-semibold">70+ Winter Clothes</h3>
                <p className="text-gray-600">Recently distributed in Rajshahi.</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg shadow-blue-500/50">
                <h3 className="text-xl font-semibold">50+ Winter Clothes</h3>
                <p className="text-gray-600">Recently distributed in Chattogram.</p>
              </div>
            </div>
          </section> 
        </div>
    );
};

export default RecentDonations;