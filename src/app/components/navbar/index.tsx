'use client'
import React, { useState, useEffect } from 'react'
import Container from '../container'
import Image from 'next/image'
import { Link } from 'next-view-transitions'
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  useTransform
} from 'framer-motion'

const Navbar = () => {
  const navItems = [
    { title: 'About', href: '/about' },
    { title: 'Projects', href: '/projects' },
    { title: 'Contact', href: '/contact' },
    { title: 'Blog', href: '/blog' }
  ]

  const [hovered, setHovered] = useState<number | null>(null)
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // ✅ Set isMobile state based on screen width
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768) // Tailwind's md breakpoint
    }

    checkScreenSize() // Initial check
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // ✅ Responsive transform ranges
  const y = useTransform(scrollY, [0, 100], isMobile ? [0, 6] : [0, 10])
  const width = useTransform(scrollY, [0, 100], isMobile ? ['90%', '75%'] : ['65%', '53%'])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20)
  })

  return (
    <Container className="relative">
      <motion.nav
        style={{
          boxShadow: scrolled ? 'var(--shadow-aceternity)' : 'none',
          width,
          y
        }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="flex z-50 fixed bg-white dark:bg-neutral-900 inset-x-0 top-0 max-w-3xl lg:max-w-4xl mx-auto rounded-full 
        items-center justify-between px-2 lg:px-4 py-1 lg:py-2"
      >
        <Link href="/">
          <Image
            className="h-7 w-7 lg:h-12 lg:w-12 rounded-full"
            src="/deep-pro.jpg"
            width={100}
            height={100}
            priority
            alt="logo"
          />
        </Link>

        <div className="flex items-center">
          {navItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="text-xs lg:text-sm relative px-2 lg:px-3 py-1"
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
