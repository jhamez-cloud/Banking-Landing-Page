import { NavLink } from "react-router-dom"
import { Button } from "./ui/Button"
import { StateContext } from "../Context/StateContext"
import { useContext } from "react"

export const NavBar = ()=>{

    const context = useContext(StateContext);

    if (!context) {
    throw new Error("StateContext.Provider is missing");
    }

    const { menuOpen, setMenuOpen } = context;

    return(
        <>
            <div className="w-full h-[50px] bg-[hsl(0,0%,100%)] flex items-center justify-center px-24  z-30 fixed max-md:flex max-md:justify-between max-md:px-6 backdrop-blur-2xl">
                <div className="w-1/3">
                    <img src="/logo.svg" alt="logo" />
                </div>

                <div className="w-1/3 max-md:hidden ">
                    <ul className="flex items-center justify-between list-none">
                        <li>
                            <NavLink to="/" className={({ isActive }) =>isActive ? "text-blue-600" : "text-black"}>Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) =>isActive ? "text-blue-600" : "text-black"}>About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts" className={({ isActive }) =>isActive ? "text-blue-600" : "text-black"}>Contacts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className={({ isActive }) =>isActive ? "text-blue-600" : "text-black"}>Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/careers" className={({ isActive }) =>isActive ? "text-blue-600" : "text-black"}>Careers
                            </NavLink>
                        </li>
                        {/* <li><NavLink to="/">About</NavLink></li>
                        <li><NavLink to="/">Contact</NavLink></li>
                        <li><NavLink to="/">Blog</NavLink></li>
                        <li><NavLink to="/">Careers</NavLink></li> */}
                    </ul>
                </div>

                <div className="w-1/3 flex justify-end max-md:hidden">
                    <Button text="Request Invite"/>
                </div>

                <div className="hidden max-md:block" onClick={()=>setMenuOpen((prev:boolean)=>!prev)}>
                   <img src={`/images/icon-${menuOpen===true?'close':'hamburger'}.svg`} alt="" />
                </div>
            </div>
        </>
    )
}