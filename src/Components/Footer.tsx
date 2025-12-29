import { Button } from "./ui/Button"


export const Footer = ()=>{

    return(
        <>
            <div className="w-full h-[150px] bg-[hsl(233,26%,24%)] text-white grid grid-cols-3 grid-rows-1 px-24 py-6 max-md:flex max-md:flex-col max-md:w-full max-md:p-6 max-md:h-auto max-md:items-center">
                <div className="flex flex-col justify-between">
                    <div className="text-white">
                        <img src="/logo.svg" alt="" className="stroke-current max-md:mb-8"/>
                    </div>

                    <div className="flex gap-2">
                        <img src="/images/icon-facebook.svg" alt="" />
                        <img src="/images/icon-youtube.svg" alt="" />
                        <img src="/images/icon-twitter.svg" alt="" />
                        <img src="/images/icon-pinterest.svg" alt="" />
                        <img src="/images/icon-instagram.svg" alt="" />
                    </div>
                </div>

                <div className="grid grid-cols-2 grid-rows-1 max-md:flex max-md:flex-col max-md:items-center max-md:text-center">
                    <ul className="list-none space-y-4 max-md:m-4">
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>

                    <ul className="list-none space-y-4 max-md:mb-8">
                        <li>Careers</li>
                        <li>Support</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="flex flex-col items-end space-y-12 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
                    <Button text="Request Invite"/>
                    <p className="font-extralight text-[rgba(255,255,255,0.5)]">&copy;Easybank. All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}