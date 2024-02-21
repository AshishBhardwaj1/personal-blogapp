"use client"
import React from 'react'

const Blogdetail = ({title,content ,author,delblog,blogid ,parmas}) => {
  return (
    <div>
 <div className='flex  flex-row bg-blue-100 w-full h-full '> 
       <div className='flex flex-col border border-slate-200  h-[400px] w-[300px] '>
       <div>  </div>
         <div> <h1 className='font-bold '>{title}</h1></div>
          <div> {content}</div>   
           <div>{author}</div>
             <button onClick={()=>delblog(blogid)}> delete</button>
       </div>

    </div>
    </div>
  )
}

export default Blogdetail