import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
export default function BlackNav(){
    return(
       

<nav  className="flex justify-between p-2 align-middle w-[100vw] bg-white ">
<div>
<Link to="/" className="text-[35px] text-[#7c7c7c]">Dore Photography</Link>

</div>
<div className="flex mx-2">
{isMobile?<Link to="/mobilemenu"><div><span className=" text-[#7c7c7c] pt-3 text-[35px] material-symbols-outlined">menu</span></div></Link> :
<div>
<Link to="/" className="mx-2 text-[20px] text-[#7c7c7c]">HOME</Link>
<Link to="/services" className="mx-2 text-[20px] text-[#7c7c7c]">SERVICES</Link>
<Link to="/contact" className="mx-2 text-[20px] text-[#7c7c7c]">CONTACT</Link>
</div>
}
</div>

</nav>
    
    )
}