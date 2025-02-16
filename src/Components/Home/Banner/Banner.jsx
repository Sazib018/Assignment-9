import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const BannerSlider = () => {
  const slides = [
    { id: 1, img: "https://i.ibb.co/CKsMzZXM/download.jpg", text: 'Spread Warmth This Winter – Donate Today!' },
    { id: 2, img: "https://i.ibb.co/qLyyyHdv/images-1.jpg", text: 'Your Old Clothes Can Make a Difference!' },
    { id: 3, img: "https://i.ibb.co/3yLrZ5zD/images.jpg", text: 'Join Hands to Help Those in Need!' },
  ];
  
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      className="w-full h-full"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-[550px] mt-5">
            <img
              src={slide.img}
              alt="Winter Donation Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                {slide.text}
              </h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
