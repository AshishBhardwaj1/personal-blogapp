
import React from 'react'
import { GET } from '../api/route'
const page = () => {
    const data = GET()
  return (
    <div> 
        <h1>blog page</h1>
{data?.author}
    </div>
  )
}

export default page