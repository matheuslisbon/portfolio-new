"use client"

import {motion, AnimatePresence} from 'framer-motion'
import React from 'react';

interface Props {
  children:React.ReactElement
}

export function FlashMotion({children}:Props) {

  return (
   <AnimatePresence>
      <motion.div
      initial={{ opacity: 0, scale: 1}}
      animate={{ opacity: 1, scale: 1}}
      transition={{ duration: 1.5 }}
      >
      {children}
      </motion.div> 
    </AnimatePresence>
  );
}
