import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Star from "./Star";
import { wishList, addCartData } from "../utils/AppSlice";

const Card = () => {
  // subscribing our store from here
  const dispatch = useDispatch();
  const wishListData = useSelector((store) => store.app.wishListData);
  const FilterData = useSelector((store) => store.app.filterData);

  // handle cart items
  const handleCart = (items) => {
    dispatch(addCartData(items));
  };

  // handle wish list itms
  const handleToggle = (id) => {
    dispatch(wishList(id));
  };

  return FilterData.length === 0 ? (
    <h1>loading......</h1>
  ) : (
    <>
      <div className="right w-[60rem] grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-3 gap-y-5">
        {FilterData.map((items) => {
          const { image, title, id, price } = items;
          const { rate, count } = items?.rating;
          const inWishlist = wishListData.includes(id);
          return (
            <>
              <div
                key={id}
                className="card relative cursor-pointer transition-all duration-100 delay-75 hover:shadow-md px-4 py-5"
              >
                {inWishlist ? (
                  <FaHeart
                    className="text-red-700"
                    onClick={() => handleToggle(id)}
                  />
                ) : (
                  <FaRegHeart onClick={() => handleToggle(id)} />
                )}
                <img
                  className="w-[100px] h-[150px] mx-auto"
                  src={image}
                  alt=""
                />
                <div>
                  <h1 className="mt-4">{title}</h1>
                  <h4> RS. {price}</h4>
                  <Star rate={rate} count={count} />
                </div>
                <button
                  onClick={() => handleCart(items)}
                  className="border-2 w-full uppercase font-bold  px-3 btn invisible py-2 mt-5"
                >
                  Add to cart
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card;
