import React from 'react'
import Image from 'next/image'
import styles from "./styles/hero.module.css"
function Hero() {
  return (
    <div>Hero

<div className="relative m-10 bg-clip-content">

<div className=" align-middle justify-center text-white text-9xl font-bold">
  <Image
  src="/BGV_text.svg"
  height={475}
  width={715}
  alt='Verses'
  className=' '
  />
      </div>


<div className="absolute z-30 top-[45%] p-2 cursor-pointer  ">
<Image 
          src="/Bhagavadgita_book.png" // Replace with your book image URL
          alt="Bhagavad Gita"
          height={800}
          width={800}
          className={styles.book}  // Adjust width as necessary
        />
</div>
<div className="absolute z-10 top-[55%] p-2 cursor-pointer ">
<Image 
          src="/Shadow_3.png" // Replace with your book image URL
          alt="Bhagavad Gita"
          height={350}
          width={800}
          className={styles.book} // Adjust width as necessary
        />
     
</div>
{/* <button className="inline-block text-3xl uppercase after:duration-1000 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-red-500 after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100"></button> */}
</div>

<div className="flex justify-center items-center h-screen">
     
      
      {/* Book with shadow */}
      <div className="relative">
        
        <div className="absolute -bottom-2 -right-2 w-64 h-auto bg-gray-900 filter blur-lg opacity-50"></div> {/* Shadow effect */}
      </div>
    </div>
    </div>
  )
}

export default Hero