"use client"

import SingleProductInfo from "@/components/SingleProduct/singleProductSection";
import { useSelector } from "react-redux";

function SingleProduct(){
    const applicationData = useSelector((state) => state.application)
    const { individualPageItem} = applicationData
    return(
        <div className="mx-64 my-12 flex flex-col">
            <SingleProductInfo
                individualPageItem={individualPageItem}
            />
            <div>2</div>
        </div>
    )
}

export default SingleProduct;