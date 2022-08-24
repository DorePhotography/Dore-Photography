import { Routes, Route } from "react-router-dom"
import About from "./components/about";
import Action from "./components/action";
import Automotive from "./components/automotive";
import Events from "./components/events";
import Home from "./components/Home";
import MobileMenu from "./components/mobileMenu";
import Service from "./components/services";
import Architecture from "./components/architecture";


function App() {
  return (
    <div className="App font-Abel">

    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="services" element={ <Service /> } />
        <Route path="contact" element={ <About/> } />
        <Route path="automotive" element={ <Automotive/> } />
        <Route path="action" element={ <Action/> } />
        <Route path="events" element={ <Events/> } />
        <Route path="architecture" element={ <Architecture/> } />
        <Route path="mobilemenu" element={ <MobileMenu/> } />
        
    </Routes>

    </div>
  );
}

export default App;
