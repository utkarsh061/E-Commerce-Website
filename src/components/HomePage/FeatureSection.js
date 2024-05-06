"use client"
import Image from "next/image";
import Button from "../Buton";

function FeatureSection(){
    return(
        <div className="bg-gradient-to-l from-gray-700 to-black text-white flex w-full mt-4">
            <div className="w-full pl-48 py-16">
                <h1 className="text-4xl font-bold tracking-wider font-sans py-8">Improve ur Grooving with<br/>Trending Fashion!</h1>
                <p>Success isn't always about hard work <br/>Good Looks plays a major role in it.</p>
                <Button
                    text="Explore Now"
                />
            </div>
            <div className="pr-52 py-16">
                <Image
                      src="/Images/titan.jpg"
                      width="1200"
                      height="1000"
                      alt="thumbnail"
                      className="opacity-75"
                    />
            </div>
        </div>
    )
}

export default FeatureSection;