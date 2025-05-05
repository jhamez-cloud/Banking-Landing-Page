import { Hero } from "../Components/Hero"
import { NavBar } from "../Components/NavBar"


export const Home = ()=>{

    return(
        <div className="w-full h-full relative overflow-x-clip z-0">
            <NavBar/>
            <Hero/>
        </div>
    )
}