import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <AiFillStar fontSize="18px" />
          ) : (
            <AiOutlineStar fontSize="20px" />
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;
