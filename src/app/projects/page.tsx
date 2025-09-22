import React from 'react'
import Container from '../components/container'
import Projects from '../components/projects'
import Heading from '../components/heading'
import SubHeading from '../components/subHeading'

const ProjectPage = () => {
  return (
  <div className='min-h-screen flex items-start justify-start '>
     
      <Container className='min-h-[200vh] p-10 md:pt-26 md:pb-14'>
      <Heading>Projects! 👋</Heading>
      <SubHeading>
        I’m a software engineer driven by innovation, with experience in creating seamless and reliable digital experiences.
      </SubHeading>
      <Projects />
      </Container>
    </div>
  )
}

export default ProjectPage