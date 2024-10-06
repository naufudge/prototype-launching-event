"use client";

import React, { useState, useRef } from 'react'
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { motion } from "framer-motion";
import useSound from 'use-sound';
import { useRouter } from 'next/navigation';

const page = () => {
    const [clicked, setClicked] = useState<boolean>(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const router = useRouter()

    const [isPlaying, setIsPlaying] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
        if (audioRef.current) {
            if (isPlaying) {
                // Pause the audio if it's playing
                audioRef.current.pause();
                audioRef.current.currentTime = 0; // Reset to the start
                audioRef.current.playbackRate = 2
                setIsPlaying(false);
              } else {
                // Play and loop the audio if it's not playing
                audioRef.current.loop = true; // Enable looping
                audioRef.current.play();
                audioRef.current.playbackRate = 2
                setIsPlaying(true);
              }
        }
        setTimeout(function() {
            router.push("https://atom.archivesmv.oais.cloud/index.php/sample-files-2")
        }, 10000);
    }
   
    return (
        <div className='flex w-screen h-screen place-items-center justify-center overflow-hidden'>
            { !clicked && 
                <motion.div 
                    onClick={handleClick} 
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className='launch-button z-50 rounded-full bg-red-700 w-[300px] h-[300px] justify-center place-items-center hover:scale-110 transition-all duration-200'>
                    <div className='flex text-center place-items-center justify-center h-full font-lexend font-bold text-[3.25rem] hover:cursor-pointer select-none'>Launch</div>
                </motion.div>
            }

            { clicked &&
                <motion.div
                    className='absolute font-poppins font-semibold text-[3rem]'
                    initial = {{ opacity:0, scale: 0.5 }}
                    animate = {{ opacity:1, scale: 1 }}
                    transition={{ duration: 0.75 }}
                >
                    Digital Preservation System Launched!
                </motion.div>
                
            }
            
            { clicked && 
                <div className='fireworks overflow-hidden transition-all'>
                    <Fireworks autorun={{ speed: 2 }} width={750} height={750} />
                    <Fireworks className="rotate-90" autorun={{ speed: 1.25 }} width={750} height={750} />
                </div>
            }
            <audio className='absolute' ref={audioRef} src="/fireworks2.mp3" />
        </div>
    )
}

export default page
