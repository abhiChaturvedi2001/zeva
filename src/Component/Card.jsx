import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Star from "./Star";
import { wishList } from "../utils/AppSlice";

const Card = () => {
  const FilterData = useSelector((store) => store.app.filterData);
  const dispatch = useDispatch();

  const handleCart = (id) => {};
  const handleToggle = (id) => {
    dispatch(wishList(id));
  };

  if (FilterData.length === 0) return <h1>loadinggg......</h1>;
  return (
    <>
      <div className="right w-[60rem] grid grid-cols-3 gap-x-3 gap-y-5">
        {FilterData.map((items) => {
          const { image, title, id, price } = items;
          const { rate, count } = items?.rating;
          return (
            <>
              <div
                key={id}
                className="card relative cursor-pointer transition-all duration-100 delay-75 hover:shadow-md px-4 py-5"
              >
                <FaRegHeart onClick={() => handleToggle(id)} />
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
                  onClick={() => handleCart(id)}
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
