"use client"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react";







export default function AnimFond(){

    return(
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gray-900">
            <motion.div className="absolute inset-0 bg-gray-900/80"/>
                    <motion.div className="absolute top-1/4 left-1/5 h-96 w-96 rounded-full bg-violet-500 blur-3xl"
                    animate={{
                        x:["0%", "20%", "2%"],y:["%", "20%", "0%"]
                    }}
                    transition={{
                        duration:5,
                        repeat:Infinity,
                        repeatType:"mirror",
                        ease:"anticipate"
                    }}
                    />


                           <motion.div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-blue-400 blur-3xl"
                    animate={{
                        x:["-15%", "0%", "-2%"],y:["2%", "-15", "-2%"]
                    }}
                    transition={{
                        duration:9,
                        repeat:Infinity,
                        repeatType:"mirror",
                        ease:"anticipate"
                    }}
                    />

                           <motion.div className="absolute top-1/2 right-1/3 h-80 w-80 rounded-full bg-pink-300 blur-3xl"
                    animate={{
                        x:["2%", "25%", "0%"],y:["-20%", "0%", "-1%"]
                    }}
                    transition={{
                        duration:13,
                        repeat:Infinity,
                        repeatType:"mirror",
                        ease:"anticipate"
                    }}
                    />
                  
                  
        </div>
    )
}