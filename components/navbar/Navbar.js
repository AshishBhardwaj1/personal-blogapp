"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "@/public/images/logo.jpg"

const Navbar = () => {
 
  const TOP_OFFSET = 50;
  // const [showBackground, setShowBackground] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log(window.scrollY);
  //     if (window.scrollY >= TOP_OFFSET) {
  //       setShowBackground(true);
  //     } else {
  //       setShowBackground(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);


  const links = [
    {
      name:'Home',
      href:"/"
    },
    {
      name:'Blog',
      href:"/blogpage"
    },
    {
      name:'Create blog',
      href:"/createblog"
    },
   {
    name:"Contact",
    href:"/contact"
   }
  ]
  return (
    <div className="flex justify-between  bg-gray-800 h-[70px] w-[100%] items-center fixed  ">
<div className="flex mx-6 items-center">
  <Image src={logo} 
  width={50}
  height={50}
  alt="img"
  style={{borderRadius:"50%"}}
  />
<span className="font-bold text-lg m-4 text-red-600">Blog App</span>
</div>
<div>
  <ul className=" hidden md:block ">
    {
links.map(link=>(

  <Link className="text-white m-7 sm:m:4 hover:transform(1.3) hover:text-red-500 active:text-red-800 " href={link.href} >{link.name} </Link>
))
    }
  </ul>
</div >
<div className="block  md:hidden text-white mr-5">
  ham
</div>
{/* <div className="mx-6 flex gap-3 items-center">
  <button className="bg-transparent border text-gray-400 border-zinc-100 h-[35px] w-[65px] rounded-xl">login</button>
  <button className="bg-blue-400 text-white  h-[35px] w-[65px] rounded-xl">sign up</button>
</div> */}
    </div>

  
  
  )
}

export default Navbar