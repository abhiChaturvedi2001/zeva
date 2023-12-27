import React, { useEffect } from "react";
import Filter from "./Filter";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { Base_url } from "../utils/constant";
import { addData, addFilterData } from "../utils/AppSlice";
import SearchComp from "./SearchComp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  // fetching the data using async await
  const fetchData = async () => {
    const data = await fetch(`${Base_url}`);
    const json = await data.json();
    dispatch(addData(json));
    dispatch(addFilterData(json));
  };
  return (
    <>
      <SearchComp />
      <ToastContainer />
      <div className="flex justify-center w-[80%] mx-auto mt-5">
        <Filter />
        <Card />
      </div>
    </>
  );
};

export default ProductPage;
