import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
    const navItems = ['Home', 'About Me', 'Contact']
    const [toggle,setToggle] = useState(false)
  return (
    <div className="py-8 px-7 md:px-16 flex justify-between items-center flex-wrap bg-linear-to-r from-[#142431] via-[#1d2a3b] to-[#21334b]">
        <div className="logo"><h1 className="text-xl font-bold text-white">SaulDesign</h1></div>
        <button className="md:hidden text-2xl text-[#FFF]" onClick={() => {setToggle(!toggle)}}> {toggle? <IoClose />:<IoMenu />}</button>
        <nav className={` ${toggle?"flex": "hidden"} md:flex w-full md:w-auto mt-5 md:mt-0`}>
            <ul className="flex flex-col md:flex-row gap-3 md:gap-12">
                {navItems.map((item, i)=> {
                    return(<li key={i} className="text-white text-base hover:text-[#bdbdbd]">{item}</li>)
                })}
            </ul>
        </nav>
        
    </div>
  )
}

export default Header