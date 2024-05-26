"use client"

import Image from "next/image";

interface PropsTag{
  children?: React.ReactElement | string
  color:string
}
import ProjectAlura from '../../../public/alura.png'
import portfolio from '../../../public/portfolio.png'
import portfoliov2 from '../../../public/portfoliov2.png'
import pomodoro from '../../../public/pomodoro.png'

import blog from '../../../public/blog.png'
import farmacia from '../../../public/farmacia.png'
import ProjectAluraKut from '../../../public/alurakut.png'
import {AnimatePresence, motion} from 'framer-motion'
const Tag = ({children, color}: PropsTag) =>{
  return (
    <span className={color}>
      {children}
    </span>
  )
}
export default function Projects() {


  return (
    <main className="w-full">  
      <div className="flex w-10/12  justify-center align-middle items-center px-4 m-auto  my-44">
      <AnimatePresence>
        <div  className="flex justify-center items-center gap-32">
        

       
      
            <motion.div
              className="flex flex-col p-0 m-0 font-bold "
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              transition={{ duration: 2 }} 
            >
              <h1 className="xl:text-8xl lg:text-6xl md:text-4xl text-neonBlue mb-10 text-center">
              
             Projetos
              </h1>
            <div className="grid grid-cols-3 gap-12">
                <div>
                    <Image src={ProjectAlura} className=" rounded-lg" alt='project alura'/>
            
                </div>
                <div>
                    <Image src={ProjectAluraKut} alt='project alura'/>
                </div>
          
                <div>
                    <Image src={pomodoro} alt='project alura'/>
                </div>
                <div>
                    <Image src={farmacia} alt='project alura'/>
                </div>
                <div>
                    <Image src={portfolio} alt='project alura'/>
                </div>
                <div>
                    <Image src={portfoliov2} alt='project alura'/>
                </div>
                <div>
                    <Image src={blog} alt='project alura'/>
                </div>
            

            </div>
            </motion.div>
      
        </div>
        </AnimatePresence>
      </div>
      
    </main>
  );
}
