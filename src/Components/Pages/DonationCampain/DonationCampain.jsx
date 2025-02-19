import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const DonationCampaign = () => {
    const [donationData, setDonationData] = useState([]);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        fetch("/donation.json")
            .then((res) => res.json())
            .then((data) => setDonationData(data))
            .catch((error) => console.error("Error Data:", error));

        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

    }, []);

    const handleDonateClick = (id) => {
        if (!user) {
            navigate("/login");
        } else {
            navigate(`/donationdetails/${id}`);
        }
    };

    return (
        <div className='mt-24'>
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
                            <p className="text-sm text-black ">Division: {campaign.division}</p>
                            <button 
                                onClick={() => handleDonateClick(campaign.id)}
                                className="bg-blue-600 hover:bg-blue-300 hover:text-black text-white px-4 py-2 rounded-md mt-2 w-full"
                            >
                                Donate
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DonationCampaign;
