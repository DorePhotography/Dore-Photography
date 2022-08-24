import NoahPic from "../images/Noah.jpg"
import { isMobile } from "react-device-detect";
import { motion, AnimatePresence } from "framer-motion"
import BlackNav from "./darkNav";
export default function About(){
    return(
        <div>
            <BlackNav />
        <AnimatePresence>
        <motion.div className="h-[100vh] w-[100vw]   relative "
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     transition={{ duration: 1 }}
    >
        
        <div className={isMobile? "flex flex-col p-10" : "flex flex-col md:flex-row justify-start md:justify-between  px-20 md:px-20 mt-15 md:mt-20 h-[100vh] "}>

            <div clasname="flex flex-col p-10">
                <img className={isMobile? " rounded-[200px] w-[200px] mb-5 drop-shadow-2xl ":"rounded-[200px] w-[350px] mb-10 drop-shadow-2xl"} src={NoahPic}></img>
                <h2 className="text-[50px] text-[#202020]">Noah Dore</h2>
                <div className="max-w-[450px] flex-col">
                <p className="w- text-[20px] text-[#202020]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. ”</p>
                </div>
            </div>

            <div className={isMobile? "hidden" :"border-r-2 h-[600px] mr-10 hidden xl:mt-5 xl:flex "}>

            </div>

            <div className="mt-10 md:pr-20 md:mt-20">
                <div>
                    <h3 className="text-[45px]">Contact</h3>
                    <p className="text-[30px] ">dore_photo@icloud.com</p>
                    <p className="text-[30px] ">(778) 840-9407</p>
                </div>
                <div className="mt-5">
                    <h3 className="text-[45px]">Based in</h3>
                    <p className="text-[30px]">Vancouver - Kelowna | BC Canada</p>
                    
                </div>
                <div className="mt-5">
                <a href="https://www.instagram.com/_dorephotography/"><h3 className="text-[35px] hover:scale-105 transition-transform duration-500">@_dorephotography</h3></a>
                    
                   
                    
                </div>
               
            </div>

        </div>
        </motion.div>

</AnimatePresence>

</div>
    )
}