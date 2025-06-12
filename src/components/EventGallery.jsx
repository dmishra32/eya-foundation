import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EventGallery = () => {
  const images = [
    "https://picsum.photos/id/1018/600/400", 
    "https://picsum.photos/id/1015/600/400", 
    "https://picsum.photos/id/1019/600/400", 
    "https://picsum.photos/id/1020/600/400" 
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#0F4C81] mb-8">Event Gallery</h2>
        <Slider {...settings}>
          {images.map((img, i) => (
            <div key={i} className="px-2">
              <img src={img} alt={`Event ${i+1}`} className="w-full h-48 object-cover rounded shadow" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default EventGallery;