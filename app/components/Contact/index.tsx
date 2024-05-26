"use client"

import Image from "next/image";

interface PropsTag{
  children?: React.ReactElement | string
  color:string
}
import Mail from '../../../public/Mail-rafiki.svg'
import {AnimatePresence, motion} from 'framer-motion'
import { FaInstagram, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
const Tag = ({children, color}: PropsTag) =>{
  return (
    <span className={color}>
      {children}
    </span>
  )
}
export default function Contact() {


  return (
    <main className="w-full">  
      <div className="flex w-10/12  justify-center align-middle items-center px-4 m-auto  my-44">
      <AnimatePresence>
        <div  className="grid grid-cols-2 justify-between gap-32">
        
              <motion.div
                className=""
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1, }}
                transition={{ duration: 2 }} 
              >
                <Image width={500} height={500} alt="profile" src={Mail}/>   
              </motion.div>
       
      
            <motion.div
              className="flex flex-col p-0 m-0 font-bold "
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              transition={{ duration: 2 }} 
            >
                <div>
                    
               
              <h1 className="xl:text-8xl lg:text-6xl md:text-4xl text-neonBlue ">
              
              Contato
              </h1>
              <h1 className="xl:text-5xl lg:text-4xl md:text-3xl ">
              
              Matheus - © Copyright 2023.
              </h1>
              <p>Email: Matheuslisbonweb@gmail.com</p>
              <p>Instagram: Matheus_lisbon</p>
              <p>Linkedin:www.linkedin.com/in/matheuslisbon/ </p>
              <p>Telefone: (81) 987170711</p>
              <p className="xl:text-4xl lg:text-3xl md:text-2xl text-neonBlue">Basta clicar no links abaixos:</p>
               </div>
               <div className="flex flex-wrap">
               <Link target="_blank" href={'mailto:matheuslisbonweb@gmail.com?subject=Ol%C3%A1&body=Ol%C3%A1'}>
                    <MdEmail size={45}/>
               </Link>
              
                <Link target="_blank" href={'https://www.instagram.com/matheus_lisbon/'}>
                    <FaInstagram size={45} />
                </Link>
                <Link target="_blank" href={'https://www.linkedin.com/in/matheuslisbon/'}>
                    <FaLinkedin  size={45}/>
                </Link>
                <Link target="_blank" href={'https://api.whatsapp.com/send?phone=+5581987170711&text=Ol%C3%A1%2C%20como%20vai%3F'}>
                    <FaWhatsappSquare  size={45}/>
                </Link>
            
               </div>  
            </motion.div>
          
        </div>
        </AnimatePresence>
      </div>
      
    </main>
  );
}
