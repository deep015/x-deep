
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
    <div className='my-9  lg:my-0'>

      <Heading>A BIT ABOUT ME!</Heading>
      <SubHeading>
       I’m a creative developer driven by curiosity—not just about how
                things work in code, but also about the emotions and experiences
                behind them. I love building things that are not only
                functional, but also intuitive and a little bit delightful. From
                subtle micro-interactions to full experiences, I believe that
                good design lives in the details.
      </SubHeading>
      
      <College />
     <Heading>Key Accomplishments</Heading>
     <Timeline />
     </div>
   </Container>
    </div>
  )
}

export default AboutPage