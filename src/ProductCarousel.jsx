
import React, { useState, useEffect, useRef } from "react";

const products = [
  {
    id: 1,
    title: "قاب گوشی آیفون",
    price: "450,000",
    discount: "350,000",
    image: "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=500",
  },
  {
    id: 2,
    title: "شارژر سریع",
    price: "850,000",
    discount: "690,000",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
  },
  {
    id: 3,
    title: "هدفون بلوتوثی",
    price: "1,200,000",
    discount: "950,000",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 4,
    title: "پاوربانک",
    price: "1,500,000",
    discount: "1,200,000",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500",
  },
  {
    id: 5,
    title: "ساعت هوشمند",
    price: "2,500,000",
    discount: "2,100,000",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    id: 6,
    title: "اسپیکر بلوتوثی",
    price: "1,800,000",
    discount: "1,450,000",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
  },
  {
    id: 7,
    title: "گلس محافظ",
    price: "250,000",
    discount: "180,000",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
  },
  {
    id: 8,
    title: "هولدر موبایل",
    price: "550,000",
    discount: "420,000",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500",
  },
  {
    id: 9,
    title: "کابل شارژ",
    price: "300,000",
    discount: "220,000",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
  },
];

const GAP = 8;

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const viewportRef = useRef(null);

  const drag = useRef({
    startX: 0,
    currentX: 0,
    active: false,
    moved: false,
  });

  const maxSlide = Math.max(0, products.length - visibleItems);

  // Responsive
  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;

      if (width < 480) setVisibleItems(2);
      else if (width < 640) setVisibleItems(3);
      else if (width < 768) setVisibleItems(4);
      else if (width < 1024) setVisibleItems(5);
      else if (width < 1280) setVisibleItems(6);
      else setVisibleItems(7);
    };

    updateItems();
    window.addEventListener("resize", updateItems);

    return () => window.removeEventListener("resize", updateItems);
  }, []);

  useEffect(() => {
    setCurrentSlide((prev) => Math.min(prev, maxSlide));
  }, [maxSlide]);

  // Auto Play
  useEffect(() => {
    if (isHovered || isDragging || maxSlide === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev >= maxSlide ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, isDragging, maxSlide]);

  // Buttons
  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // Drag Start
  const handlePointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;

    drag.current = {
      startX: e.clientX,
      currentX: e.clientX,
      active: true,
      moved: false,
    };

    setIsDragging(true);
    setDragOffset(0);

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  // Drag Move
  const handlePointerMove = (e) => {
    if (!drag.current.active) return;

    const difference = e.clientX - drag.current.startX;

    drag.current.currentX = e.clientX;

    if (Math.abs(difference) > 5) {
      drag.current.moved = true;
    }

    setDragOffset(difference);
  };

  // Drag End
  const handlePointerUp = () => {
    if (!drag.current.active) return;

    const difference =
      drag.current.currentX - drag.current.startX;

    const threshold = 40;

    if (difference < -threshold) {
      nextSlide();
    } else if (difference > threshold) {
      prevSlide();
    }

    drag.current.active = false;

    setDragOffset(0);
    setIsDragging(false);
  };

  const handlePointerCancel = () => {
    drag.current.active = false;
    setDragOffset(0);
    setIsDragging(false);
  };

  // Track Movement
  const cardWidth = viewportRef.current
    ? viewportRef.current.clientWidth / visibleItems -
      (GAP * (visibleItems - 1)) / visibleItems
    : 0;

  const translateX =
    currentSlide * (cardWidth + GAP) - dragOffset;

  return (
    <section className="w-full py-6 sm:py-8" dir="rtl">

      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5 px-2">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          محصولات پرفروش
        </h2>

        <a href="#" className="text-xs sm:text-sm text-purple-600">
          مشاهده همه
        </a>
      </div>

      {/* Carousel */}
      <div className="relative">

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-20
          w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white shadow-lg
          flex items-center justify-center text-xl sm:text-2xl
          transition-all duration-300
          ${
            currentSlide === 0
              ? "opacity-30 scale-90 cursor-not-allowed"
              : "opacity-100 scale-100 hover:scale-110"
          }`}
          aria-label="محصول قبلی"
        >
          ›
        </button>

        {/* Viewport */}
        <div
          ref={viewportRef}
          className="overflow-hidden mx-9 sm:mx-12 touch-pan-y select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          {/* Track */}
          <div
            className="flex gap-2"
            dir="ltr"
            style={{
              transform: `translateX(-${translateX}px)`,
              transition: isDragging
                ? "none"
                : "transform 500ms ease",
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                dir="rtl"
                className="shrink-0"
                style={{
                  width: `calc((100% - ${
                    GAP * (visibleItems - 1)
                  }px) / ${visibleItems})`,
                }}
              >
                {/* Product Card */}
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">

                  {/* Image */}
                  <div className="relative aspect-[4/3] sm:aspect-square bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.title}
                      draggable="false"
                      className="w-full h-full object-cover pointer-events-none"
                    />

                    <span className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 bg-red-500 text-white text-[9px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">
                      تخفیف
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-1.5 sm:p-3">

                    <h3 className="text-[10px] sm:text-sm font-semibold text-gray-800 truncate">
                      {product.title}
                    </h3>

                    {/* Price */}
                    <div className="mt-1.5 sm:mt-3">
                      <p className="text-[9px] sm:text-xs text-gray-400 line-through">
                        {product.price} تومان
                      </p>

                      <p className="text-[10px] sm:text-sm font-bold text-purple-700 mt-0.5 sm:mt-1">
                        {product.discount} تومان
                      </p>
                    </div>

                    {/* Add To Cart */}
                    <button
                      type="button"
                      onPointerDown={(e) => e.stopPropagation()}
                      className="w-full mt-2 sm:mt-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md sm:rounded-lg py-1.5 sm:py-2 text-[10px] sm:text-xs transition-colors"
                    >
                      افزودن به سبد خرید
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          disabled={currentSlide === maxSlide}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-20
          w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white shadow-lg
          flex items-center justify-center text-xl sm:text-2xl
          transition-all duration-300
          ${
            currentSlide === maxSlide
              ? "opacity-30 scale-90 cursor-not-allowed"
              : "opacity-100 scale-100 hover:scale-110"
          }`}
          aria-label="محصول بعدی"
        >
          ‹
        </button>

      </div>
    </section>
  );
};

export default ProductCarousel;
