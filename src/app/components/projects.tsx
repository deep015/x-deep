'use client';

import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import { Project,projects as defaultProjects } from '../../constants//project';
import SectionHeading from './sectionheading';

const Projects = ({
  projects=defaultProjects
}:
  {
    projects:Project[]
  }
) => {
  

  return (
    <div className='my-4 border-y border-neutral-100 px-4 shadow-section-inset'>
   <SectionHeading delay={0.2}>
       Makes development easier with smooth, simple functionality.
      </SectionHeading>
        
 <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
  {projects.map((project, index) => (
  <motion.a
  href={project.href}
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
  whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
  transition={{
    duration: 0.4,
    delay: index * 0.1,
    ease: "easeInOut",
  }}
  key={index}
  className="group relative flex flex-col gap-1 h-full rounded-3xl cursor-pointer"
>
  <Image
    className="group-hover:scale-[1.02] h-40 lg:h-56 rounded-3xl w-full object-cover transition duration-200"
    src={project.src}
    alt={project.title}
    width={300}
    height={300}
  />
  <div className="flex flex-col flex-grow">
    <h3 className="text-neutral-500 mt-2 font-medium tracking-tighter dark:text-white z-20">
      {project.title}
    </h3>
    <p className="text-secondary max-w-xs pt-2 text-sm md:text-sm flex-grow">
      {project.description}
    </p>
  </div>
</motion.a>

  ))}
</div>


    </div>
  );
};

export default Projects;