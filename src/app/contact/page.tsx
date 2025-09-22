import React from 'react'
import Container from '../components/container'

import Heading from '../components/heading'
import SubHeading from '../components/subHeading'
import ContactForm from '../components/contact-form'

const ContactPage = () => {
  return (
  <div className='min-h-screen flex items-start justify-start '>
     
      <Container className='min-h-screen p-10 md:pt-26 md:pb-14'>
      <Heading>Contact </Heading>
      <SubHeading>
        I'm open to freelance offer, Reach out to me to inquire more about my work
      </SubHeading>
      <ContactForm />
      </Container>
    </div>
  )
}

export default ContactPage