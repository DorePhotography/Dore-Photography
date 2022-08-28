import {useRef, useState} from "react";
import React from "react";
import { motion, useScroll, useTransform,} from "framer-motion"
import auto from "../images/homePage/Auto.jpg"
import bike from "../images/homePage/Action.jpg"
import events from "../images/homePage/Events.jpg"
import architecture from "../images/homePage/Architecture.jpg"
import Footer from "./footer";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import {  AnimatePresence } from "framer-motion"


function Nav(){
    return(
        <nav  className="flex justify-between p-2 items-center align-middle">
        <div>
        <Link to="/" className="text-[35px] text-white">Dore Photography</Link>
      
        </div>
        <div className="flex mx-2">
        {isMobile?<Link to="mobilemenu"><div><span className=" text-white pt-4 text-[35px] material-symbols-outlined">menu</span></div></Link> : <div>
            <Link to="/" className="mx-2 text-[20px] text-white">HOME</Link>
            <Link to="services" className="mx-2 text-[20px] text-white">SERVICES</Link>
            <Link to="contact" className="mx-2 text-[20px] text-white">CONTACT</Link>
            </div>
        
        }
        </div>
    
    </nav>
    
    )
}

export default function Home(){

  

    


    const { scrollYProgress } = useScroll(-50)
    
    const y = useTransform(scrollYProgress, [0,1], [0, -100 * 1])
    const y2 = useTransform(scrollYProgress, [0,1], [0, -100 * 5])
    const y2b = useTransform(scrollYProgress, [0,1], [-400, 200 * 1])
    const y2bb = useTransform(scrollYProgress, [0,1], [-700, 0 * 1])

    const y3 = useTransform(scrollYProgress, [0,1], [0, -0 * 1])
    
    

   

    
        return(
            <AnimatePresence>
            <motion.div className="h-[100vh] w-[100%]   relative "
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 1 }}
        >
            <div>
            
            
            <div  className="bg-landing-img landingbg h-[100%] md:h-[100vh] ">
                <Nav />
            </div>
        
          
     <motion.div style={isMobile? '' :{y: y3}} >

            <motion.div style={isMobile? '' :{y: y}}   className={isMobile? "w-[100%] h-[300px] relative  " :"w-[100%] h-[700px]  "} >
                   

                   

                   <div className=" h-[100%] w-[100%] overflow-hidden z-1 relative  "   >

                       <h1 className={isMobile? "absolute bottom-6 right-2  z-10 text-white text-[50px]":" cursor-pointer absolute top-60 left-40 z-10 text-white text-[100px] hover:opacity-85 " }>Automotive</h1>
                       <Link to="automotive"><p className={isMobile? "absolute bottom-3 right-3  z-10 text-white text-[20px]":" cursor-pointer absolute top-[370px] left-[160px] z-20 text-white text-[40px] hover:opacity-85 hover-underline-animation" }>Learn More</p></Link>
                  
                       <motion.img style={isMobile? '' :{y: y2 }} className={isMobile? " object-cover w-[100%] h-[300px] ":" object-cover w-[100%] h-[1500px]"} src={auto}></motion.img>
                 
                          
                   </div>

                   

                  
               
           </motion.div >

           

           <motion.div style={isMobile? '' :{y: y}}  className={isMobile? "w-[100%] h-[300px] relative " :"w-[100%] h-[700px] relative  "} >
                  

                  

                  <div className=" h-[100%] w-[100%] overflow-hidden z-1 relative"   >

                  <h1 className={isMobile? "absolute bottom-6 right-2  z-10 text-white text-[50px]":" cursor-pointer absolute top-60 left-40 z-10 text-white text-[100px] hover:opacity-85 " }>Action Sports</h1>
                  <Link to="action"><p className={isMobile? "absolute bottom-3 right-3  z-10 text-white text-[20px]":" cursor-pointer absolute top-[370px] left-[160px] z-20 text-white text-[40px] hover:opacity-85 hover-underline-animation" }>Learn More</p></Link>
                  

                      <motion.img style={isMobile? '' :{y: y2b }} className={isMobile? " object-cover w-[100%] h-[300px]":" object-cover w-[100%] h-[1200px]"} src={bike}></motion.img>
                
                         
                  </div>

          </motion.div>
          <motion.div style={isMobile? '' :{y: y}}  className={isMobile? "w-[100%] h-[300px] relative " :"w-[100%] h-[700px] relative  "} >
                  

                  

                  <div className=" h-[100%] w-[100%] overflow-hidden z-1 relative"   >

                  <h1 className={isMobile? "absolute bottom-6 right-2  z-10 text-white text-[50px]":"  absolute top-60 left-40 z-10 text-white text-[100px] hover:opacity-85 " }>Events</h1>
                  <Link to="events"><p className={isMobile? "absolute bottom-3 right-3  z-10 text-white text-[20px]":" cursor-pointer absolute top-[370px] left-[160px] z-20 text-white text-[40px] hover:opacity-85 hover-underline-animation" }>Learn More</p></Link>
                  

                      <motion.img style={isMobile? '' :{y: y2 }} className={isMobile? " object-cover w-[100%] h-[300px]":" object-cover w-[100%] h-[1500px]"} src={events}></motion.img>
                
                         
                  </div>

          </motion.div>
          <motion.div style={isMobile? '' :{y: y}}  className={isMobile? "w-[100%] h-[300px] relative " :"w-[100%] h-[700px] relative  "} >
                  

                  

                  <div className=" h-[100%] w-[100%] overflow-hidden z-1 relative"   >

                  <h1 className={isMobile? "absolute bottom-6 right-2  z-10 text-white text-[50px]":" cursor-pointer absolute top-60 left-40 z-10 text-white text-[100px] hover:opacity-85 " }>Architecture</h1>
                  <Link to="architecture"><p className={isMobile? "absolute bottom-3 right-3  z-10 text-white text-[20px]":" cursor-pointer absolute top-[370px] left-[160px] z-20 text-white text-[40px] hover:opacity-85 hover-underline-animation" }>Learn More</p></Link>
                  

                      <motion.img style={isMobile? '' :{y: y2bb }} className={isMobile? " object-cover w-[100%] h-[300px]":" object-cover w-[100%] h-[1500px]"} src={architecture}></motion.img>
                
                         
                  </div>

          </motion.div>

          <Footer />

    </motion.div>

           
       
            



       

      
      


    </div>
    </motion.div>

</AnimatePresence>
        )
    }

    
   