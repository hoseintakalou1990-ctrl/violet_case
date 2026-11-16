import React from "react";
import {
  FiSmartphone,
  FiShield,
  FiZap,
  FiLink,
  FiHeadphones,
  FiBattery,
  FiMapPin,
} from "react-icons/fi";

const categories = [
  { id: 1, title: "قاب و کاور", icon: FiSmartphone, href: "/" },
  { id: 2, title: "گلس گوشی", icon: FiShield, href: "/" },
  { id: 3, title: "شارژر", icon: FiZap, href: "/" },
  { id: 4, title: "کابل و مبدل", icon: FiLink, href: "/" },
  { id: 5, title: "هندزفری", icon: FiHeadphones, href: "/" },
  { id: 6, title: "پاوربانک", icon: FiBattery, href: "/" },
  { id: 7, title: "هولدر", icon: FiMapPin, href: "/" },
];

const Categories = () => {
  return (
    <section dir="rtl" className="w-full px-3 sm:px-5 py-1 relative sm:static ">
      <div className=" p-2 flex flex-nowrap overflow-x-auto gap-3 sm:gap-6 md:gap-15 sm:justify-center justify-around border border-gray-300 shadow-lg rounded-2xl p-1 -mt-4  sm:mt-0 bg-gray-100 sm:border-0 sm:shadow-none sm:p-2 sm:static sm:bg-white">
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <a
              href={item.href}
              key={item.id}
              className="flex flex-col items-center justify-center gap-2 shrink-0 group"
            >
              <div className=" w-13 h-12 md:w-20 md:h-20 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors flex items-center justify-center">
                <Icon className="text-purple-700 text-2xl md:text-4xl" />
              </div>

              <span className="text-[10px] sm:text-[15px] text-center whitespace-nowrap  text-gray-700">
                {item.title}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;