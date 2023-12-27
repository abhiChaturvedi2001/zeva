import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ rate, count }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {rate >= index + 1 ? (
          <FaStar className="text-yellow-500" />
        ) : rate >= number ? (
          <FaStarHalfAlt className="text-yellow-500" />
        ) : (
          <AiOutlineStar className="text-yellow-500" />
        )}
      </span>
    );
  });

  return (
    <>
      <div className="flex items-center">
        {ratingStar}
        <p className="ml-3">({count}) </p>
      </div>
    </>
  );
};

export default Star;
