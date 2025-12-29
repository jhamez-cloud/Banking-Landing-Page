interface card {
    image:string;
    caption:string;
    heading:string;
    text:string;
}


export const ArticleCard = (props:card)=>{

    return(

        <>
            <div className="w-1/5 h-full flex flex-col gap-y-2 max-md:w-full">
                <figure className="flex flex-col">
                    <img src={props.image} alt="" className="w-full h-[170px] mb-4 rounded-md"/>
                    <figcaption className="px-4 font-light">
                        {props.caption}
                    </figcaption>
                </figure>

                <h2 className="px-4 text-xl font-normal">{props.heading}</h2>
                <p className="px-4 font-light">
                    {props.text}
                </p>
            </div>
        </>
    )
}