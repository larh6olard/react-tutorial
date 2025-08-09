import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { RiMenuFold3Line } from "react-icons/ri";
import { RiMenuFold4Line } from "react-icons/ri";

const Explore = () => {
  const [toggle, setToggle] = useState(false)
  const [menu, setMenu] = useState(false)

  const updateMenu = () => {
    setMenu(!menu)
  }
  

  // const updateToggle = () => {
  //   setToggle(!toggle)
  // }

  return (
    <div>
      <div className='bg-blue-300 h-[450px]'>
        <h1 className='text-center font-semibold pt-42 text-7xl'>Explore Prime Products</h1>
      </div>
      <div className="h-[70px] m-3">
        <button
          className={`border border-gray-400 w-28 h-13.5 rounded-full relative cursor-pointer transition-all ${toggle ? "bg-blue-700" : "bg-gray-300"}`}
          onClick={() => setToggle(!toggle)}
        >
          <div
            className={`w-11 h-11 bg-gray-700 rounded-full absolute top-1 left-1 ${toggle ? "translate-x-14.5 transition-all duration-300 bg-white" : "transition-all duration-300"}`}
          ></div>
        </button>
      </div>

      <div>
        <nav className='py-4 px-5 bg-blue-600 text-white flex justify-between items-center'>
          <h1 className='font-arizonia text-4xl'>Faaz</h1>
          <RiMenuFold3Line size={30} className={`hover:text-gray-400 transition-colors 
          cursor-pointer md:hidden`}
          onClick={updateMenu}
           />
          <div className='sm:hidden md:flex md:space-x-7 md:justify-center'>
            <a href="#">Contact Us</a>
            <a href="#">About Us</a>
            <a href="#">Login</a>
            <a href="#">Signup</a>
          </div>
        </nav>

        <div className={`transition-all duration-300 ${menu ? "flex flex-col float-right bg-gray-400 text-xl space-y-3 font-medium": "hidden"}`}>
          <a href="#" className='px-4 py-2 w-[300px] transition-all hover:bg-blue-600 hover:text-white '>Contact Us</a>
          <a href="#" className='px-4 py-2 w-[300px] transition-all hover:bg-blue-600 hover:text-white '>About Us</a>
          <a href="#" className='px-4 py-2 w-[300px] transition-all hover:bg-blue-600 hover:text-white '>Login</a>
          <a href="#" className='px-4 py-2 w-[300px] transition-all hover:bg-blue-600 hover:text-white '>Signup</a>
        </div>
        <div className='clear-both'></div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro iure blanditiis laborum libero facilis, veritatis quaerat maiores, id enim est ab, nihil tempore reiciendis. Veritatis, voluptates laudantium. Dicta, officia ut.</p>
      </div>
    </div>
  )
}


export default Explore