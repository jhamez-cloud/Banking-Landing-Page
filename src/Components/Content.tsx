import { ContentCard } from "./ui/Card"


export const Content:React.FC = ()=>{

    return(
        <>
            <div className="w-full h-[500px] bg-[hsl(0,4%,95%)] pl-26 py-14 flex flex-col justify-between max-md:flex max-md:flex-col max-md:p-6 max-md:py-12 max-md:text-center max-md:h-auto">
                <div className="w-full h-1/4 flex flex-col justify-between max-md:flex max-md:flex-col max-md:justify-center max-md:mb-16">
                    <h1 className="text-3xl font-normal">Why choose EasyBank?</h1>
                    <div className="font-light">
                        <p>We leverage Open Banking to turn your bank account into your financial hub.</p>
                        <p>Control your fiinances like never before.</p>
                    </div>
                </div>

                <div className="w-full h-2/3 flex justify-start gap-12 max-md:flex max-md:flex-col">
                    <ContentCard image="/images/icon-online.svg" heading="Online Banking" text="Our modern web and mobile applilcations allow you to keep of your finaces wherever you are in the world."/>

                    <ContentCard image="/images/icon-budgeting.svg" heading="Simple Budgeting" text="See exactly where your money goes each month.Receive notifications when you are close to hitting your limits."/>

                    <ContentCard image="/images/icon-onboarding.svg" heading="Fast Onboarding" text="We dont do branches.Open your accounts in minutes online and start taking control of your finances right away."/>

                    <ContentCard image="/images/icon-api.svg" heading="Open API" text="Manage your savings,investments,pension,and much more from one account.Tracking your money has never been easier."/>
                </div>
            </div>
        </>
    )
}