import React from 'react'
import Image from 'next/image'
import blogimg from "@/public/images/blog.jpg"
import Link from 'next/link'

const BlogPage= ({title,content,blogid,delblog,id ,author}) => {


  return (
    <>
<Link href='/blogpage'>
<div className=' w-[90%]  flex flex-col justify-center m-auto'>

<article className="overflow-hidden h-[300px] w-[100%] rounded-lg shadow transition hover:shadow-lg flex justify-center">
  <Image
    alt=""
    width={400}
    height={100}
    src={blogimg}
    
  />

  <div className="bg-white p-4 sm:p-6  ">

    <a href="#">
      <h3 className="mt-0.5  text-5xl text-gray-900 hover:text-gray-600 ">{title}</h3>
    </a>
    <time datetime="2022-10-10" className="block text-xs text-gray-500 mt-2"> 10th Oct 2022 </time>

    <p className="mt-2 line-clamp-3 text-[16px] text-gray-500 w-[400px]">
    { content}
    </p>
  </div>
</article>

</div>
</Link>
</>
  )
}


export default BlogPage
