
import React from 'react'
import Container from './components/container'
import Projects from './components/projects'

import Heading from './components/heading'
import SubHeading from './components/subHeading'
import { projects } from '@/constants/project'
import LandingBlog from './components/landingPage'

import Scales from './components/scales'



const Home = () => {
  return (
    <div className='min-h-screen  flex items-start justify-start '>
      <Container className='isolate  min-h-screen px-8 md:pt-26 md:pb-14'>
      <Scales />
      <div className='my-9  lg:my-0'>

    < Heading>Hello , there ! 👋</Heading>
      <SubHeading >
        I’m a Software Developer driven by innovation, with experience in creating seamless and reliable digital experiences.
      </SubHeading>
      <Heading>Recent Blogs </Heading>
     <LandingBlog />
     <Heading>Dev Tools </Heading>
  
      <Projects projects={projects.slice(0,3)} /> 
      </div>
      
      
  
      </Container>
    </div>
  )
}

export default Home