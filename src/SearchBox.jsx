import React, { useEffect, useRef, useState } from "react";

import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { IoArrowUpOutline } from "react-icons/io5";
import bannerSearch from "./assets/bannersearch.jpg";
const SearchBox = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const [isOpen, setIsOpen] = useState(false);

    const [recentSearches, setRecentSearches] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("recentSearches")) || [];
        } catch {
            return [];
        }
    });

    const searchRef = useRef(null);
    const boxRef = useRef(null);

    // پیشنهادهای ویژه
    const suggestions = [
        "قاب مگ سیف",
        "گلس گوشی",
        "شارژر سامسونگ",
        "کابل شارژ",
        "پاوربانک",
        "هندزفری",
    ];

    // ذخیره جستجوها
    useEffect(() => {
        localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
    }, [recentSearches]);

   

    // بستن با کلیک بیرون
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (boxRef.current && !boxRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    // انجام جستجو
    const handleSearch = (value) => {
        const searchValue = value.trim();

        if (!searchValue) return;

        setRecentSearches((prev) =>
            [searchValue, ...prev.filter((item) => item !== searchValue)].slice(
                0,
                8,
            ),
        );

        setSearch(searchValue);

        setIsOpen(false);

        onSearch?.(searchValue);
    };

    // حذف یک جستجو
    const removeSearch = (value) => {
        setRecentSearches((prev) => prev.filter((item) => item !== value));
    };

    // حذف تمام جستجوها
    const clearSearches = () => {
        setRecentSearches([]);
    };

    return (
        <div ref={boxRef} dir="rtl" className="relative w-full">
            {/* Search Input */}

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch(search);
                }}
                className={`relative z-20 flex items-center bg-white
                border border-gray-300 transition-all duration-300
                ${
                    isOpen
                        ? "rounded-t-xl border-violet-500 shadow-sm"
                        : "rounded-xl"
                }`}
            >
                <IoIosSearch
                    size={24}
                    className="absolute right-3 text-gray-500"
                />

                <input
                    ref={searchRef}
                    type="text"
                    value={search}
                    onFocus={() => setIsOpen(true)}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="جستجوی محصولات..."
                    className="w-full bg-transparent py-3 pr-11 pl-11 text-sm outline-none"
                />

                {search && (
                    <button
                        type="button"
                        onClick={() => setSearch("")}
                        className="absolute left-3 text-gray-400 hover:text-red-500"
                    >
                        <IoClose size={20} />
                    </button>
                )}
            </form>

            {/* Expandable Search Content */}

            <div
                className={`absolute right-0 top-full z-10 w-full
                overflow-hidden rounded-b-xl border border-t-0
                border-gray-200 bg-white shadow-xl
                transition-all duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                    isOpen
                        ? "max-h-[650px] opacity-100 translate-y-0 visible"
                        : "max-h-0 opacity-0 -translate-y-2 invisible"
                }`}
            >
                <div className="p-4 md:p-5">
                    {/* Recent Searches */}

                    <div className="mb-6">
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800">
                                <IoTimeOutline size={19} />
                                جستجوهای اخیر
                            </h3>

                            {recentSearches.length > 0 && (
                                <button
                                    type="button"
                                    onClick={clearSearches}
                                    className="text-xs text-red-500 hover:text-red-700"
                                >
                                    پاک کردن همه
                                </button>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {recentSearches.length > 0 ? (
                                recentSearches.map((item, index) => (
                                    <div
                                        key={`${item}-${index}`}
                                        className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 text-xs text-gray-600 transition hover:border-violet-400 hover:text-violet-700"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => handleSearch(item)}
                                        >
                                            {item}
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => removeSearch(item)}
                                            className="text-gray-400 hover:text-red-500"
                                            aria-label={`حذف ${item}`}
                                        >
                                            <IoClose size={16} />
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-xs text-gray-400">
                                    هنوز جستجویی انجام نداده‌اید.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Special Suggestions */}

                    <div className="mb-5">
                        <h3 className="mb-4 text-sm font-bold text-gray-800">
                            پیشنهادهای ویژه
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {suggestions.map((item, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => handleSearch(item)}
                                    className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 text-xs text-gray-600 transition hover:border-violet-500 hover:bg-violet-50 hover:text-violet-700"
                                >
                                    {item}

                                    <IoArrowUpOutline className="rotate-45" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Advertisement Banner */}

                    <a
                        href="/offers"
                        className="block overflow-hidden rounded-lg"
                    >
                        <img
                            src={bannerSearch}
                            alt="پیشنهاد ویژه فروشگاه"
                            className="w-full aspect-[4/1] object-cover object-fit-cover transition-transform duration-300 hover:scale-[1.02]"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SearchBox;
