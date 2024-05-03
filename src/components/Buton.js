"use client"

import Link from "next/link";

function Button(props){
    const {text} = props;
    return(
        <div className="pt-6">
            <Link href={"/"} className="text-white bg-gray-700  hover:bg-gray-400 px-4 py-2 rounded-3xl">{text} &#8594;</Link>
        </div>
    )
}
export default Button;