"use client"
import FirstDesign from "./HighlightedSectionComponent/FirstDesign";
import SecondDesign from "./HighlightedSectionComponent/SecondDesign";

function HighlightedSection(){
    return(
        <>
            <FirstDesign
                title="Running Sports Shoes"
                description="Handpicked collection of vibrant running shoes."
                imageUrl="/Images/running.jpg"
                style="h-96"
            />
            <SecondDesign/>
            <FirstDesign
                title="Casual Wear"
                description="Go casual the modish way with our exhaustive fleet of T-shirts for men."
                imageUrl="/Images/tshirt.jpg"
                style="h-96 w-max"
            />
        </>

    )
}

export default HighlightedSection;