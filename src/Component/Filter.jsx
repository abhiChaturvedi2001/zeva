import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory, filterByRange } from "../utils/AppSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const [rangeValue, setRangeValue] = useState(0);
  const productsData = useSelector((store) => store.app.productsData);

  // this give the category which were available in our products api
  const getUnique = (data, property) => {
    let newVal = data.map((items) => {
      return items[property];
    });

    return (newVal = ["All", ...new Set(newVal)]);
  };
  const getCategory = getUnique(productsData, "category");

  // handle category according to the category we have to be filter
  const handleCategory = (id) => {
    dispatch(filterByCategory(id));
  };

  // it handle according to the price range
  const handleRangeChange = (value) => {
    setRangeValue(value);
    dispatch(filterByRange(value));
  };

  return (
    <>
      <div className="left px-10 py-5 w-[30%]">
        <h4 className="font-bold">Category</h4>
        <ul className="mt-4">
          {getCategory.map((items) => {
            return (
              <li
                key={items}
                onClick={() => handleCategory(items)}
                className="mt-2 hover:underline cursor-pointer"
              >
                {items}
              </li>
            );
          })}
        </ul>
        <div className="mt-5">
          <h4 className="font-bold">Price</h4>
          <p className="mt-4">₹ {rangeValue}</p>
          <input
            value={rangeValue}
            onChange={(e) => handleRangeChange(e.currentTarget.value)}
            step={1}
            min={10}
            max={100}
            type="range"
          />
        </div>
      </div>
    </>
  );
};

export default Filter;
