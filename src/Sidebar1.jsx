
import { IoIosCloseCircle } from "react-icons/io";
import { navLinks } from "./navLinks";
import logo from "./assets/violetlogo.png";

function SideBar1({isOpen,onClose}){
    return(
    <>
    <div
    onClick={onClose}
    className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
        isOpen? "opacity-50":"pointer-events-none opacity-0"} 
         `}
    />
    {/* خوده ساید بار */}
    <aside className={` fixed right-0 top-17.5 bottom-0 z-50 h-full w-64 bg-white px-5 pt-16 shadow-lg transition-transform duration-300 md:hidden
    ${isOpen?"translate-x-0":"translate-x-full"}`} 
    >
        <img className="absolute right-4  top-0 w-25" src={logo} alt="" />
        <button onClick={onClose} className="absolute left-4 top-4 text-[25px] text-gray-500 cursor-pointer">
            <IoIosCloseCircle />
        </button>
        <ul className="mt-4">
            
        
            {
                navLinks.map(link=>(
                    <li className="border-b  last:border-b-0 border-gray-200" key={link.id}>
                        <a
                         href={link.href}
                         onClick={onClose}
                         className="flex gap-1 items-center  py-3 text-gray-800 hover:text-blue-600"
                         >
                            {link.icon}
                            {link.title}</a>
                    </li>
                ))
            }
        </ul>


    </aside>
    
    
    
    
    </>
    )
}
export default SideBar1