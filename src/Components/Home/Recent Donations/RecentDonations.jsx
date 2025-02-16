import React from 'react';

const RecentDonations = () => {
    return (
        <div className="px-4 md:px-8">
            <section className="mt-12 text-center max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-700">
                    Recent Donations
                </h2>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-gray-100 rounded-lg border-blue-400 shadow-lg shadow-blue-400">
                        <h3 className="text-lg md:text-xl font-semibold text-blue-700">
                            100+ Winter Clothes
                        </h3>
                        <p className="text-gray-600">Recently distributed in Dhaka.</p>
                    </div>

                    <div className="p-6 bg-gray-100 rounded-lg border-blue-400 shadow-lg shadow-blue-400">
                        <h3 className="text-lg md:text-xl font-semibold text-blue-700">
                            70+ Winter Clothes
                        </h3>
                        <p className="text-gray-600">Recently distributed in Rajshahi.</p>
                    </div>

                    <div className="p-6 bg-gray-100 rounded-lg border-blue-400 shadow-lg shadow-blue-400">
                        <h3 className="text-lg md:text-xl font-semibold text-blue-700">
                            50+ Winter Clothes
                        </h3>
                        <p className="text-gray-600">Recently distributed in Chattogram.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RecentDonations;
