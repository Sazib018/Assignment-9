import React from 'react';
import { Package, CheckCircle, Users, Bell } from "lucide-react";

const Work = () => {
    const steps = [
        {
          icon: <Package size={40} className="text-blue-600" />, 
          title: "Donate Clothes",
          description: "Collect your unused but usable winter clothes and drop them off at our collection center or request a pickup.",
        },
        {
          icon: <CheckCircle size={40} className="text-green-600" />, 
          title: "Collection & Verification",
          description: "Our team collects and verifies the donated clothes to ensure they are safe and clean for the needy.",
        },
        {
          icon: <Users size={40} className="text-purple-600" />, 
          title: "Distribution",
          description: "The donated clothes are distributed to underprivileged people through specific campaigns.",
        },
        {
          icon: <Bell size={40} className="text-yellow-600" />, 
          title: "Updates & Acknowledgement",
          description: "You will receive updates on where your donation went, along with gratitude messages shared on our platform.",
        },
      ];
    return (
        <section className="py-16 mt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Work;
