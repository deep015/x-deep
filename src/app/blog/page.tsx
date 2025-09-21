
import React from 'react'
import Container from '../components/container'
import { getBlogs } from '../utils/mdx'
import Link from 'next/link'
import { ViewTransitions } from 'next-view-transitions'


export const metadata = {
    title:'All Bologs - Deepraj',
    description:'All My General wisdom and thoughts'
}
const BlogPage = async() => {
    const allBlogs = await getBlogs()

    const truncate = (str:string,length:number)=>{
      return str.length > length ? str.substring(0,length) + '...' : str;
    }
    const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    weekday: "long",   // Sunday
    month: "short",     // September
    day: "numeric",    // 21
    year: "numeric",   // 2025
  });
};
  return (
    <div className='min-h-screen flex items-start justify-start '>
     
      <Container className='min-h-[200vh] p-10 md:pt-26 md:pb-14'>
      
      <h1 className='text-2xl font-bold md:text-4xl tracking-tighter text-primary'>
        All Blogs
        </h1>

      <div className='flex flex-col gap-8 mt-2'>
     {
        allBlogs.map(blog => (
            <Link href={`/blog/${blog.slug}`} key={blog.slug} className='text-primary '>
                <div className="flex items-center justify-between">
                 <h2 className='text-primary text-base font-bold tracking-tight '>
                    {blog.title}
                </h2>
                
                  {blog.date && <p className='text-secondary text-sm md:text-sm'>{formatDate(blog.date)}
                    </p>}


                
                </div>
                <p className='text-secondary max-w-lg  pt-2 text-sm md:text-sm'>
               {truncate(blog.description || "", 100)}            
               </p>
               
            </Link>
        ))
     }
     </div>
      </Container>
    </div>
  )
}

export default BlogPage