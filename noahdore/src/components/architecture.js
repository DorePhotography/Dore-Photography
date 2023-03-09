import { isMobile } from "react-device-detect"
import Img1 from "../images/serviceData/Architecture1.jpg"
import Img2 from "../images/serviceData/Architecture2.jpg"
import Img3 from "../images/serviceData/Architecture3.jpg"

import BlackNav from "./darkNav"
import Footer from "./footer"
import { motion, AnimatePresence } from "framer-motion"


export default function Architecture(){

    

    return(
        <>
         <AnimatePresence>
        <motion.div className="h-[100vh] w-[100vw]   relative "
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     transition={{ duration: 1 }}
    >
        <div className="z-10"> <BlackNav /></div>
       
        <div className="flex  flex-col md:flex-row max-w-[100%]  ">

            

        <div className= "w-[100%] md:w-[65%] h-[100vh]  ">
        {isMobile? <h1 className="text-black text-[40px] md:text-[55px] text-center px-5 my-10">Architecture Photography</h1>: ""}
            <div className="grid grid-cols-1 max-w-[1000px] gap-4 px-4">
                
                <img src={Img1}></img>
                <img src={Img2}></img>
                <img src={Img3}></img>
                
            </div>
            
        </div>

        <div   className= ' bg-white w-[100%] md:w-[35%]  pb-5 mt-10 md:mt-0 '>
           
            <div  className=" flex flex-col items-center">
            {isMobile?  "" : <h1 className="text-black text-[40px] md:text-[55px] text-center px-5">Architecture Photography</h1>}
            <p className="px-5 text-[20px] text-center">Whether you're a realtor selling a home, or are simply an owner looking to show off your beautiful corner of this earth, capturing the energy expereinced is mission critical. If you're looking to capture that energy, follow the steps below so we can Freeze The Moment</p>
            </div>
            
            <div  className=" flex flex-col items-center mt-12">
                <p className="text-[35px]">Step 1: Message Me</p>
                <p className="w-[60%] text-center">Float your ideas, set a time and a place, and we can start planning our time behind the lens.</p>
            </div>

            <div  className=" flex flex-col items-center  mt-12">
                <p className="text-[35px]">Step 2: Collaboration</p>
                <p className="w-[60%] text-center">Know exactly what you're looking for? Need help with a little inspiration? No worries, bring everything you've got and we'll make the magic happen.</p>
            </div>

            <div  className="flex flex-col items-center  mt-12">
                <p className="text-[35px]">Step 3: Delivery</p>
                <p className="w-[60%] text-center">You'll receive a downloadable link encapsulating your experince ready to be shared with the world.</p>
            </div>

            <Footer /> 
        </div>

        </div>
        </motion.div>

</AnimatePresence>
       
        </>
       
    )
}