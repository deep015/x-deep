
import React from 'react'
import Container from './components/container'
import Projects from './components/projects'

import Heading from './components/heading'
import SubHeading from './components/subHeading'
import { projects } from '@/constants/project'
import LandingBlog from './components/landingPage'
import Testnomials from './components/testinomials'
import Scales from './components/scales'
//import LandingBlog from './components/landingPage'


const Home = () => {
  return (
    <div className='min-h-screen flex items-start justify-start '>
      <Container className='isolate min-h-screen px-8 md:pt-26 md:pb-14'>
      <Scales />
      <Heading>Hello , there ! 👋</Heading>
      <SubHeading >
        I’m a software engineer driven by innovation, with experience in creating seamless and reliable digital experiences.
      </SubHeading>
      <Projects projects={projects.slice(0,2)} />
     <LandingBlog />
     <Testnomials />
      </Container>
    </div>
  )
}

export default Home