"use client"

import Image from "next/image";

interface PropsTag{
  children?: React.ReactElement | string
  color:string
}
import People from '../../../public/Coding-bro.svg'
import {AnimatePresence, motion} from 'framer-motion'
const Tag = ({children, color}: PropsTag) =>{
  return (
    <span className={color}>
      {children}
    </span>
  )
}
export default function About() {


  return (
    <main className="w-full">  
      <div className="flex w-10/12  justify-center align-middle items-center px-4 m-auto  my-44">
      <AnimatePresence>
        <div  className="grid grid-cols-2 justify-between items-center gap-32">
        
              <motion.div
                className=""
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1, }}
                transition={{ duration: 2 }} 
              >
                <Image width={500} height={500} alt="profile" src={People}/>   
              </motion.div>
       
      
            <motion.div
              className="flex flex-col p-0 m-0 font-bold "
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              transition={{ duration: 2 }} 
            >
              <h1 className="xl:text-8xl lg:text-6xl md:text-4xl text-neonBlue text-center">
              
              Sobre Mim
              </h1>
              <p className="text-center">Olá! Meu nome é Matheus Eduardo, sou de Recife, Pernambuco. Comecei a estudar programação aos 14 anos e atualmente estou cursando Ciências da Computação. Estou no caminho para realizar o sonho da minha família de ser o primeiro a se formar em uma faculdade. Sou filho de uma empregada e de um vendedor, e aprendi a me virar cedo. Aos 16 anos, consegui meu primeiro emprego na área de TI e, aos 17, entrei na Bemax, sediada no Texas. Mas isso é apenas o começo. Estou sempre em busca de aprender e explorar novos horizontes. Nascido na comunidade Dancing Days, estou abrindo infinitas portas para um mundo a ser explorado por meio da tecnologia.</p>
            </motion.div>
      
        </div>
        </AnimatePresence>
      </div>
      
    </main>
  );
}
