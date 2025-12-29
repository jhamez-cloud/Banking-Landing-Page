import { ArticleCard } from "./ui/ArticleCard"


export const Articles = ()=>{

    return(
        <>
            <div className="w-full h-[550px] pl-26 py-12 flex flex-col justify-between max-md:h-auto max-md:w-full max-md:px-6 max-md:flex max-md:flex-col">
                <h1 className="text-4xl max-md:text-center max-md:mb-8">Latest Articles</h1>

                <div className="w-full h-auto flex justify-start gap-12 max-md:flex max-md:flex-col">
                    <ArticleCard image="/images/image-currency.jpg" caption="By Claire Robinson" heading="Receive money in any currency with no fees" text="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single … "/>

                    <ArticleCard image="/images/image-restaurant.jpg" caption="By Wilson Hutton" heading="Treat yourself without worrying about money " text="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"/>

                    <ArticleCard image="/images/image-plane.jpg" caption="By Wilson Hutton" heading="Take your Easybank card wherever you go" text="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you … "/>

                    <ArticleCard image="/images/image-confetti.jpg" caption="By Claire Robinson" heading="Our invite-only Beta accounts are now live!" text="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... "/>
                </div>
            </div>
        </>
    )
}