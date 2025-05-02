interface button {
    text:string;
    /* color:string; */
}

export const Button = (props:button)=>{

    return(
        <button className="w-30 h-8 rounded-2xl bg-gradient-to-r from-[hsl(136,65%,51%)] to-[hsl(192,70%,51%)] text-white px-2">
            {props.text}
        </button>
    )
}