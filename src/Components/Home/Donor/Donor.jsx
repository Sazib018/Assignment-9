import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const donors = [
    { id: 1, name: "John Doe", amount: "$50", image: "https://i.ibb.co.com/M5RLz7qN/3.jpg" },
    { id: 2, name: "Jane Smith", amount: "$75", image: "https://i.ibb.co.com/chwn4YhM/1.jpg" },
    { id: 3, name: "Alex Johnson", amount: "$100", image: "https://i.ibb.co.com/nqjKJ0nw/2.jpg" },
    { id: 4, name: "Emma Brown", amount: "$120", image: "https://i.ibb.co.com/q3CVsnhq/4.jpg" }
  ];

const Donor = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    return (
        <div className="w-full p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Our Generous Donors</h2>
        <Slider {...settings}>
          {donors.map((donor) => (
            <div key={donor.id} className="p-4">
              <div className="bg-blue-100 rounded-lg shadow-lg p-6 text-center">
                <img src={donor.image} alt={donor.name} className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
                <h3 className="text-lg font-semibold">{donor.name}</h3>
                <p className="text-gray-600"><span className='text-blue-700'>Donated:</span> {donor.amount} (USDT)</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
};

export default Donor;
