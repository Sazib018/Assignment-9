import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Navbar from '../Common/Navbar/Navbar';
import Footer from '../Common/Footer/Footer';

const Home = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
            <div className="max-w-[1150px] mx-auto p-4">
      {/* Banner/Slider Section */}
      <section>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="rounded-2xl shadow-lg"
        >
          <SwiperSlide>
            <img src="https://i.ibb.co.com/Lj9MNP9/images-1.jpg"  alt="Winter Donation Campaign 1" className="w-full h-full object-cover rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co.com/t5hFSrN/download.jpg"  alt="Winter Donation Campaign 2" className="w-full h-full object-cover rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co.com/yF5LTyT0/images.jpg"  alt="Winter Donation Campaign 3" className="w-full h-full object-cover rounded-2xl" />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* About Section */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-blue-700">About Us</h2>
        <p className="mt-4 text-gray-700">Our mission is to bring warmth to the cold. You can easily donate your unwanted winter clothes and help our collection reach the underprivileged.It is important to wear winter clothes to help prevent hypothermia. Winter clothes can also help to protect you from the elements, such as wind, rain, and snow. This is important because exposure to the elements can make you feel colder and can also lead to health problems.</p>
      </section>

      {/* It Works Section */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-blue-700">How does it work?</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">1.Donate</h3>
            <p className="text-gray-600">Drop off your old or new winter clothing at our collection point.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">2.Collection point</h3>
            <p className="text-gray-600">Donate winter clothes by visiting our various collection points.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">3. Support areas</h3>
            <p className="text-gray-600">We deliver to Dhaka, Chittagong, Rajshahi and other departments.</p>
          </div>
        </div>
      </section>

       {/* Extra Section: Testimonials:01 */}
       <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-blue-700">Donor Testimonials</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <p className="text-gray-600 ">"I donated my old winter clothes, and it truly helped those in need. A fantastic initiative!"</p>
            <h4 className="mt-4 font-semibold">- Rafi Ahmed</h4>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <p className="text-gray-600 ">"It feels great to help those suffering in the cold. I will contribute every year!"</p>
            <h4 className="mt-4 font-semibold">- Nusrat Jahan</h4>
          </div>
        </div>
      </section>

      {/* Extra Section: Recent Donations:02 */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-blue-700">Recent Donations</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">100+ Winter Clothes</h3>
            <p className="text-gray-600">Recently distributed in Dhaka.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">70+ Winter Clothes</h3>
            <p className="text-gray-600">Recently distributed in Rajshahi.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">50+ Winter Clothes</h3>
            <p className="text-gray-600">Recently distributed in Chattogram.</p>
          </div>
        </div>
      </section>

    </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;