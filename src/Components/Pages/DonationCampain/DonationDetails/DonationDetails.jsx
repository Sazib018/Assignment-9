import React, { useEffect, useState } from 'react';
import { CgMail } from 'react-icons/cg';
import { FaLocationDot } from 'react-icons/fa6';
import { Link, useParams } from 'react-router-dom';

const DonationDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch("/donation.json")
            .then((res) => res.json())
            .then((data) => {
                const selectedCampaign = data.find((item) => item.id === parseInt(id));
                setDetails(selectedCampaign);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

    if (!details) {
        return <p>Loading details...</p>;
    }

    return (
        <div>
            <div className='mt-24'>
                <div className="py-16 px-4 md:px-12">
                    <div className="max-w-[800px] mx-auto">
                        <div className="shadow-xl  overflow-hidden bg-white">
                            <img
                                src={details.image}
                                alt={details.title}
                                className="w-full h-auto object-cover"
                            />
                            <div className="p-6">
                                <h2 className="md:text-3xl text-xl font-bold text-gray-800">{details.title}</h2>
                                <p className="md:text-lg text-sm text-gray-700 leading-6 mt-2">{details.description}</p>

                                <p className="text-lg text-blue-600 font-semibold mt-2">Status: {details.status}</p>

                                <div className="flex items-center text-lg gap-2 text-gray-700 mt-2">
                                    <FaLocationDot className="w-5 text-blue-600" />
                                    <span>{details.division}</span>
                                </div>

                                <div className="flex items-center md:text-lg gap-2 text-gray-700 mt-2">
                                    <CgMail className="w-5  text-blue-600" />
                                    <span>{details.contactinfo}</span>
                                </div>

                                <Link to="/donorform" className="block mt-4">
                                    <button className="w-full bg-blue-600 hover:bg-blue-300 hover:text-black  text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300">
                                    Donation Form
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DonationDetails;