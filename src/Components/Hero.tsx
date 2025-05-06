import { Button } from "./ui/Button"



export const Hero = ()=>{

    return(
        <>
            <div className="w-full h-[500px] flex overflow-x-hidden z-0">
                <div className="w-1/2 h-auto p-26 flex flex-col gap-4 ">
                    <h2 className="text-5xl font-normal w-2/3">Next generation digital banking</h2>
                    <p className="font-light">
                        Take your financial online.Your EasyBank account will be your one step shop for spending,saving,budgeting,investing,and much more.
                    </p>
                    <Button text="Request Invite"/>
                </div>

                <div className="w-1/2 h-auto bg-no-repeat bg-cover bg-[url(/bg-intro-desktop.svg)] bg-[calc(50%+156px)_calc(50%-85px)]">
                    <img
                        src="/images/image-mockups.png"
                        alt="Overlay"
                        className="absolute top-[-30px] right-[-85px] w-[500px] h-auto pointer-events-none z-10"
                    />
                </div>
 
            </div>
        </>
    )
}