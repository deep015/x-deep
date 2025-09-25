"use client"
import React from 'react'
import Container from '../components/container'

import Heading from '../components/heading'
import SubHeading from '../components/subHeading'
import ContactForm from '../components/contact-form'
import Scales from '../components/scales'
import SectionHeading from '../components/sectionheading'

const ContactPage = () => {
  return (
  <div className='min-h-screen flex items-start justify-start '>
     
      <Container className='min-h-screen p-10 md:pt-26 md:pb-14'>
      <Scales />
      <Heading>Contact </Heading>
      <SubHeading>
        I take your static mockups or Ul files and turn them into fast, responsive, and accessible websites. With clean, maintainable code and thoughtful interactions, I bring your designs to life - making sure they not only work across all devices, but also feel smooth, intuitive, and alive.
      </SubHeading>
      <ContactForm />
      </Container>
    </div>
  )
}

export default ContactPage