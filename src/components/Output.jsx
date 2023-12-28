import React from "react";
import { useSelector } from "react-redux";
import './binarysearch.css';
const Output = () => {
  const low = useSelector((state) => state.binary.low);
  const high = useSelector((state) => state.binary.high);
  const outputArray = useSelector((state) => state.binary.array);
  const result = useSelector((state)=>state.binary.result);
  const time = useSelector((state)=> state.binary.executionTime);
  const count = useSelector((state)=>state.binary.noOfIterations)

  return (
    <>
      <p>Output Array : </p>
      <div>
        <div className="array-container">
          {outputArray?.map((value, index) => (
            <div
              key={index}
              className={`array-box ${
                index < low || index > high ? "inactive" : ""
              }`}
            >
              {value}
            </div>
          ))}
        </div>
        <label>
          Result:{" "}
          {result !== -1 ? `Found at position ${result + 1}` : "Not Found"}{" "}
          <br />
          Elapsed time: {time} milliseconds
          <br />
          No.of iterations: {count}
        </label>
      </div>
    </>
  );
};

export default Output;
