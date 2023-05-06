import React from "react";
import "./Counter.css"
import { useSelector,useDispatch } from "react-redux";
import {incNumber,decNumber} from "../../actions/index"

const Counter = () => {

  const updatedState = useSelector((state)=>state.changeTheNumber)
  const dispatch = useDispatch()

  return (
    <div className="counter-flex-div">
      <div className="counter-width-div">
        <div className="counter-main-div">
          <button
          onClick ={()=>dispatch(incNumber())}
          >+</button>

          <h3>{updatedState}</h3>

          <button
          onClick ={()=>dispatch(decNumber())}
          >-</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
