import React from "react";

const ButtonGroup = ({ setFilter }) => {
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setFilter("output");
          }}
        >
          Output
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setFilter("input");
          }}
        >
          Input
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setFilter("allofthem");
          }}
        >
          All transactions
        </button>
      </div>
    </div>
  );
};

export default ButtonGroup;
