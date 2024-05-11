"use client"
import {products} from "./AllProductsConstant";
import IndividualItem from "../ShoppingRow/IndividualItem";
import Link from "next/link";

function Products(){
    return (
        <div className="my-4">
            <div className="flex flex-wrap">
                {products?.map((item) => (
                        <IndividualItem
                            key={item.id}
                            imgURL={item.imgURL}
                            title={item.title}
                            rating={item.rating}
                            review={item.review}
                            price={item.price}
                        />
                    ))}
            </div>
            <div className="flex justify-center mt-12">
                <Link href={"/products"}><div className="px-3 py-1 border-2 border-black mx-1 hover:bg-black hover:text-white rounded">1</div></Link>
                <Link href={"/products"}><div className="px-3 py-1 border-2 border-black mx-1 hover:bg-black hover:text-white rounded">2</div></Link>
                <Link href={"/products"}><div className="px-3 py-1 border-2 border-black mx-1 hover:bg-black hover:text-white rounded">3</div></Link>
                <Link href={"/products"}><div className="px-3 py-1 border-2 border-black mx-1 hover:bg-black hover:text-white rounded">4</div></Link>
                <Link href={"/products"}><div className="px-3 py-1 border-2 border-black mx-1 hover:bg-black hover:text-white rounded">&#8594;</div></Link>
            </div>
        </div>
    )
}
export default Products;