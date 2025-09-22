'use client';

import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      "title": "Personal Portfolio Website",
      "src": "/deep-pro.jpg",
      "description": "A responsive and modern personal portfolio website built with React and Tailwind CSS to showcase projects, skills, and contact information."
    },
    {
      "title": "E-Commerce Platform",
      "src": "/deep-pro.jpg",
      "description": "A full-stack e-commerce web application using MERN stack with features like product listings, shopping cart, and payment integration."
    },
    {
      "title": "Blog CMS System",
      "src": "/deep-pro.jpg",
      "description": "A content management system for blogging, allowing users to create, edit, and manage posts with rich text and media support."
    }
  ];

  return (
    <div className='py-10'>
        <p className='text-secondary max-w-lg pt-4 text-sm md:text-sm py-2'>
       I enjoy designing web applications and products that make a real difference for people everywhere.        </p>
        {/* Changed gap-23 to gap-4 for a valid Tailwind CSS class */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-22'>
            {projects.map((project, index) => (
                <motion.div
                initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{
                    duration: 0.4, 
                    delay: index * 0.1,
                    ease: "easeInOut"
                }}
                key={index}
                className="group relative h-70 mb-4 "
                >
                <Image
                className='group-hover:scale-[1.02] h-auto rounded-3xl w-full object-cover transition duration-200'
                src={project.src} alt={project.title} width={300} height={300} />
                <h3 className="text-neutral-500 mt-2 font-medium tracking-tighter dark:text-white z-20 ">
                    {project.title}
                </h3>
                <p className='text-secondary max-w-xs pt-4 text-sm md:text-sm'>
                    {project.description}
                </p>
            </motion.div>
            ))}
        </div>
    </div>
  );
};

export default Projects;