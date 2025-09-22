
import React from 'react'
import Container from './components/container'
import Projects from './components/projects'
import BlogPage from './blog/page'
import Heading from './components/heading'
import SubHeading from './components/subHeading'
//import LandingBlog from './components/landingPage'


const Home = () => {
  return (
    <div className='min-h-screen flex items-start justify-start '>
     
      <Container className='min-h-screen p-10 md:pt-26 md:pb-14'>
      
      <Heading>Hello , there ! 👋</Heading>
      <SubHeading >
        I’m a software engineer driven by innovation, with experience in creating seamless and reliable digital experiences.
      </SubHeading>
      <Projects />
     <BlogPage />
      </Container>
    </div>
  )
}

export default Home