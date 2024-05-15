
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndent } from '@fortawesome/free-solid-svg-icons'

function SingleProductInfo(props) {
  const { individualPageItem } = props;

  return (
    individualPageItem?.id ? 
    <div className="flex flex-wrap">
      <div>
        <img src={individualPageItem.imgURL} className="h-96 w-96"></img>
      </div>
      <div className="mt-2 ml-6">
        <h1 className="font-black text-4xl flex flex-wrap">
          {individualPageItem.title}
        </h1>
        <h1 className="mt-4 font-bold text-gray-700 text-xl">
          {individualPageItem.price}
        </h1>
        <select className="mt-4 px-1 py-1 rounded border border-black">
          <option>Select Size</option>
          <option>XXL</option>
          <option>XL</option>
          <option>Large</option>
          <option>Medium</option>
          <option>Small</option>
        </select>
        <h1 className="mt-4 font-extrabold tracking-wide text-xl">
          Product Details
          <FontAwesomeIcon icon={faIndent} className='ml-2 text-orange-600' />
        </h1>
        <p className="flex flex-wrap w-72 text-left mt-4">
          Give your summer wardrobe a style upgrade with HRX Men's Active
          T-shirt. Team it with a pair of shorts for your morning workout or a
          denims for an evening out with the guyz.{" "}
        </p>
        <div className="mt-6 text-white bg-gray-700  hover:bg-black px-2 py-2 rounded-3xl flex justify-center w-1/2">
          <input
            type="button"
            value="Add to Cart"
            className="hover:cursor-pointer"
          ></input>
        </div>
        <div className="pt-6"></div>
      </div>
    </div> 
    : ""
  );
}
export default SingleProductInfo;
