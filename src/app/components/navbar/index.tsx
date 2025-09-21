'use client'
import React, { useState } from 'react'
import Container from '../container'
import Image from 'next/image'
import { Link } from 'next-view-transitions'
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'

const Navbar = () => {
  const navItems = [
    { title: 'About', href: '/about' },
    { title: 'Projects', href: '/project' },
    { title: 'Contact', href: '/contact' },
    { title: 'Blog', href: '#/blog' }
  ]

  const [hovered, setHovered] = useState<number | null>(null)
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20)
  })

  return (
    <Container className="relative">
      <motion.nav
        animate={{
          boxShadow: scrolled ? 'var(--shadow-aceternity)' : 'none',
          width: scrolled ? '60%' : '100%',
          y: scrolled ? 10 : 0
        }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="flex z-50 fixed bg-neutral-100 dark:bg-neutral-900 inset-x-0 top-0 max-w-4xl mx-auto rounded-full items-center justify-between px-4 py-2"
      >
        <Link href="/">
         <Image
          className="h-12 w-12 rounded-full"
          src="/deep-pro.jpg"
          width={100}
          height={100}
          alt="logo"
        />
         </Link>
       

        <div className="flex items-center">
          {navItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="text-sm relative px-3 py-1"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <AnimatePresence>
                {hovered === index && (
                  <motion.span
                    key="bg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="absolute inset-0 rounded-md bg-neutral-200 dark:bg-neutral-800"
                  />
                )}
              </AnimatePresence>
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  )
}

export default Navbar
