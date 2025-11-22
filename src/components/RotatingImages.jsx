import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function RotatingImages() {
  const images = ["./assets/images/future/animalBones.jpeg", "./assets/images/future/bergBygdekvinnelag.jpeg", "./assets/images/future/gipsStatue1.jpeg", "./assets/images/future/gipsStatue2.jpeg", "./assets/images/future/openDisplay.jpeg", "./assets/images/future/womanWithSkull.jpeg",];

  return (
    <Swiper
      modules={[Navigation]}
      navigation={true}  
      loop={true}        
      autoplay={false} 
      className="w-full h-[600px] rounded-xl"
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <img
            src={src}
            className="w-full h-full object-cover rounded-xl"
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
