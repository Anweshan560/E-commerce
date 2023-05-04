import Image from 'next/image'
import { Inter } from 'next/font/google'
import {AiOutlineSearch} from "react-icons/Ai"
import Top from "@/components/Top.jsx"
import Banner from '@/components/Banner.jsx'
const inter = Inter({ subsets: ['latin'] })
import promtional from "@/assets/promotion.png"

export default function Home() {
  return (
    <>
      <Top />
      <Banner/>


        <header>
          <div className='bg-[#F2F0FF]'>
          
            <p className='text-secondary '>Best Furniture For Your Castle....</p>
            <h1 className='text-black container'>New Furniture Collection
Trends in 2020</h1>
          <p className='text-[#8A8FB9] container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum modi atque illum illo nesciunt necessitatibus, culpa praesentium pariatur, fugit omnis possimus adipisci natus? Facilis quibusdam sint omnis nostrum, commodi alias!</p>
          </div>

          <div>
          <button className='border bg-secondary '>Shop Now</button>
          </div>
          </header> 
    
    </>
  )
}
