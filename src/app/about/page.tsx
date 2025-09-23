
import React from 'react'
import Container from '../components/container'
import Timeline from '../components/timeline'
import Heading from '../components/heading'
import SubHeading from '../components/subHeading'
import Scales from '../components/scales'
import { College } from '../components/college'

//import LandingBlog from './components/landingPage'


const AboutPage = () => {
  return (
    <div className='min-h-screen flex items-start justify-start '>
     
      <Container className='min-h-screen px-9 md:pt-26 md:pb-14'>

        <Scales />
      <Heading>About me !</Heading>
      <SubHeading>
        I’m a software engineer driven by innovation, with experience in creating seamless and reliable digital experiences.
      </SubHeading>
      <College />
   </Container>
    </div>
  )
}

export default AboutPage