import React from "react";

import glass from "../src/assets/icon/glass.svg"
import charger from "../src/assets/icon/charger.svg"
import ghab from "../src/assets/icon/ghab.svg"
import cable from "../src/assets/icon/cable.svg"
import hands from "../src/assets/icon/hands.svg"
import power from "../src/assets/icon/power.svg"
import holder from "../src/assets/icon/holder.svg"
const categories = [
  { id: 1, title: "قاب و کاور", icon:ghab , href: "/" },
  { id: 2, title: "گلس گوشی", icon: glass , href: "/" },
  { id: 3, title: "شارژر", icon: charger, href: "/" },
  { id: 4, title: "کابل و مبدل", icon:cable , href: "/" },
  { id: 5, title: "هدفون و هندزفری", icon: hands, href: "/" },
  { id: 6, title: "پاوربانک", icon: power, href: "/" },
  { id: 7, title: "هولدر", icon: holder, href: "/" },
];

const Categories = () => {
  return (
    <section dir="rtl" className="w-full px-3 sm:px-5 py-1 relative sm:static ">
      <div className=" p-2 flex flex-nowrap overflow-x-auto gap-3 sm:gap-6 md:gap-15 sm:justify-center justify-around border border-gray-300 shadow-lg rounded-2xl p-1 -mt-4  sm:mt-0 bg-gray-100 sm:border-0 sm:shadow-none sm:p-2 sm:static sm:bg-white">
        {categories.map((item) => {

          return (
            <a
              href={item.href}
              key={item.id}
              className="flex flex-col items-center justify-center gap-2 shrink-0 group"
            >
              <div className=" w-13 h-12 md:w-20 md:h-20 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors flex items-center justify-center">
                 <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 md:w-15 md:h-15 object-contain"
              />
              </div>

              <span className="text-[10px] sm:text-[15px] text-center whitespace-nowrap  text-violet-700-700">
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