import { isMobile } from "react-device-detect"
import Img1 from "../images/serviceData/Architecture1.jpg"
import Img2 from "../images/serviceData/Architecture2.jpg"
import Img3 from "../images/serviceData/Architecture3.jpg"
import Img4 from "../images/serviceData/Architecture4.jpg"
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
       
        <div className="flex items-center flex-col md:flex-row max-w-[100%]  ">

            

        <div className= "w-[100%] md:w-[65%] h-[100vh] z-1 ">
        {isMobile? <h1 className="text-black text-[40px] md:text-[55px] text-center px-5 my-10">Automotive Photography</h1>: ""}
            <div className="grid grid-cols-2 gap-4 px-4">
                
                <img src={Img1}></img>
                <img src={Img3}></img>
                <img src={Img3}></img>
                <img src={Img4}></img>
            </div>
            
        </div>

        <div   className= ' bg-white w-[80%] md:w-[35%]  pb-5 z-10 '>
           
            <div  className=" flex flex-col items-center">
            {isMobile?  "" : <h1 className="text-black text-[40px] md:text-[55px] text-center px-5">Automotive Photography</h1>}
            <p className="px-5 text-[20px] text-center">At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint.</p>
            </div>
            
            <div  className=" flex flex-col items-center mt-12">
                <p className="text-[35px]">Step 1:Message Me</p>
                <p className="w-[60%] text-center">At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint.</p>
            </div>

            <div  className=" flex flex-col items-center  mt-12">
                <p className="text-[35px]">Step 2:Collaboration</p>
                <p className="w-[60%] text-center">At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint.</p>
            </div>

            <div  className="flex flex-col items-center  mt-12">
                <p className="text-[35px]">Step 3:Delivery</p>
                <p className="w-[60%] text-center">At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint.</p>
            </div>

            <Footer /> 
        </div>

        </div>
        </motion.div>

</AnimatePresence>
       
        </>
       
    )
}