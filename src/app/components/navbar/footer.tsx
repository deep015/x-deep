import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import Container from '../container'

const Footer = () => {
  return (
    <Container className='flex justify-between px-3 py-3'>
        <p className=' text-sm text-neutral-500'> Built with Love by Deep</p>
        <div className='flex items-center justify-center gap-4'>
            <Link href='https://github.com/deep015'>
            <IconBrandX className="size-6 text-neutral-500 hover:text-neutral-700"/>
            </Link>
            <Link href='https://github.com/deep015'>
            <IconBrandGithub className="size-6 text-neutral-500 hover:text-neutral-700"/>
            </Link>
            <Link href='https://github.com/deep015'>
            <IconBrandLinkedin className="size-6 text-neutral-500 hover:text-neutral-700"/>
            </Link>
       

        </div>
    </Container>
  )
}

export default Footer