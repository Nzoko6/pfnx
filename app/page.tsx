"use client"



import { Button } from "@/components/ui/button";
import News from "./component/news";
import { Projet } from "./component/projet";
import Link from "next/link";
import Text from "./component/text";
import Deroulent from "./component/deroulent";
import {motion} from "framer-motion"
import { Facebook, Instagram,  Phone, X } from "lucide-react";


export default function Home() {
  return (
    <div className="">
      <main className=" relative z-10 ">
     <div className="h-[200vh] ">
                 <br />
     <div className="shadow">
        <div className="flex justify-center items-center pt-24">
         <motion.img src="/image/trois.jpg"
         initial={{scale: 0.85 , opacity:0}}
          whileInView={{scale:1.00, opacity:1}}
          transition={{duration:2}}
        className="rounded-full object-cover w-52 h-52 img"
        id="img"
        />
       </div>
    

         <section className="text-center text-2xl pt-2">
           <motion.h2
             initial={{scale: 0.85 , opacity:0}}
          whileInView={{scale:1.00, opacity:1}}
          transition={{duration:0.5}}
           >Bonjour !</motion.h2>
           <motion.p
             initial={{scale: 0.85 , opacity:0}}
          whileInView={{scale:1.00, opacity:1}}
          transition={{duration:2,type:"spring"}}
           >Moi c'est <strong>Mutombo URIE</strong> developpeur fullStack</motion.p>

        </section>

        <div className="flex justify-center items-center gap-4 pt-4">
         <motion.div
         initial={{scale: 0.85 , opacity:0}}
         whileHover={{ scale:1.15, rotate:2,
           backgroundColor:"transparent"
         }}
          whileTap={{scale:1.00, rotate:0,}}
          whileInView={{scale:1.00, opacity:1}}
         
         >
           <Button variant="default" className="bg-violet-800 text-white text-sm rounded-full">
            Me contacter</Button>
         </motion.div>
            <motion.div
       initial={{scale: 0.85 , opacity:0}}
         whileHover={{ scale:1.15, rotate:2,
            backgroundColor:"transparent"
         }}
          whileTap={{scale:1.00, rotate:0,}}
           whileInView={{scale:1.00, opacity:1}}
         >
           <Button  className="bg-transparent border-violet-800 text-violet-800 text-sm rounded-full border">
            <Link href="/Sabonner">
           S'abonner
           </Link>
           </Button><br />
          
         </motion.div>
          
        </div>
       <motion.div 
       initial={{scale: 0.85 , opacity:0}}
          whileInView={{scale:1.00, opacity:1}}
           transition={{duration:2,type:"spring"}}
       className="flex justify-center items-center">
          <Deroulent/>
        </motion.div>
        <br />
     </div>
     <br />
     <motion.div 
       initial={{scale: 0.85 , opacity:0}}
         whileHover={{ scale:1.00}}
          whileInView={{scale:1.00, opacity:1}}
           transition={{duration:2,type:"spring"}}
       className="flex justify-center items-center">
        <News/>
     </motion.div>

      <motion.div 
       initial={{scale: 0.85 , opacity:0}}
          whileInView={{scale:1.00, opacity:1}}
           transition={{duration:2,type:"spring"}}
       className="flex justify-center items-center">
        <Projet/>
      </motion.div>

      <motion.div 
       initial={{scale: 0.85 , opacity:0}}
          whileInView={{scale:1.00, opacity:1}}
           transition={{duration:2,type:"spring"}}
       className="flex justify-center items-center">
        <Text/>
      </motion.div>








         <footer className=" bg-gray-900 justify-center items-center ">
    
           <div className="flex justify-center items-center gap-4 pt-7">
            <Button variant="default" className="border">
              <Facebook className="w-6 h-6"/>
            </Button>
          <Button variant="default" className="border">
            <Instagram className="w-6 h-6"/>
          </Button>
          <Button variant="default" className="border">
            <Phone className="w-6 h-6"/>
          </Button>
          <Button variant="default" className="border">
             <X className="w-6 h-6"/>
          </Button>
         
           </div>
        <div className="flex justify-center items-center gap-6 pt-7">
          <p>  Mention legals</p> <p> CopyRight2026</p>  <p> A propos de nous</p> 
         <p>  Signaler une erreur</p>  <p>  Liences</p>
        </div>
        <br />
        <br />
        </footer>
     </div>
      </main>
    </div>
  );
}
