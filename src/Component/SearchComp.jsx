import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSearchBar } from "../utils/AppSlice";
const SearchComp = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleInput = () => {
    dispatch(addSearchBar(input));
  };
  return (
    <>
      <div className="flex justify-center my-10">
        <input
          onKeyUp={handleInput}
          onChange={(e) => setInput(e.currentTarget.value)}
          className="w-[50rem] bg-slate-100 py-2 px-2"
          type="text"
          placeholder="search your items"
        />
      </div>
    </>
  );
};

export default SearchComp;
