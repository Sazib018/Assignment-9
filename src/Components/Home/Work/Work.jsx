import React from 'react';

const Work = () => {
    return (
        <div className="px-4 md:px-8">
            <section className="mt-12 text-center max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-700">
                    How does it work?
                </h2>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-gray-100 rounded-lg border-blue-400 shadow-lg shadow-blue-400">
                        <h3 className="text-lg md:text-xl font-semibold text-blue-700">
                            1. Donate
                        </h3>
                        <p className="text-gray-600">
                            Drop off your old or new winter clothing at our collection point.
                        </p>
                    </div>

                    <div className="p-6 bg-gray-100 rounded-lg border-blue-400 shadow-lg shadow-blue-400">
                        <h3 className="text-lg md:text-xl font-semibold text-blue-700">
                            2. Collection Point
                        </h3>
                        <p className="text-gray-600">
                            Donate winter clothes by visiting our various collection points.
                        </p>
                    </div>

                    <div className="p-6 bg-gray-100 rounded-lg border-blue-400 shadow-lg shadow-blue-400">
                        <h3 className="text-lg md:text-xl font-semibold text-blue-700">
                            3. Support Areas
                        </h3>
                        <p className="text-gray-600">
                            We deliver to Dhaka, Chattogram, Rajshahi and other regions.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Work;
