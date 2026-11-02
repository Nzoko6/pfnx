"use client";
import { Card,CardAction,CardFooter,CardContent,
 CardDescription, CardTitle, CardHeader} from "@/components/ui/card";
 import { Button } from "@/components/ui/button";
 import { motion, spring } from "framer-motion"; 
import { Camera, Hospital, ShoppingBag, University } from "lucide-react";




export default function Actu (){

return(
  <div>
   <div className="flex justify-center items-center gap-3">
            
              <motion.div
     initial={{scaleX:1.00}}
     whileHover={{ scale:1.15,boxShadow:"0 0 30px violet", borderRadius:"18px",
        backdropFilter:"blur(4px) "
     }}
      whileTap={{scale:1.00}}
     transition={{duration:2, type:spring}}
     >
         <Card className="w-70 shadow-2xl bg-transparent text-gray-100">
        <CardHeader>
            <CardTitle>UNIFA</CardTitle>
            <CardDescription className="text-gray-400"> Numerisation d'une université avec gestion d'admin</CardDescription>
        </CardHeader>
        <CardContent>
               <University className="w-26 h-26 text-violet-900 "/>
        </CardContent>
        <CardFooter>
                <Button variant="outline" className="shadow-2xl bg-violet-800 text-white
                rounded-full
                ">En savoir plus...</Button>
        </CardFooter>
    </Card>
     </motion.div>
            
            
 <br />
     <motion.div
     initial={{scaleX:1.00}}
     whileHover={{ scale:1.15,boxShadow:"0 0 30px violet", borderRadius:"18px",
        backdropFilter:"blur(3px) "
     }}
      whileTap={{scale:1.00}}
     transition={{duration:2, type:spring}}
     >
        <Card className="w-70 shadow-2xl bg-transparent text-gray-100">
        <CardHeader>
            <CardTitle>PATIENT</CardTitle>
            <CardDescription className="text-gray-400">Gestion de patient et prise de rendez-vous</CardDescription>
        </CardHeader>
        <CardContent>
               <Hospital className="w-26 h-26 text-violet-600 "/>
               
        </CardContent>
        <CardFooter>
                <Button variant="outline" className="shadow-2xl bg-violet-800 text-white
                rounded-full
                ">En savoir plus...</Button>
        </CardFooter>
    </Card>
     </motion.div>

   <motion.div
     initial={{scaleX:1.00}}
     whileHover={{ scale:1.15,boxShadow:"0 0 30px violet", borderRadius:"18px",
        backdropFilter:"blur(3px) "
     }}
     whileTap={{scale:1.00}}
     transition={{duration:1, type:spring}}
     >
  <Card className="w-70 shadow-2xl bg-transparent text-gray-100">
        <CardHeader>
            <CardTitle>E-commerce</CardTitle>
            <CardDescription className="text-gray-400">Vente en ligne, commande, reservation</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
               <ShoppingBag className="w-26 h-26 text-violet-600 items-center justify-center"
            
               />
                
        </CardContent>
        <CardFooter>
                <Button variant="outline" className="shadow-2xl bg-violet-800 text-white
                rounded-full
                ">En savoir plus...</Button>
        </CardFooter>
    </Card>
     </motion.div>

   
   </div>
           <Button variant="link" className="text-center">PLUS...</Button>
  </div>

   
      
)
}