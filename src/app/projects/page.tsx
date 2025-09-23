import React from 'react'
import Container from '../components/container'
import Projects from '../components/projects'
import Heading from '../components/heading'
import SubHeading from '../components/subHeading'
import { projects } from '@/constants/project'
import Scales from '../components/scales'

const ProjectPage = () => {
  return (
  <div className='min-h-screen flex items-start justify-start '>
     
      <Container className='min-h-screen px-9 md:pt-26 md:pb-14'>
      <Scales />
      <Heading>Projects! 👋</Heading>
      <SubHeading>
        I’m a software engineer driven by innovation, with experience in creating seamless and reliable digital experiences.
      </SubHeading>
      <Projects projects={projects} />
      </Container>
    </div>
  )
}

export default ProjectPage