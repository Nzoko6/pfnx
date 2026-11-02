"use client";
import { Card,CardAction,CardFooter,CardContent,
 CardDescription, CardTitle, CardHeader} from "@/components/ui/card";
 import { Button } from "@/components/ui/button";




export default function Text (){

return(
  <div>
   <div className="flex justify-center items-center pt-16 gap-3">

     <Card className="w-xl h-md  bg-transparent text-gray-400 ">
     
        <CardContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis aliquam in rem tempore delectus veniam impedit nobis deleniti magnam, omnis,
                 magni doloribus voluptates fuga consequuntur sequi quas. Aspernatur, atque.
        </CardContent>
       
    </Card>

     <Card className="w-xl h-lg bg-transparent text-gray-400  ">
        
        <CardContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis aliquam in rem tempore delectus veniam impedit nobis deleniti magnam, omnis,
                 magni doloribus voluptates fuga consequuntur sequi quas. Aspernatur, atque.
        </CardContent>
      
    </Card>
   </div>
           <Button variant="link" className="text-center">PLUS...</Button>
  </div>

   
      
)
}