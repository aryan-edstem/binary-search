import React, { useState } from "react";
import "./binarysearch.css";
import { useDispatch } from "react-redux";
import {
  setHigh,
  setLow,
  setArray,
  setResult,
  setExecutionTime,
  incrementNoOfIterations,
  setNoOfIterations,
} from "../redux/BinarySlice";

const Input = () => {
  const [outputArray, setOutputArray] = useState();
  const [elem, setElem] = useState("");
  const dispatch = useDispatch();

  const handleInputArray = (e) => {
    const textFieldValue = e.target.value;
    const testarray = textFieldValue
      .split(",")
      .filter((item) => item.trim() !== "")
      .map((item) => parseInt(item.trim(), 10));
    setOutputArray(testarray);
    dispatch(setArray(testarray));
  };

  const binarySearch = (arr, elem) => {
    const start = performance.now();
    dispatch(setArray(outputArray));
    let low = 0;
    dispatch(setLow(low));
    let high = arr.length - 1;
    dispatch(setHigh(high));
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const searchIteration = async () => {
      while (low <= high) {
        dispatch(incrementNoOfIterations(1));
        let mid = Math.floor((low + high) / 2);
        //await delay(500);
        if (arr[mid] === elem) {
          dispatch(setLow(mid));
          dispatch(setHigh(mid));
          dispatch(setResult(mid));
          const end = performance.now();
          const time = end - start;
          dispatch(setExecutionTime(time));
          return mid;
        } else if (arr[mid] < elem) {
          low = mid + 1;
          dispatch(setLow(low));
        } else {
          high = mid - 1;
          dispatch(setHigh(high));
        }
      }
      dispatch(setResult(-1));
      return -1;
    };
    return searchIteration();
  };

  const handleSearch = () => {
    const targetNumber = parseInt(elem, 10);
    dispatch(setNoOfIterations(0));
    const index = binarySearch(outputArray, targetNumber);
    setResult(index);
  };

  return (
    <div className="input-container">
      <div className="input-text">
        <label>Input Sorted Array</label>
        <textarea type="textarea" onChange={handleInputArray} />
      </div>
      <div>
        <label>Target Element:</label>
        <input
          type="text"
          value={elem}
          onChange={(e) => setElem(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Input;
