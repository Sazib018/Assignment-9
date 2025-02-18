import React from 'react';
import { FaHandsHelping, FaBoxOpen, FaTshirt, FaUsers, FaGift, FaSmile } from "react-icons/fa";

const activities = [
    { id: 1, title: "Collection Drives", description: "Gathering warm clothes from donors.", icon: <FaTshirt className='text-4xl text-blue-600' /> },
    { id: 2, title: "Sorting & Packing", description: "Organizing and packing clothes for distribution.", icon: <FaBoxOpen className='text-4xl text-green-600' /> },
    { id: 3, title: "Distribution Events", description: "Delivering clothes to people in need.", icon: <FaGift className='text-4xl text-red-600' /> },
    { id: 4, title: "Volunteer Engagement", description: "Involving volunteers in the donation process.", icon: <FaUsers className='text-4xl text-yellow-600' /> },
    { id: 5, title: "Community Outreach", description: "Spreading awareness and expanding our impact.", icon: <FaHandsHelping className='text-4xl text-purple-600' /> },
    { id: 6, title: "Support & Smiles", description: "Bringing joy and warmth to those in need.", icon: <FaSmile className='text-4xl text-orange-600' /> },
  ];

const RecentDonations = () => {
    return (
        <section className="py-12 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Activities</h2>
          <p className="text-gray-600 mb-8">We are committed to ensuring warmth for everyone this winter through our dedicated activities.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <div key={activity.id} className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center transition transform hover:scale-105">
                {activity.icon}
                <h3 className="text-xl font-semibold text-gray-700 mt-4">{activity.title}</h3>
                <p className="text-gray-600 mt-2">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default RecentDonations;
