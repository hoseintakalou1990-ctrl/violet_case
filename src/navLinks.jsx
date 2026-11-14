import { IoHome } from "react-icons/io5";
import { FaShop } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { TbRosetteDiscount } from "react-icons/tb";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { MdPhoneCallback } from "react-icons/md";




export const navLinks = [
  { id: 1, title: "صفحه اصلی", href: "/",icon:<IoHome  />  },
  { id: 2, title: "فروشگاه", href: "/products",icon:<FaShop  />  },
  { id: 3, title: "دسته‌بندی محصولات", href: "/categories",icon:<BiCategory  /> },
  { id: 4, title: "تخفیف‌ها", href: "/offers",icon:<TbRosetteDiscount   /> },
  { id: 5, title: "درباره ما", href: "/about",icon:<MdOutlineRoundaboutLeft   /> },
  { id: 6, title: "تماس با ما", href: "/contact",icon:<MdPhoneCallback  /> },
];