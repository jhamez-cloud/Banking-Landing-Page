import { Button } from "./ui/Button"
import { StateContext } from "../Context/StateContext"
import { useContext } from "react"
import { NavLink } from "react-router-dom";


export const Hero = ()=>{

    const context = useContext(StateContext);

    if (!context) {
    throw new Error("StateContext.Provider is missing");
    }

    const { menuOpen, setMenuOpen } = context;

    return(
        <>
            <div className={`w-full h-[500px] flex overflow-x-hidden z-0 max-md:flex max-md:flex-col-reverse max-md:h-[700px] ${menuOpen===true?'relative':''}`}>
                <div className={`w-1/2 h-auto p-26 flex flex-col gap-4 max-md:h-1/2 max-md:px-6 max-md:pt-16 max-md:w-full max-md:flex max-md:items-center  max-md:text-center ${menuOpen===true?'relative':''}`}>
                    <h2 className="text-5xl font-normal w-2/3 max-md:w-full max-md:text-4xl">Next generation digital banking</h2>
                    <p className="font-light">
                        Take your financial online.Your EasyBank account will be your one step shop for spending,saving,budgeting,investing,and much more.
                    </p>
                    <Button text="Request Invite"/>
                </div>

                <div className="w-1/2 h-auto bg-no-repeat bg-cover bg-[url(/bg-intro-desktop.svg)] bg-[calc(50%+156px)_calc(50%-85px)] max-md:w-full max-md:bg-cover max-md:h-1/2 max-md:bg-[url(/bg-intro-mobile.svg)] max-md:bg-[calc(50%-10px)_50%]">
                    <img
                        src="/images/image-mockups.png"
                        alt="Overlay"
                        className={`${menuOpen=== true?'max-md:hidden':'absolute top-[-30px] right-[-85px] w-[500px] h-auto pointer-events-none z-10 max-md:right-0 max-md:top-[-80px]'}`}
                    />
                </div>

                <div className={`${menuOpen===true?'max-md:w-full max-md:h-[800px] max-md:absolute max-md:inset-0 max-md:bg-gradient-to-b max-md:from-black/80 max-md:to-transparent max-md:pointer-events-none max-md:z-20':''}`}/>

                <div className={`${menuOpen===true?'max-md:absolute max-md:w-9/10 max-md:h-[300px] max-md:bg-white max-md:rounded-md max-md:z-50 max-md:m-6 max-md:top-10  max-md:flex max-md:justify-between max-md:items-center max-md:gap-6':'hidden '}`}>
                    <ul className="list-none flex items-center flex-col justify-between w-full h-full px-6 py-6 text-[hsl(233,26%,24%)]">
                        <li>
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>
                                Careers
                            </NavLink>
                        </li> 
                    </ul>
                </div>
            </div>
            
        </>
    )
}