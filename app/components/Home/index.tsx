"use client"

import Image from "next/image";
interface PropsTag{
  children?: React.ReactElement | string
  color:string
}
import People from '../../../public/Hand-coding-bro.svg'
import {AnimatePresence, motion} from 'framer-motion'
const Tag = ({children, color}: PropsTag) =>{
  return (
    <span className={color}>
      {children}
    </span>
  )
}
export default function Home() {
  

  return (
    <main>  
      <AnimatePresence>

     
       
      <div className="grid grid-cols-3 md:w-10/12 w-11/12 md:gap-11 gap-2 justify-between align-middle items-center md:px-4 m-auto my-64">
        <div className="flex col-span-2 flex-col p-0 m-0 font-bold ">
          <h1 className="xl:text-9xl lg:text-7xl md:text-5xl text-3xl  md:text-start text-center">

         <motion.div
         className="p-0 m-0 "
          initial={{ opacity: 0,x:-50}}
          whileInView={{ opacity: 1,x:0}}
          animate={{
            scale: [1, 1.1, 1.2, 1.3, 1],
          rotate: [2, 1, 1, 2, 1],
          }}
          transition={{ duration: 1,  }} 
        >
          <span className="text-neonBlue xl:text-9xl lg:text-7xl md:text-5xl text-7xl ">Olá</span> 
        </motion.div>
          <motion.div
         className="p-0 m-0 "
          initial={{ opacity: 0, x:50}}
          whileInView={{ opacity: 1, x:0}}
          transition={{ duration: 1 }} 
          animate={{
            scale: [1, 1.1, 1.2, 1.3, 1],
          rotate: [2, 1, 1, 2, 1],
          }}
        >
        Sou Matheus
        </motion.div>
          </h1>
          <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-xs md:text-start text-center ">

      <motion.div
         className="p-0 m-0"
          initial={{ opacity: 0, y:50}}
          whileInView={{ opacity: 1, y:0}}
          animate={{
            scale: [1, 1.1, 1.2, 1.3, 1],
          rotate: [2, 1, 1, 2, 1],
          }}
          transition={{ duration: 1 }} 
        >
          <Tag color="text-neonBlue">{'<>'}</Tag>
              FullStack Developer
          <Tag color="text-neonBlue">{'</>'}</Tag>
          <br />
      
        
          </motion.div>
    
          </h1>
          
        </div>
        
        <motion.div
         initial={{ opacity: 0}}
        whileInView={{
          opacity:1,
          scale: [1.4, 1.3, 1.2, 1.1, 1],
          rotate: [-10, 20, -80, 40, 0],
        }}
        transition={{duration:1}}
        >
        <Image className="lg:w-full lg:h-full" width={500} height={500} alt="profile" src={People}/>    
          </motion.div>
     
      </div>

      </AnimatePresence>
    </main>
  );
}
