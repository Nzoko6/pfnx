"use client"
import React from "react";
import Image from "next/image";
import { useState } from "react";
import {motion} from "framer-motion"


export default function Deroulent() {
    const [current, setCurrent] = useState(0);

    return (
        <div className="overflow-hidden pt-8">
            <motion.div className="flex w-max  gap-10" id="deroule"
            >
    
            <img src="/image/Express_023749.png" className="w-10 h-10  bg-gray-700 rounded-full border-4 object-cover"/>
            <img src="/image/GitHub_023746.png" className="w-10 h-10" />
            <img src="/image/Next.js_023742.png" className="w-10 h-10 bg-gray-500 rounded-full border-4" />
            <img src="/image/Node.js_023741.png" className="w-10 h-10" />
            <img src="/image/React_023744.png" className="w-10 h-10" />
            <img src="/image/Tailwind CSS_023734.png" className="w-10 h-10" />
            <img src="/image/HTML5_023745.png" className="w-10 h-10" />
            <img src="/image/Bootstrap_023748.png" className="w-10 h-10" />
            <img src="/image/Facebook_023747.png" className="w-10 h-10"/>
            <img src="/image/JavaScript_023743.png" className="w-10 h-10" />
          
            </motion.div>
        </div>
    )
}