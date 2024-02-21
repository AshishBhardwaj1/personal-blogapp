import React from 'react'
import Image from 'next/image'
import heroimg from "@/public/images/heroimg.jpg"
const Hero = () => {
  return (
    <div  className=' '>
      <div >

<Image 
src={heroimg}
alt='img'
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
objectFit='cover'
/>    
      </div>
      <div className='-z-5'>


 <div className='absolute top-[30%] left-[5%] text-white w-[60%] lg:mt-[100px] mt-[-100px]'> 
  <div className='font-bold text-xl md:text-3xl '> Hello! welcome to </div>
  <div className='text-xl mt-3 lg:text-6xl md:2xl'>Personal Blog App</div>
  <p className='mt-4 text-[14px] md:text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque numquam rem voluptatem laboriosam sit velit, error corporis vitae unde excepturi, praesentium debitis, iure soluta sapiente quaerat nisi non..</p>
 </div>
      </div>
    </div>
  )
}

export default Hero