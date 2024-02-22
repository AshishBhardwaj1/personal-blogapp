"use client"

import React from "react"
import { useState,useEffect } from "react"
import axios from "axios"
import Hero from "@/components/herosection/Hero"
import BlogPage from "./blogpage/page"
import Contact from "./contact/page"


const Home = () => {
  const [blogdata ,setBlogData] =useState([])

  const fetchblogs = async ()=>{
    const res =await axios.get('/api')
    setBlogData(res.data.blog)
    console.log(res.data.blog);
  }
  const delblog = async(id)=>{
    const res = await axios.delete('/api',{params:{blogid :id}})
    fetchblogs()
  }
  useEffect(()=>{
    fetchblogs()
  },[])

  return (
    <div className="bg-slate-100 -z-3">
      
      <Hero/>
   
   
      <h1 className="text-center text-teal-800 text-4xl md:text-5xl lg:text-7xl m-4"> Your blogs</h1>

   <div className="w-[100%]">


<div  className="  flex gap-8 md:flex-row justify-center w-[90%] sm:flex-row  m-5 flex-wrap  lg:flex-row">


{
  blogdata.map((item,index)=>(
    <BlogPage  key={index} title={item.title} author={item.author} content ={item.content}  blogid={item._id} delblog={delblog}/>
    ))
}
 
</div>
    </div>

 <div>
  <Contact/>
 </div>

    </div>
  )


}

export default Home