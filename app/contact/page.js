


const Contact = () => {
  return (
    <div className='w-full  p-6'>
   <div className=' bg-gray-200 mt-12 w-full  '>
      
      <h1 className='text-center mt-9 text-black text-xl md:text-4xl lg:text-5xl'> Contact Us</h1>
    <form className='flex flex-col justify-center m-auto items-center  w-full md:w-[500px] text-black'>

    <div className='flex flex-col w-[90%] md:w-full  mb-3'> <span>Name</span>  <input className='p-3 rounded-xl ' type="text"placeholder='enter your name' /></div>
    <div className='flex flex-col w-[90%] md:w-full  mb-3'>  <span>Email</span><input className='p-3 rounded-xl  ' type="email" placeholder='enter your email' /> </div>
    <div className='flex flex-col w-[90%] md:w-full '> <span>Your message</span> <textarea placeholder="leave a comment" className='rounded-xl ' id="" cols="30" rows="10"></textarea></div>
    <button className='bg-blue-600 text-white p-2 rounded-2xl m-4 w-[200px] hover:bg-blue-700 align-left' type="submit">submit</button>
    </form>
     </div>
    </div>
  )
}

export default Contact