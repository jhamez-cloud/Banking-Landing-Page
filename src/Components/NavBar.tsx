import { Link } from "react-router-dom"
import { Button } from "./ui/Button"

export const NavBar = ()=>{

    return(
        <>
            <div className="w-full h-[50px] bg-[hsl(0,0%,100%)] flex items-center justify-center px-16 relative z-30">
                <div className="w-1/3">
                    <img src="/logo.svg" alt="logo" />
                </div>

                <div className="w-1/3">
                    <ul className="flex items-center justify-between list-none">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/">Careers</Link></li>
                    </ul>
                </div>
                <div className="w-1/3 flex justify-end">
                    <Button text="Request Invite"/>
                </div>
            </div>
        </>
    )
}