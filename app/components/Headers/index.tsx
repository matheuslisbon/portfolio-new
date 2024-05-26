"use client"

import { AnimatePresence, motion} from "framer-motion";
import ListHeader from "./listHeader";


export default function Header() {
  
  return (
    <main className=" w-full p-4 fixed top-0 right-0 left-0 bg-black z-50 ">   
    <AnimatePresence> 
      <motion.div
        className="flex flex-col p-0 m-0 font-bold "
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1,}}

        transition={{ duration: 0.7 }} 
      >
      <div className="w-10/12 m-auto justify-between flex" >
          <h1 className=" md:text-3xl sm:text-xl lg:text-4xl  font-bold">
            <span className="text-neonBlue">{"<"}</span>
            {"Matheus Dev"}
            <span className="text-neonBlue">{"/>"}</span>
            
            </h1>
            <a href="/matheus.pdf"download>
            <motion.button
            className=" rounded bg-neonBlue text-lg p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
          Download CV
            
            </motion.button>
          </a>
      </div>
      </motion.div>
      </AnimatePresence>
    </main>
  );
}
