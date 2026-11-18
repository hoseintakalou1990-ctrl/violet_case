
import React, { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    title: "قاب سیلیکونی آیفون",
    price: 450000,
    discount: 15,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=400",
  },
  {
    id: 2,
    title: "هدفون بلوتوثی",
    price: 1250000,
    discount: 10,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
  },
  {
    id: 3,
    title: "شارژر سریع",
    price: 850000,
    discount: 20,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
  },
  {
    id: 4,
    title: "ساعت هوشمند",
    price: 2200000,
    discount: 12,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
  },
  {
    id: 5,
    title: "اسپیکر بلوتوثی",
    price: 1750000,
    discount: 8,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
  },
  {
    id: 6,
    title: "گوشی موبایل",
    price: 650000,
    discount: 5,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
  },
  {
    id: 7,
    title: "پاوربانک",
    price: 980000,
    discount: 10,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
  },
  {
    id: 8,
    title: "کیبورد بی سیم",
    price: 1150000,
    discount: 12,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
  },
  {
    id: 9,
    title: "ماوس بی سیم",
    price: 550000,
    discount: 7,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
  },
  {
    id: 10,
    title: "هدفون رو گوشی",
    price: 1450000,
    discount: 15,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400",
  },
];

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleItems, setVisibleItems] = useState(7);

  // Responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(3);
      } else if (window.innerWidth < 768) {
        setVisibleItems(4);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(5);
      } else if (window.innerWidth < 1280) {
        setVisibleItems(6);
      } else {
        setVisibleItems(7);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const gap = 8;

  const maxSlide = Math.max(
    0,
    products.length - visibleItems
  );

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      Math.min(prev + 1, maxSlide)
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      Math.max(prev - 1, 0)
    );
  };

  useEffect(() => {
    setCurrentSlide((prev) =>
      Math.min(prev, maxSlide)
    );
  }, [maxSlide]);

  return (
    <section className="w-full px-3 md:px-5 py-6" dir="rtl">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">

        <h2 className="text-base md:text-lg font-bold text-gray-800">
          جدیدترین محصولات
        </h2>

        <div className="flex gap-1.5">

          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-100 hover:bg-purple-100 disabled:opacity-30 transition"
          >
            ❯
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide >= maxSlide}
            className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-100 hover:bg-purple-100 disabled:opacity-30 transition"
          >
            ❮
          </button>

        </div>
      </div>

      {/* Carousel Container */}
      <div className="overflow-hidden">

        {/* Track */}
        <div
          className="flex gap-2 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(${currentSlide} * (100% + ${gap}px) / ${visibleItems}))`,
          }}
        >

          {products.map((product) => {

            const finalPrice =
              product.price -
              (product.price * product.discount) / 100;

            return (
              <div
                key={product.id}
                className="shrink-0 border border-gray-200 rounded-lg p-1.5"
                style={{
                  width: `calc((100% - ${(visibleItems - 1) * gap}px) / ${visibleItems})`,
                }}
              >

                {/* Image */}
                <div className="relative overflow-hidden rounded-md bg-gray-100">

                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
                  />

                  <span className="absolute top-1 right-1 bg-red-500 text-white text-[9px] md:text-[10px] px-1.5 py-0.5 rounded">
                    {product.discount}٪
                  </span>

                </div>

                {/* Product Info */}
                <div className="mt-2">

                  <h3 className="text-[10px] md:text-xs font-bold text-gray-800 truncate">
                    {product.title}
                  </h3>

                  <div className="mt-2">

                    <p className="text-[9px] md:text-[10px] text-gray-400 line-through">
                      {product.price.toLocaleString("fa-IR")}
                    </p>

                    <p className="text-[10px] md:text-xs font-bold text-purple-700 mt-1">
                      {finalPrice.toLocaleString("fa-IR")}
                    </p>

                  </div>

                  <button className="w-full mt-2 bg-purple-700 hover:bg-purple-800 text-white rounded-md py-1.5 text-[9px] md:text-[10px] transition">
                    افزودن به سبد
                  </button>

                </div>

              </div>
            );
          })}

        </div>
      </div>

    </section>
  );
};

export default ProductCarousel;
