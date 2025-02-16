import React from 'react';

const Donor = () => {
    return (
        <div className="px-4 md:px-8">
            <section className="mt-12 text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-700">
                    Donor Testimonials
                </h2>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-100 rounded-lg border-blue-400 shadow-lg shadow-blue-400">
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                            "I donated my old winter clothes, and it truly helped those in need. A fantastic initiative!"
                        </p>
                        <h4 className="mt-4 font-semibold text-blue-700">
                            - Rafi Ahmed
                        </h4>
                    </div>

                    <div className="p-6 bg-gray-100 rounded-lg border-blue-400 shadow-lg shadow-blue-400">
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                            "It feels great to help those suffering in the cold. I will contribute every year!"
                        </p>
                        <h4 className="mt-4 font-semibold text-blue-700">
                            - Nusrat Jahan
                        </h4>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donor;
