
import React from "react";
import { FiShoppingBag, FiTrash2, FiArrowLeft, FiShield } from "react-icons/fi";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
  // تبدیل اعداد به فارسی
  const faNumber = (number) =>
    Number(number).toLocaleString("fa-IR");

  // محاسبه قیمت با تخفیف
  const getDiscountPrice = (product) => {
    return Math.round(
      product.price - (product.price * (product.discount || 0)) / 100
    );
  };

  // محاسبه جمع کل
  const totalPrice = cart.reduce(
    (total, item) =>
      total + getDiscountPrice(item) * item.quantity,
    0
  );

  // محاسبه مجموع قیمت قبل از تخفیف
  const originalTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalDiscount = originalTotal - totalPrice;

  return (
    <div dir="rtl" className="min-h-screen bg-[#faf9fd] py-10 px-4 sm:px-6">

      <div className="mx-auto max-w-6xl">

        {/* عنوان صفحه */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2 text-violet-600">
            <FiShoppingBag size={22} />
            <span className="text-sm font-semibold">
              فروشگاه ویولت کیس
            </span>
          </div>

          <h1 className="text-2xl font-extrabold text-gray-800 sm:text-3xl">
            سبد خرید شما
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            محصولات انتخاب‌شده خود را بررسی کنید.
          </p>
        </div>

        {cart.length === 0 ? (

          /* سبد خرید خالی */
          <div className="rounded-3xl border border-violet-100 bg-white px-5 py-16 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-violet-50 text-violet-500">
              <FiShoppingBag size={42} />
            </div>

            <h2 className="text-xl font-bold text-gray-800">
              سبد خرید شما خالی است!
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              هنوز محصولی به سبد خرید اضافه نکرده‌اید.
            </p>

            <Link
              to="/"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-3 text-sm font-bold text-white transition hover:bg-violet-700"
            >
              مشاهده محصولات
              <FiArrowLeft />
            </Link>
          </div>

        ) : (

          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">

            {/* لیست محصولات */}
            <div className="space-y-4 lg:col-span-2">

              <div className="flex items-center justify-between rounded-2xl border border-violet-100 bg-white px-5 py-4">
                <span className="font-bold text-gray-800">
                  محصولات انتخاب‌شده
                </span>

                <span className="rounded-lg bg-violet-50 px-3 py-1 text-xs font-bold text-violet-700">
                  {faNumber(cart.length)} محصول
                </span>
              </div>

              {cart.map((item) => {
                const finalPrice = getDiscountPrice(item);

                return (
                  <div
                    key={item.id}
                    className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:border-violet-200 sm:flex-row sm:items-center"
                  >

                    {/* تصویر محصول */}
                    <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-xl bg-[#faf9fd] sm:h-28 sm:w-28">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain p-2"
                      />
                    </div>

                    {/* مشخصات محصول */}
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs text-gray-400">
                        دسته‌بندی: {item.category}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span className="text-base font-extrabold text-violet-700">
                          {faNumber(finalPrice)} تومان
                        </span>

                        {item.discount > 0 && (
                          <>
                            <span className="text-xs text-gray-400 line-through">
                              {faNumber(item.price)}
                            </span>

                            <span className="rounded-md bg-red-50 px-2 py-1 text-xs font-bold text-red-500">
                              {faNumber(item.discount)}٪ تخفیف
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* تعداد محصول */}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-3 sm:flex-col sm:items-end sm:border-0 sm:pt-0">
                      <span className="text-xs text-gray-400">
                        تعداد
                      </span>

                      <span className="rounded-lg bg-violet-50 px-4 py-2 text-sm font-bold text-violet-700">
                        {faNumber(item.quantity)}
                      </span>
                    </div>

                  </div>
                );
              })}

            </div>

            {/* خلاصه سفارش */}
            <div className="rounded-2xl border border-violet-100 bg-white p-5 shadow-sm lg:sticky lg:top-6">

              <h2 className="mb-6 text-lg font-extrabold text-gray-800">
                خلاصه سفارش
              </h2>

              <div className="space-y-4 text-sm">

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
                  <span>سود شما از تخفیف</span>
                  <span className="font-bold text-green-600">
                    {faNumber(totalDiscount)} تومان
                  </span>
                </div>

                <div className="border-t border-dashed border-gray-200 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-800">
                      مبلغ قابل پرداخت
                    </span>

                    <div className="text-left">
                      <div className="text-lg font-extrabold text-violet-700">
                        {faNumber(totalPrice)}
                      </div>
                      <span className="text-xs text-gray-400">
                        تومان
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              <button
                disabled
                className="mt-7 w-full cursor-not-allowed rounded-xl bg-violet-600 py-3.5 text-sm font-bold text-white opacity-70"
              >
                ادامه فرایند خرید
              </button>

              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400">
                <FiShield className="text-violet-500" size={16} />
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
