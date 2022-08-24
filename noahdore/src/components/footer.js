import InstaLogo from "../images/Insta.png"

export default function Footer(){
    return(
        
       

            <div className="flex flex-col  items-center pb-20 mt-10 ">

                <h2 className="text-center text-[50px] text-[#202020]">Get Started</h2>
                
                    <p className="text-[20px] text-[#202020] ">dore_photo@icloud.com</p>
                   
                    <p className="text-[20px] text-[#202020]">(778) 840-9407</p>
               <a href="https://www.instagram.com/_dorephotography/"><img className="w-[30px] mt-2" src={InstaLogo}></img></a>
                
            </div>

    )
}