"use client"


import { Button } from "@/components/ui/button";
import { Card,CardAction,CardFooter,CardContent,
 CardDescription, CardTitle, CardHeader} from "@/components/ui/card";
 import {motion} from "framer-motion"
import Link from "next/link";
 import { useFormStatus } from "react-dom";



export default function FormSign(){
  const {pending} = useFormStatus()

    return(
        <div className=" flex justify-center items-center pt-36">
      <Card className="w-xl h-96 justify-center items-center bg-transparent shadow-4xl backdrop-blur-3xl">
        <CardContent>
               <form 
    className="space-y-3 max-w-md"
    >
        <h1 className="text-2xl pb-10 font-bold">Login</h1>

     
          <input type="name" name="name"
        placeholder="Votre nom"
        className="border p-2 w-full rounded-full text-center"
        required
        id="name"
        />
        <input type="mail" name="mail"
        placeholder="Votre email"
        className="border p-2 w-full rounded-full text-center"
        required
        id="mail"
        />
        <br /><br />
        <motion.button
        initial={{scale:1.00}}
        whileFocus={{
          backgroundColor:"transparent"
        }}
        whileHover={{scale:1.10, rotate:2}}
        whileTap={{scale:1.00}}
        transition={{duration:0.2}}
        type="submit"  className=" bg-violet-600 disabled:bg-violet-300 disabled:text-gray-400 
        text-gray-200 p-1 h-16 w-full rounded-full border-2 " disabled={pending}>
           {
            pending ? "En cours": "S'abonner"
           }
        </motion.button>
        <div className="flex justify-center items-center">
          <Button variant="link">
          <Link href="" className="text-center" >Vous n'avais pas de compte?</Link>
        </Button>
        <Button variant="link">
          <Link href="" className="text-center" >Signaler un probleme</Link>
          
        </Button>
        </div>

    </form>
        </CardContent>
      </Card>
    </div>
    )
}