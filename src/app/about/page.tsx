
import React from 'react'
import Container from '../components/container'

//import LandingBlog from './components/landingPage'


const AboutPage = () => {
  return (
    <div className='min-h-screen flex items-start justify-start '>
     
      <Container className='min-h-[200vh] p-10 md:pt-26 md:pb-14'>
      
      <h1 className='text-2xl font-bold md:text-4xl tracking-tighter text-primary'>About Me 👋</h1>
      <p className='text-secondary max-w-lg pt-4 text-sm md:text-sm'>
        I’m a software engineer driven by innovation, with experience in creating seamless and reliable digital experiences.
      </p>
   </Container>
    </div>
  )
}

export default AboutPage