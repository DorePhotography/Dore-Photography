import { isMobile } from "react-device-detect"
import Img1 from "../images/serviceData/Influencer1.jpg"
import Img2 from "../images/serviceData/Influencer2.jpg"
import Img3 from "../images/serviceData/Influencer3.jpg"
import Img4 from "../images/serviceData/Influencer4.jpg"
import BlackNav from "./darkNav"
import Footer from "./footer"
import { motion, AnimatePresence } from "framer-motion"


export default function Influencer(){

    

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

            

        <div className= "w-[100%] md:w-[65%] h-[100vh] flex flex-col items-center  ">
        {isMobile? <h1 className="text-black text-[40px] md:text-[55px] text-center px-5 my-10">Influencer Photography</h1>: ""}
            <div className="grid grid-cols-2 max-w-[1000px] gap-4 px-4 ">
                
               
                <img src={Img2}></img>
                <img src={Img3}></img>
                <img className="col-span-2" src={Img1}></img>
                <img className="col-span-2" src={Img4}></img>
            </div>
            
        </div>

        <div   className= ' bg-white w-[100%] md:w-[35%]  pb-5 mt-10 md:mt-0 '>
           
            <div  className=" flex flex-col items-center">
            {isMobile?  "" : <h1 className="text-black text-[40px] md:text-[55px] text-center px-5">Influencer Photography</h1>}
            <p className="px-5 text-[20px] text-center">Whether you're a seasoned pro of the 'gram looking to bring some professional grade to your page, or new to the world of influencing, telling your story is mission critical. If you're looking to capture that story, follow the steps below so we can Freeze The Moment.</p>
            </div>
            
            <div  className=" flex flex-col items-center mt-12">
                <p className="text-[35px]">Step 1: Message Me</p>
                <p className="w-[60%] text-center">Float your ideas, set a time and a place, and we can start planning our time behind the lens.</p>
            </div>

            <div  className=" flex flex-col items-center  mt-12">
                <p className="text-[35px]">Step 2: Collaboration</p>
                <p className="w-[60%] text-center">Got ideas of your own? Need help with a little inspiration? No worries, bring everything you've got and we'll make the magic happen.</p>
            </div>

            <div  className="flex flex-col items-center  mt-12">
                <p className="text-[35px]">Step 3: Delivery</p>
                <p className="w-[60%] text-center">You'll receive a downloadable link encapsulating your story ready to be shared to your heart's content.</p>
            </div>

            <Footer /> 
        </div>

        </div>
        </motion.div>

</AnimatePresence>
       
        </>
       
    )
}