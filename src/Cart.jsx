
import React from "react";
import { FiShoppingBag, FiArrowLeft, FiShield } from "react-icons/fi";
import { Link } from "react-router-dom";
import violetLogo from "./assets/violetlogo.png";

const Cart = ({ cart }) => {
  const faNumber = (number) =>
    Number(number).toLocaleString("fa-IR");

  const getDiscountPrice = (product) =>
    Math.round(
      product.price - (product.price * (product.discount || 0)) / 100
    );

  const totalPrice = cart.reduce(
    (total, item) =>
      total + getDiscountPrice(item) * item.quantity,
    0
  );

  const originalTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalDiscount = originalTotal - totalPrice;

  return (
    <div dir="rtl" className="min-h-screen bg-[#faf9fd] px-3 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-6xl">

  {/* Header */}
<div className="mb-6 sm:mb-8">

  <div className="mb-5 flex items-end gap-2 text-violet-600">

    <FiShoppingBag size={20} className="shrink-0" />

    <div className="flex flex-col items-center justify-center">
       <img
      className="h-[45px] w-[45px] shrink-0 object-contain"
      src={violetLogo}
      alt="Violet Case"
    />
      <span className="text-xs font-semibold sm:text-sm">
        Violet Case
      </span>

      <span className="text-[10px] leading-none text-gray-800">
        MOBILE ACCESSORIES
      </span>
    </div>

   

  </div>

  <h1 className="text-xl font-extrabold text-gray-800 sm:text-3xl">
    سبد خرید
  </h1>

  <p className="mt-1 text-xs text-gray-400 sm:text-sm">
    محصولات انتخاب‌شده خود را بررسی کنید.
  </p>

</div>

        {cart.length === 0 ? (
          <div className="rounded-2xl border border-violet-100 bg-white px-4 py-14 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-violet-50 text-violet-500">
              <FiShoppingBag size={35} />
            </div>

            <h2 className="text-lg font-bold text-gray-800">
              سبد خرید شما خالی است
            </h2>

            <p className="mt-2 text-xs text-gray-400 sm:text-sm">
              هنوز محصولی به سبد خرید اضافه نکرده‌اید.
            </p>

            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-xs font-bold text-white transition hover:bg-violet-700 sm:text-sm"
            >
              مشاهده محصولات
              <FiArrowLeft />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-6">

            {/* Products */}
            <div className="space-y-3 lg:col-span-2">

              <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white px-4 py-3">
                <span className="text-sm font-bold text-gray-800">
                  محصولات سبد خرید
                </span>

                <span className="rounded-lg bg-violet-50 px-2.5 py-1 text-[11px] font-bold text-violet-700">
                  {faNumber(cart.length)} محصول
                </span>
              </div>

              {cart.map((item) => {
                const finalPrice = getDiscountPrice(item);

                return (
                  <div
                    key={item.id}
                    className="flex gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-[0_2px_12px_rgba(0,0,0,0.025)] transition hover:border-violet-100 sm:gap-4 sm:p-4"
                  >
                    {/* Product image */}
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl  sm:h-28 sm:w-28">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain p-2"
                      />
                    </div>

                    {/* Product info */}
                    <div className="flex min-w-0 flex-1 flex-col justify-between py-1">

                      <div>
                        <h3 className="line-clamp-2 text-xs font-bold leading-6 text-gray-800 sm:text-sm">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">
                          {item.category}
                        </p>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">

                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-extrabold text-violet-700 sm:text-base">
                            {faNumber(finalPrice)}
                            <span className="mr-1 text-[10px] font-normal text-gray-400">
                              تومان
                            </span>
                          </span>

                          {item.discount > 0 && (
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] text-gray-400 line-through">
                                {faNumber(item.price)}
                              </span>

                              <span className="rounded bg-red-50 px-1.5 py-0.5 text-[9px] font-bold text-red-500">
                                {faNumber(item.discount)}٪ تخفیف
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-2 rounded-lg bg-violet-50 px-2.5 py-1.5">
                          <span className="text-[10px] text-gray-500">
                            تعداد:
                          </span>
                          <span className="text-xs font-bold text-violet-700">
                            {faNumber(item.quantity)}
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order summary */}
            <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5 lg:sticky lg:top-6">

              <h2 className="mb-5 text-sm font-extrabold text-gray-800 sm:text-base">
                خلاصه سفارش
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">

                <div className="flex justify-between text-gray-500">
                  <span>تعداد محصولات</span>
                  <span className="font-semibold text-gray-700">
                    {faNumber(cart.length)}
                  </span>
                </div>

                <div className="flex justify-between text-gray-500">
                  <span>قیمت کالاها</span>
                  <span className="font-semibold text-gray-700">
                    {faNumber(originalTotal)} تومان
                  </span>
                </div>

                <div className="flex justify-between text-gray-500">
                  <span>تخفیف</span>
                  <span className="font-bold text-green-600">
                    {faNumber(totalDiscount)} تومان
                  </span>
                </div>

                <div className="border-t border-dashed border-gray-200 pt-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-gray-800">
                      مبلغ قابل پرداخت
                    </span>

                    <div className="text-left">
                      <div className="text-base font-extrabold text-violet-700 sm:text-lg">
                        {faNumber(totalPrice)}
                      </div>
                      <span className="text-[10px] text-gray-400">
                        تومان
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                disabled
                className="mt-5 w-full cursor-not-allowed rounded-xl bg-violet-600 py-3 text-xs font-bold text-white opacity-70 transition sm:text-sm"
              >
                ادامه فرایند خرید
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-gray-400 sm:text-xs">
                <FiShield className="text-violet-500" size={15} />
                خریدی مطمئن و آسان
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
