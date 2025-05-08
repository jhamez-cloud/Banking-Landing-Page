interface card{
    image:string;
    heading:string;
    text:string;
}

export const ContentCard = (props:card)=>{

    return(
        <>
            <div className="w-1/5 h-full flex flex-col justify-evenly items-start max-md:w-full max-md:flex max-md:flex-col max-md:items-center max-md:justify-evenly">
                <img src={props.image} alt="" />
                <h2 className="text-xl font-normal">{props.heading}</h2>
                <p className="font-light">{props.text}</p>
            </div>
        </>
    )
}


