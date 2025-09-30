import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import Container from '../container'

const Footer = () => {
  return (
    <Container className='flex absolute justify-between border-t border-neutral-300 px-6 py-4'>
        <p className=' text-sm text-neutral-500'>Don&apos;t be shy - Say hello !</p>
        <div className='flex items-center justify-center gap-4'>
            <Link href='https://x.com/Deep12004?t=XBqFS0DQ3QTSAqNQ4x2GCQ&s=09'>
            <IconBrandX className="size-6 text-neutral-500 hover:text-neutral-700"/>
            </Link>
            <Link href='https://github.com/deep015'>
            <IconBrandGithub className="size-6 text-neutral-500 hover:text-neutral-700"/>
            </Link>
            <Link href='https://www.linkedin.com/in/deepraj-o-31884a24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '>
            <IconBrandLinkedin className="size-6 text-neutral-500 hover:text-neutral-700"/>
            </Link>
       

        </div>
    </Container>
  )
}

export default Footer