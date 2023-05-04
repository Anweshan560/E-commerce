import React from "react";
import {AiOutlineSearch} from "react-icons/Ai"

export default function Banner (){
    return(
        <>
        <header>
          <nav className='bg-white md:flex p-2 flex justify-between '>
            <div className="flex justify-between"> 
            <ul className='bg-white text-black container md:flex items-center gap-11 justify-between'>
              <li><span className='text-4xl font-bold'>Hekto</span></li>
              <li><span className='text-secondary'>Home</span></li>
              <li>Pages</li>
              <li>Products</li>
              <li>Blog</li>
              <li>Shop</li>
              <li>contact</li>
            </ul>
            </div>


<div className="mr-6">
            <ul className='md:flex container items-center  '>
              <li><input className='border ' type="text" /></li>
              <span className='text-black bg-secondary p-1 '><AiOutlineSearch/></span>
            </ul>
            </div>
            
          </nav>
          
        </header>
        </>

    )
}