"use client"
import { motion, MotionProps } from 'framer-motion'
import React from 'react'

const MotionDiv = (props:MotionProps) => {
  return (
   <motion.div {...props} />
  )
}

export default MotionDiv