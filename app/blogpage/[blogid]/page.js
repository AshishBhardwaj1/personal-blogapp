"use client"
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'


const Blogdetail = async ({delblog,blogid ,parmas}) => {
  const [blogdetail ,setBlogDetail] =useState([])
  
  const fetchblog = async ()=>{
    const res =await axios.get('/api')
    setBlogDetail(res.data.blog)
    console.log(res.data.blog);
  }

  
  useEffect(()=>{
    fetchblog()
  },[])
  return (
    <div className='w-[400px]'>
      hello
 {
  blogdetail.map((blogs,index)=>{

 <div className='flex  flex-row bg-blue-100 w-[300px] h-full '> 
       <div className='flex flex-col border border-slate-200  h-[400px] w-[300px] '>
       <div>  </div>
         <div> <h1 className='font-bold '>{blogs.title}</h1></div>
          <div> {blogs.content}</div>   
           <div>{blogs.author}</div>
             <button onClick={()=>delblog(blogid)}> delete</button>
       </div>

    </div>

  })
 }
    </div>
  )
}

export default Blogdetail