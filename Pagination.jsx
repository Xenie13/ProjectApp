import React from "react";

const Pagination = ({ setPaged }) => {
  return (
    <div>
      <button
        onClick={() => {
          setPaged("firstOne");
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setPaged("secondOne");
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setPaged("thirdOne");
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setPaged("rest");
        }}
      >
        ...
      </button>
    </div>
  );
};

export default Pagination;
