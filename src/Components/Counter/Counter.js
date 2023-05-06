import React from "react";
import "./Counter.css"

const Counter = () => {
  return (
    <div className="counter-flex-div">
      <div className="counter-width-div">
        <div className="counter-main-div">
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
