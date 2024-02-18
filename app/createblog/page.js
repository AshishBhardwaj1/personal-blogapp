"use client"
import React, { useState } from 'react'

const createblog = () => {
  const [title ,setTitle] =useState("")
  const [content ,setContent] =useState("")

  const [image,setImage] =useState("")
  const handleSubmit =(e)=>{
    e.preventDefault()
              const blog = {title,content,image}
              console.log(blog);
  }
  return (
    <div className=' flex justify-center items-center flex-col bg-slate-400 h-[500px]'>
      <h1 className='text-white font-medium '>Create your own blog</h1>
        <form onSubmit={handleSubmit} className='flex flex-col mt-10 '>

            <input type="text" placeholder='enter title' value={title} onChange={e=>setTitle(e.target.value)} />
          
            <textarea value={content} name="" id="" cols="30" rows="10" placeholder='write content here' onChange={e=>setContent(e.target.value)}></textarea>
<input type="file" onChange={e=>setImage(e.target.files[0])} />
<input type="submit" onSubmit={handleSubmit} />
        </form>
{title}

        </div>
  )
}

export default createblog