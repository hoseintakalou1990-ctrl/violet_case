
import React from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryId } = useParams();

  return (
    <div dir="rtl" className="p-5">
      {categoryId === "1" ? (
        <h1 className="text-2xl font-bold text-violet-700">
          این صفحه مربوط به قاب‌هاست
        </h1>
      ) : (
        <h1>صفحه این دسته‌بندی</h1>
      )}
    </div>
  );
};

export default Category;
