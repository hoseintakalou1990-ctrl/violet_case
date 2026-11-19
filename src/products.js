
import ghab from"../src/assets/product/ghab.jpg"
import headphone from"../src/assets/product/headphone.webp"
import sharjer from"../src/assets/product/sharjer.jpg"
import power from"../src/assets/product/power.jpg"
import fandaki from"../src/assets/product/fandaki.webp"

const products = [
  {
    id: 1,
    title: "قاب  گوشی آیفون  سیلیکونی",
    category: "قاب و کاور",
    price: 850000,
    discount: 20,
    image:ghab,
  },
  {
    id: 2,
    title: "هدفون بی سیم ",
    category: "هندزفری و هدفون",
    price: 1200000,
    discount: 15,
    image: headphone,

  },
  {
    id: 3,
    title: "شارژر سریع موبایل",
    category: "شارژر و کابل",
    price: 650000,
    discount: 10,
    image: sharjer,
  },
  {
    id: 4,
    title: "پاوربانک ظرفیت بالا",
    category: "پاوربانک",
    price: 1800000,
    discount: 25,
    image:power,
  },
   {
    id: 5,
    title: "شارژر فندکی فوق سریع",
    category: "شارژر",
    price: 1600000,
    discount: 50,
    image: fandaki,
  },
];

export default products;
