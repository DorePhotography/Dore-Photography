import { Link } from "react-router-dom"

export default function MobileMenu(){
    return(
        <div>
            <div className="flex justify-between p-5 items-center align-middle">
            <Link to="/" className="text-[35px] text-[#7c7c7c]">Dore Photography</Link>
            <Link to="/"><span className="material-symbols-outlined pt-2 text-[#7c7c7c] text-[35px] ">close</span></Link>
            </div>
            <div className="flex flex-col text-center mt-10">
            <Link to="/" className="mx-2 text-[40px] mt-10 text-[#7c7c7c]">HOME</Link>
            <Link to="/services" className="mx-2 text-[40px] mt-10 text-[#7c7c7c]">SERVICES</Link>
            <Link to="/contact" className="mx-2 text-[40px] mt-10 text-[#7c7c7c]">CONTACT</Link>
            </div>
        </div>
    )
}