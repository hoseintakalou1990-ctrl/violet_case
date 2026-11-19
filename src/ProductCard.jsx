
import React from "react";
import { FiShoppingCart, FiHeart, FiEye } from "react-icons/fi";

const ProductCard = ({ product }) => {
  const discountPrice = Math.round(
    product.price - (product.price * product.discount) / 100
  );

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 sm:p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      {/* تصویر محصول و لیبل تخفیف */}
      <div className="relative overflow-hidden rounded-xl">

        {product.discount > 0 && (
          <span className="absolute right-0 top-0 z-10 rounded-lg bg-red-500 px-2 py-1 sm:text-[13px] text-[10px] font-bold text-white">
            فروش ویژه
          </span>
        )}

        {/* دکمه های علاقه مندی و مشاهده */}
        <div className="absolute  left-3 top-3 z-10 flex flex-col gap-2">
          <button className="rounded-full bg-white p-2 text-gray-600 shadow hover:bg-red-500 hover:text-white">
            <FiHeart size={17} />
          </button>

          <button className="rounded-full bg-white p-2 text-gray-600 shadow hover:bg-blue-500 hover:text-white">
            <FiEye size={17} />
          </button>
        </div>

        <img
          src={product.image}
          alt={product.title}
          className="h-28 sm:h-52  w-full  object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* اطلاعات محصول */}
      <div className="mt-1">

        <span className="text-xs text-gray-400">
          {product.category}
        </span>

        <h3 className="mt-1 line-clamp-2 min-h-5 text-sm font-bold text-gray-800">
          {product.title}
        </h3>

        {/* قیمت ها */}
        <div className="mt-1">
          <div className="flex items-center justify-between">

            <span className="text-xs text-gray-400 line-through">
              {product.price.toLocaleString("fa-IR")} تومان
            </span>

            <span className="text-xs font-bold text-red-500">
              {product.discount}% تخفیف
            </span>
          </div>

          <div className="mt-1 text-lg font-extrabold text-gray-900">
            {discountPrice.toLocaleString("fa-IR")}
            <span className="mr-1 text-xs font-normal text-gray-500">
              تومان
            </span>
          </div>
        </div>

        {/* دکمه افزودن به سبد خرید */}
        <button
          className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-500 py-2 text-sm font-bold text-white transition hover:bg-violet-700 active:scale-95"
        >
          <FiShoppingCart size={18} />
          افزودن به سبد خرید
        </button>

      </div>
    </div>
  );
};

export default ProductCard;
