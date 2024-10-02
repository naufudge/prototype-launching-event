"use client";

import ParticlesBG from '@/components/ParticlesBG'
import RibbonCutting from '@/components/RibbonCutting';
import React, { useRef, useState } from 'react'
import ReactCanvasConfetti from 'react-canvas-confetti';
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";


const page = () => {
    const [clicked, setClicked] = useState<boolean>(false)
   

    return (
        <div className='flex w-screen h-screen place-items-center justify-center overflow-hidden'>
            { !clicked && 
                <div onClick={() => {setClicked(!clicked)}} className='launch-button z-50 rounded-full bg-red-700 w-[300px] h-[300px] justify-center place-items-center hover:scale-110 transition-all duration-200'>
                    <div className='flex text-center place-items-center justify-center h-full font-lexend font-bold text-[3.25rem] hover:cursor-pointer'>Launch</div>
                </div>
            }
            {/* <RibbonCutting /> */}
            
            { clicked && 
                <div className='fireworks overflow-hidden transition-all'>
                    <Fireworks autorun={{ speed: 4 }} width={1000} height={1000} />
                    <Fireworks className="rotate-90" autorun={{ speed: 4 }} width={1000} height={1000} />
                </div>
            }
        </div>
    )
}

export default page
