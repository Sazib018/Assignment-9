import React from 'react';

const Work = () => {
    return (
        <div>
            <section className="mt-12 text-center">
                <h2 className="text-3xl font-bold text-blue-700">How does it work?</h2>
                <div className="mt-6 grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-gray-100 rounded-xl shadow-lg shadow-blue-500/100">
                        <h3 className="text-xl font-semibold">1. Donate</h3>
                        <p className="text-gray-600">Drop off your old or new winter clothing at our collection point.</p>
                    </div>

                    <div className="p-6 bg-gray-100 rounded-lg shadow-lg shadow-blue-500/100">
                        <h3 className="text-xl font-semibold">2.Collection point</h3>
                        <p className="text-gray-600">Donate winter clothes by visiting our various collection points.</p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-lg shadow-lg shadow-blue-500/100">
                        <h3 className="text-xl font-semibold">3. Support areas</h3>
                        <p className="text-gray-600">We deliver to Dhaka, Chittagong, Rajshahi and other departments.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Work;