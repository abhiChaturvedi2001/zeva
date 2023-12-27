import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSearchBar } from "../utils/AppSlice";
const SearchComp = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    setInput(event.currentTarget.value);
    dispatch(addSearchBar(input));
    setShowSuggestions(!!input);
  };
  return (
    <>
      <div className="flex justify-center  items-center h-[20vh]">
        <div className="">
          <input
            className="w-[40rem] max-md:w-[30rem] max-sm:w-[20rem]  px-3 py-3 bg-slate-200"
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Search..."
          />
        </div>
      </div>
    </>
  );
};

export default SearchComp;
