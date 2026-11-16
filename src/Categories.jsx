
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
  { id: 1, title: "قاب و کاور", icon: FiSmartphone },
  { id: 2, title: "گلس گوشی", icon: FiShield },
  { id: 3, title: "شارژر", icon: FiZap },
  { id: 4, title: "کابل و مبدل", icon: FiLink },
  { id: 5, title: "هندزفری", icon: FiHeadphones },
  { id: 6, title: "پاوربانک", icon: FiBattery },
  { id: 7, title: "هولدر", icon: FiMapPin },
];

const Categories = () => {
  return (
      <section className="w-full px-3 sm:px-5 py-6">

    <h2 className="text-lg font-bold text-gray-800 mb-5  text-center">
      دسته‌بندی محصولات
    </h2>

    <div className="flex flex-nowrap overflow-x-auto gap-0 sm:grid sm:grid-cols-7">

  {categories.map((item) => {
    const Icon = item.icon;

    return (
      <a
        href="/"
        key={item.id}
        className="flex flex-col items-center justify-center gap-2
        min-w-[75px] shrink-0 group
        sm:min-w-0"
      >
        <div className="w-12 h-12 sm:w-10 sm:h-10 md:w-20 md:h-20 rounded-full bg-purple-50 flex items-center justify-center">
          <Icon className="text-purple-700 text-2xl" />
        </div>

        <span className="text-[10px] text-center whitespace-nowrap font-medium text-gray-700">
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
