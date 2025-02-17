import React, { useEffect, useState } from 'react';

const DonationCampaign = () => {
    const [donationData, setDonationData] = useState([]);

    useEffect(() => {
        fetch("/donation.json")
            .then((res) => res.json())
            .then((data) => setDonationData(data))
            .catch((error) => console.error("Error Data:", error));
    }, []);

    if (!donationData || donationData.length === 0) {
        return <p>Loading data...</p>;
    }
    
    return (
        <div className='mt-[65px]'>
            <div className="py-16 px-4 md:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
                    {donationData.map((campaign) => (
                        <div key={campaign.id} className="border shadow-lg p-4 rounded-lg flex flex-col items-center">
                            <img
                                src={campaign.image}
                                alt={campaign.title}
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <h2 className="text-xl font-bold mt-2 text-center">{campaign.title}</h2>
                            <p className="text-gray-600 text-center">{campaign.description}</p>
                            <p className="text-sm text-black"><span className='font-bold'>Status:</span> {campaign.status}</p>
                            <p className="text-sm text-black ">{campaign.division}</p>
                            <p className="text-sm font-bold text-blue-800">{campaign.contactinfo}</p>
                            <button className="bg-blue-600 hover:bg-blue-300 hover:text-black text-white px-4 py-2 rounded-md mt-2 w-full">Donate</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DonationCampaign;
