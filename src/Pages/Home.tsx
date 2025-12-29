import { Articles } from "../Components/Articles"
import { Content } from "../Components/Content"
import { Hero } from "../Components/Hero"
import { NavBar } from "../Components/NavBar"
import { Footer } from "../Components/Footer"
import { StateContext } from "../Context/StateContext"
import { useState } from "react"


export const Home = ()=>{

    const [menuOpen,setMenuOpen] = useState<boolean>(false);

    return(
        <div className="w-full h-full relative overflow-x-clip z-0 ">
            <StateContext.Provider value={{menuOpen,setMenuOpen}}>
                <NavBar/>
                <Hero/>
                <Content/>
                <Articles/>
                <Footer/>
            </StateContext.Provider>
        </div>
    )
}