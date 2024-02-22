"use client"
import React from 'react'
import Image from 'next/image'
import blogimg from "@/public/images/blog.jpg"
import Link from 'next/link'
import Aos from 'aos'
import 'aos/dist/aos.css'; 

const BlogPage= ({title,content,blogid,delblog,id ,author}) => {
  Aos.init({
    duration:600
  })

  return (
   
<Link href={`/blogpage/${blogid}`}>



   <div className='flex flex-row -z-4 ' data-aos="zoom-in">


    <article className="group ">
    <img
      alt=""
      src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      className="h-56  rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
    />
  
    <div className="p-4">
      <a href="#">
        <h3 className="text-4xl font-medium text-gray-900">{title}</h3>
      </a>
  
      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
     {content}
      </p>
      <p className='text-[10px]'>{author} </p>
    </div>
  </article>
   </div>
  

      </Link>
  )
}


export default BlogPage
