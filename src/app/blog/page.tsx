
import React from 'react'
import Container from '../components/container'
import { getBlogs } from '../utils/mdx'
import Link from 'next/link'  // use built-in Next.js Link for server components
import { Metadata } from 'next'
import Scales from '../components/scales'
import SubHeading from '../components/subHeading'
import Heading from '../components/heading'

 export const metadata:Metadata = {
    title: 'All Blogs - Deepraj',
    description: 'All My General wisdom and thoughts'
}

const BlogPage = async () => {
    const allBlogs = await getBlogs()

    const truncate = (str: string, length: number) => {
        return str.length > length ? str.substring(0, length) + '...' : str
    }

    const formatDate = (dateStr: string): string => {
        const date = new Date(dateStr)
        return date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
        })
    }

    return (
        <div className='min-h-screen flex items-start justify-start'>
            <Container className='min-h-[200vh] px-10 lg:px-15 md:pt-26 md:pb-14'>
              <Scales />
              <Heading> All Blogs</Heading>
                <SubHeading>
                    Dedicated to continuous learning, I write blogs about newly acquired technologies, demonstrating technical growth, hands-on experience, and knowledge sharing on my portfolio platform.
                </SubHeading>

                <div className='flex flex-col gap-10 lg:gap-8 mt-2'>
                    {allBlogs.map(blog => (
                        <Link href={`/blog/${blog.slug}`} key={blog.slug} className='text-primary'>
                            <div className="flex items-center justify-between">
                                <h2 className='text-primary  text-base font-bold tracking-tight'>
                                    {blog.title}
                                </h2>
                                {blog.date && <p className='text-secondary text-sm md:text-sm'>{formatDate(blog.date)}</p>}
                            </div>
                            <p className='text-secondary max-w-lg pt-2 text-sm md:text-sm'>
                                {truncate(blog.description || "", 100)}
                            </p>
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default BlogPage
