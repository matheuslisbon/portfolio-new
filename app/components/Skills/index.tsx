"use client"

import Image from "next/image";
import People from '../../../public/skills.svg'
import {AnimatePresence, motion} from 'framer-motion'
import { FaAws, FaCss3Alt, FaHtml5, FaNode, FaReact, FaUbuntu, FaWindows } from "react-icons/fa";
import { TbBrandJavascript, TbBrandTypescript } from "react-icons/tb";
import { SiEslint, SiJest, SiPostgresql, SiPrettier } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BsBootstrapFill } from "react-icons/bs";

export default function Skills() {
  return (
    <main className="w-full">  
      <div className="flex md:w-10/12 w-11/12 justify-center align-middle items-center md:px-4 m-auto my-44">
      <AnimatePresence>
        <div  className="grid grid-cols-2 justify-between items-center md:gap-32 gap-2">
        
        <motion.div
              className="p-0 m-0 font-bold "
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              transition={{ duration: 2 }} 
            >
              <h1 className="xl:text-8xl lg:text-6xl md:text-5xl text-6xl text-center text-neonBlue">
              
             Skills
              </h1>
           <div className="flex flex-wrap items-center justify-center gap-2">
           <FaHtml5 size={60}/>
           <TbBrandJavascript size={60}/>
           <FaCss3Alt size={60}/>
           <FaReact size={60} />
           <FaAws size={60}/>
           <SiPostgresql size={60}/>
           <BsBootstrapFill size={60}/>
           <SiPrettier size={60}/>
           <SiEslint size={60}/>
           <FaCss3Alt size={60}/>
           <FaNode size={60}/>
           <RiNextjsFill size={60}/>
           <TbBrandTypescript size={60}/>
           <SiJest size={60}/>
           <FaWindows size={60}/>
           <FaUbuntu size={60}/>


           </div>
            </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1, }}
                transition={{ duration: 2 }} 
              >
                <Image width={500} height={500} alt="profile" src={People}/>   
              </motion.div>
      
        </div>
        </AnimatePresence>
      </div>
      
    </main>
  );
}
