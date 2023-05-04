import React from "react"
import Image from 'next/image'
import { Inter } from 'next/font/google'

import {AiOutlineMail} from "react-icons/Ai"
import {FiPhoneCall} from "react-icons/Fi"
import {CgProfile} from "react-icons/Cg"
import {AiFillHeart,AiOutlineShoppingCart} from "react-icons/Ai"

export default function top(){
    return(
        
        <><header className="bg-primary ">
        <nav className='bg-primary md:flex items-center justify-between mr-8'>
           <div>
            <ul className='md:flex gap-8 container'>
              <li className=''><a className='md:flex items-center gap-2' href="mailto:anwesha2000@gmail.com"><AiOutlineMail/>anweshan2000@gmail.com</a></li>
              <li><a className='md:flex items-center gap-2' href="tel:9808143370"><FiPhoneCall/>9808143370</a></li>
            </ul>
            </div>   

         <div className="flex justify-end">
          <ul className='md:flex ml-60 gap-7 md:items-center justify-end'>
            <li>english</li>
            <li>usd</li>
            <li>login</li>
            <CgProfile/>
            <li>wishlist</li>
            <AiFillHeart/>

            <AiOutlineShoppingCart/>
            
          </ul>
          </div>   
        </nav>
      </header>
      </>
    )
}
