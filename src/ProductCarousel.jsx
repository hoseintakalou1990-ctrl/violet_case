import { Swiper, SwiperSlide,} from 'swiper/react';
import { Navigation,Autoplay} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import ProductCard from "./ProductCard";
import products from "./products";


const Carousel= ({ onAdd })=> {
  return (
    <div className=" max-w-full p-6">
      <Swiper
      modules={[Navigation,Autoplay]}
        pagination={{ clickable: true }}
         autoplay={{ delay: 2500, disableOnInteraction:false }}
        navigation
         breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 5 },
  }}   
       spaceBetween={10} slidesPerView={2 }>
        
   {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} onAdd={onAdd} />
          </SwiperSlide>
        ))}
          </Swiper>
    </div>
  );
}
export default Carousel