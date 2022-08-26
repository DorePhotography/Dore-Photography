import BlackNav from "./darkNav";
import Auto from "../images/servicePage/Auto.jpg"
import Architecture from "../images/servicePage/Architecture.jpg"
import Events from "../images/servicePage/Events.jpg"
import Action from "../images/servicePage/Action.jpg"
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import InfluencerImg from "../images/servicePage/Influencer.jpg"
export default function Service(){

   

    const [hovering, setHover] = useState(false)
    const [hovering2, setHover2] = useState(false)
    const [hovering3, setHover3] = useState(false)
    const [hovering4, setHover4] = useState(false)
    const [hovering5, setHover5] = useState(false)
    
    function toggleHover(){
        setHover(!hovering)
        
    }

    function toggleHover2(){
        setHover2(!hovering2)
        
    }

    function toggleHover3(){
        setHover3(!hovering3)
        
    }

    function toggleHover4(){
        setHover4(!hovering4)
        
    }
    
    function toggleHover5(){
        setHover5(!hovering5)
        
    }

    console.log(hovering);

    return(
        <AnimatePresence>
        <motion.div className="h-[100vh] w-[100vw]   relative "
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     transition={{ duration: 1 }}
    >
        <div>
            <BlackNav />
            <div className="flex flex-col items-center mt-20">
                <h1 className="text-[40px] text-[#7c7c7c]">Services</h1>
               
                <Link to = '/influencer'  className="w-[90%] h-[400px] mt-10  overflow-hidden relative cursor-pointer ">
                    <div onMouseEnter={toggleHover5} onMouseLeave={toggleHover5} >
                        <div className={hovering5? "w-[100%] h-[100%] scale-105 transition-transform duration-500 ":"w-[100%] h-[100%] scale-100 transition-transform duration-500 "}><img className="object-cover object-center w-[100%] h-[500px]" src={InfluencerImg}></img></div>

                        

                        <h2 className="absolute left-5 top-10 text-white text-[50px] lg:text-[100px]">DORE x INFLUENCER</h2>
                        <p className="absolute left-7 bottom-[120px] lg:bottom-[190px] text-white text-[30px]">BEAUTY IN DESIGN</p>

                    </div>
                </Link>
               
                <Link to = '/automotive'  className="w-[90%] h-[400px] mt-10  overflow-hidden relative cursor-pointer">
                    <div onMouseEnter={toggleHover} onMouseLeave={toggleHover} >
                        <div className={hovering? "w-[100%] h-[100%] scale-105 transition-transform duration-500 ":"w-[100%] h-[100%] scale-100 transition-transform duration-500 "}><img className="object-cover w-[100%] h-[500px]" src={Auto}></img></div>
                        <h2 className="absolute left-5 top-10 text-white text-[50px] lg:text-[100px]">DORE x AUTOMOTIVE</h2>
                        <p className="absolute left-7 bottom-[120px] lg:bottom-[190px] text-white text-[30px]">Brand Colabs</p>
                    </div>
                </Link>


                
               
               

                <Link to = '/action'  className="w-[90%] h-[400px] mt-10  overflow-hidden relative cursor-pointer">
                    <div onMouseEnter={toggleHover2} onMouseLeave={toggleHover2} >
                        <div className={hovering2? "w-[100%] h-[100%] scale-105 transition-transform duration-500 ":"w-[100%] h-[100%] scale-100 transition-transform duration-500 "}><img className="object-cover w-[100%] h-[500px]" src={Action}></img></div>

                        

                        <h2 className="absolute left-5 top-10 text-white text-[50px] lg:text-[100px]">DORE x ACTION SPORTS</h2>
                        <p className="absolute left-7 bottom-[120px] lg:bottom-[190px] text-white text-[30px]">FREEZE THE MOMENTs</p>

                    </div>
                </Link>
               
                <Link to = '/events'  className="w-[90%] h-[400px] mt-10  overflow-hidden relative cursor-pointer">
                    <div onMouseEnter={toggleHover3} onMouseLeave={toggleHover3} >
                        <div className={hovering3? "w-[100%] h-[100%] scale-105 transition-transform duration-500 ":"w-[100%] h-[100%] scale-100 transition-transform duration-500 "}><img className="object-cover w-[100%] h-[500px]" src={Events}></img></div>

                        

                        <h2 className="absolute left-5 top-10 text-white text-[50px] lg:text-[100px]">DORE x EVENTS</h2>
                        <p className="absolute left-7 bottom-[120px] lg:bottom-[190px] text-white text-[30px]">CAPTURE THE EMOTION</p>

                    </div>
                </Link>

                <Link to = '/architecture'  className="w-[90%] h-[400px] mt-10  overflow-hidden relative cursor-pointer mb-10">
                    <div onMouseEnter={toggleHover4} onMouseLeave={toggleHover4} >
                        <div className={hovering4? "w-[100%] h-[100%] scale-105 transition-transform duration-500 ":"w-[100%] h-[100%] scale-100 transition-transform duration-500 "}><img className="object-cover w-[100%] h-[500px]" src={Architecture}></img></div>

                        

                        <h2 className="absolute left-5 top-10 text-white text-[50px] lg:text-[100px]">DORE x ARCHITECTURE</h2>
                        <p className="absolute left-7 bottom-[120px] lg:bottom-[190px] text-white text-[30px]">BEAUTY IN DESIGN</p>

                    </div>
                </Link>

               
               
               

               

                

            </div>
        </div>
        </motion.div>

</AnimatePresence>
    )
}