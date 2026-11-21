
import React from "react";
import { useParams } from "react-router-dom";
import { cases } from "./products";

const Category = ({ onAdd }) => {
  const { categoryId } = useParams();

  const selectedProducts = cases.filter(
    (product) => product.categoryId === Number(categoryId)
  );

  return (
    <div dir="rtl" className="p-5">

      <h1 className="text-2xl font-bold text-violet-700 mb-5">
        محصولات قاب و کاور
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">

        {selectedProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-xl p-2 hover:shadow-md transition"
          >

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-28 object-contain"
            />

            <h2 className="mt-2 text-sm font-bold">
              {product.title}
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              {product.price.toLocaleString("fa-IR")} تومان
            </p>

            <button
              onClick={() => onAdd(product)}
              className="mt-3 flex items-center gap-2 text-xs text-violet-700 hover:text-violet-900"
            >

              <span className="w-6 h-6 shrink-0 rounded-full bg-violet-600 text-white flex items-center justify-center text-lg hover:bg-violet-800 transition">
                +
              </span>

              افزودن به سبد خرید

            </button>

          </div>
        ))}

      </div>

      {selectedProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          محصولی در این دسته‌بندی وجود ندارد.
        </p>
      )}

    </div>
  );
};

export default Category;
