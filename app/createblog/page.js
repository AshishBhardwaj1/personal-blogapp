"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, {  useState } from 'react'

const Createblog = () => {
  const router =useRouter()
  const [title ,setTitle] =useState("")
  const [content ,setContent] =useState("")
 const [author,setAuthor] =useState("")

  const handleSubmit = async(e)=>{
    e.preventDefault()
try {
  const response = await axios.post('/api',{title,content,author})
  console.log(response);
  setTitle("")
  setContent("")
  setAuthor("")

 await fetchblogs()

} catch (error) {
  console.log(error);
}
       router.push('/blogpage')    
  }
  return (
    <div className=' flex justify-center items-center  flex-col bg-slate-700 overflow:hidden '>
      <h1 className='text-white font-medium text-5xl mt-[70px]'>Create your own blog</h1>
        <form onSubmit={handleSubmit} className='flex flex-col mt-10 w-[80%] rounded-xl justify-center items-center m-auto bg-slate-600'>

            <span className='text-white mt-3'>title </span> 
            <input type="text" placeholder='enter title' value={title} onChange={e=>setTitle(e.target.value)}  className=' bg-slate-500 mb-4 p-3 w-[90%] rounded-2xl '/>
           <span className='text-white'>Description</span>
            <textarea className='mb-3 bg-slate-500  w-[90%] rounded-2xl' value={content} rows={10} cols={30} 
             placeholder='write content here' onChange={e=>setContent(e.target.value)}></textarea>
            <span className='text-white'>Author</span>
            <input className='mb-3 bg-slate-500 p-3 w-[90%] rounded-2xl' type='text' placeholder='author' value={author} onChange={e=>setAuthor(e.target.value)}/>
<input type="submit" onSubmit={handleSubmit} value={"create new blog"} className='w-[190px] bg-blue-300 p-4 mb-6 rounded-3xl'  />
        </form>




        </div>
  )
}

export default Createblog