'use client'
import React from 'react'
import { getBlogs } from '../utils/mdx'
import { Link } from 'next-view-transitions'

const LandingBlog =async () => {
    const allBlogs = await getBlogs();

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
  )
}

export default LandingBlog