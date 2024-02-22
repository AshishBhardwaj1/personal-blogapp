import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import heroimg from "@/public/images/heroimg.jpg"
const Hero = () => {
  return (
    <div  className=' '>
      <div className='' >

<Image 
src={heroimg}
alt='img'
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
objectFit='cover'
/>    
      </div>
      <div className='items-center -z-2 ' >


 <div className='absolute  text-white   flex flex-col items-center  justify-center mt-[-170px] ml-[70px] sm:mt-[-250px] md:mt-[-300px] md:ml-[100px] lg:mt-[-600px] lg:ml-[300px]'> 
  <div className='font-bold text-xl md:text-3xl items-center '> Hello! welcome to </div>
  <div className='text-xl mt-3 lg:text-8xl md:2xl'>Personal Blog App</div>
  <p className='mt-4 text-[14px] md:text-xl mb-4'>Here you can create your personal blogs</p>
<Link className='bg-blue-600 p-3  rounded-3xl ' href={'/createblog'}>Create Blog</Link>
   
 </div>
      </div>
    </div>
  )
}

export default Hero