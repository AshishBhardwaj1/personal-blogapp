import { ConnectDB } from "@/lib/config/db";
import blogmodel from "@/lib/models/blogmodel";
import { NextResponse } from "next/server";

const datafromdb =async()=>{
  await  ConnectDB()
}
export async function GET(request){
  const blog = await blogmodel.find({})
  return NextResponse.json({blog:blog})
}
export async function POST(request){
  const {title,content,author } =await request.json()
  await blogmodel.create({
    title,
    content,
    author
  })
  return NextResponse.json({msg:"blog created"})
}
datafromdb()

export async function DELETE(request){
  const blogid = await request.nextUrl.searchParams.get('blogid')
  await blogmodel.findByIdAndDelete(blogid)
  return NextResponse.json({msg:"deleted"})
}
