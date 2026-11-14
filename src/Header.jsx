
import React, { useState } from "react";
import persianDigits from "./ChangeNumber";
import { RiInstagramLine, RiTelegramLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";

import Sidebar from "./Sidebar1";
import SearchBox from "./SearchBox";
import violetLogo from "./assets/violetlogo.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header dir="rtl" className="w-full">

            {/* Header Top */}
            <div className="bg-gradient-to-r from-violet-700 via-fuchsia-400 to-violet-700 text-white">

                <div className="flex items-center justify-between px-3 py-3 md:px-6 ">

                    <div className="flex flex-col items-center justify-center text-white ">
                        <span className="text-[12px] sm:text-base">ارسال رایگان برای سفارشات بالای {persianDigits(10)} میلیون تومان</span>

                        <div className="sm:hidden sm:flex items-center gap-2 justify-center">
                           

                            <span className="text-sm lg:text-base flex gap-2 mt-2">
                                 <BiSupport size={20} />
                                پشتیبانی: {persianDigits("09352838028")}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mr-auto md:mr-0">

                        <div className="hidden sm:flex items-center gap-2">
                            <BiSupport size={23} />

                            <span className="text-sm lg:text-base">
                                پشتیبانی: {persianDigits("09352838028")}
                            </span>
                        </div>

                        <div className="flex items-center gap-3 text-xl">

                            <a href="#" aria-label="Instagram">
                                <RiInstagramLine />
                            </a>

                            <a href="#" aria-label="WhatsApp">
                                <FaWhatsapp />
                            </a>

                            <a href="#" aria-label="Telegram">
                                <RiTelegramLine />
                            </a>

                        </div>

                    </div>

                </div>

            </div>


            {/* Header Center */}
            <div className="bg-white shadow-sm">

                <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-3 md:px-6 lg:flex-nowrap lg:gap-6">

                    {/* Logo + Hamburger */}
                    <div className="order-1 flex h-12 shrink-0 items-center gap-3">

                        <button
                            type="button"
                            aria-label="باز کردن منو"
                            onClick={() => setIsOpen(true)}
                            className="cursor-pointer text-2xl text-gray-700 md:hidden"
                        >
                            <RxHamburgerMenu />
                        </button>

                        <a
                            href="/"
                            className="flex h-full items-center"
                        >
                            <img
                                src={violetLogo}
                                alt="Violet Case"
                                className="block h-20 w-auto max-w-[2200px] object-contain "
                            />
                                  <span className="text-gray-800 font-semibold text-[30px] mt-5 ms-2 violet-shine">VIOLET CASE</span>
                            
                        </a>

                    </div>


                    {/* Search */}
                    <div className="order-3 relative w-full lg:order-2 lg:w-[400px] lg:flex-1 lg:max-w-[400px]">

                        <SearchBox />

                    </div>


                    {/* User Actions */}
                    <div className="order-2 flex shrink-0 items-center gap-3 md:gap-5">

                        <button className="flex flex-col items-center gap-1 cursor-pointer">

                            <AiOutlineUser className="text-xl md:text-2xl text-violet-700" />

                            <span className="hidden sm:block text-xs md:text-sm">
                                حساب کاربری
                            </span>

                        </button>

                        <button className="flex flex-col items-center gap-1 cursor-pointer">

                            <MdFavoriteBorder className="text-xl md:text-2xl text-violet-700" />

                            <span className="hidden sm:block text-xs md:text-sm">
                                علاقه‌مندی‌ها
                            </span>

                        </button>

                        <button className="flex flex-col items-center gap-1 cursor-pointer">

                            <SlBasket className="text-xl md:text-2xl text-violet-700" />

                            <span className="hidden sm:block text-xs md:text-sm">
                                سبد خرید
                            </span>

                        </button>

                    </div>

                </div>

            </div>


            {/* Desktop Navigation */}
            <nav className="hidden bg-violet-600 text-white md:block">

                <div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap px-4 py-3 text-sm md:justify-center md:gap-10 md:text-base">

                    <a href="/" className="hover:text-yellow-200 transition">
                        صفحه اصلی
                    </a>

                    <a href="/products" className="hover:text-yellow-200 transition">
                        فروشگاه
                    </a>

                    <a href="/categories" className="hover:text-yellow-200 transition">
                        دسته‌بندی محصولات
                    </a>

                    <a href="/offers" className="hover:text-yellow-200 transition">
                        تخفیف‌ها
                    </a>

                    <a href="/about" className="hover:text-yellow-200 transition">
                        درباره ما
                    </a>

                    <a href="/contact" className="hover:text-yellow-200 transition">
                        تماس با ما
                    </a>

                </div>

            </nav>


            {/* Mobile Sidebar */}
            <Sidebar
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />

        </header>
    );
};

export default Header;
