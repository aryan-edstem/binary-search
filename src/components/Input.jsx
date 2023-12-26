import React, { useState } from "react";
import './binarysearch.css';
import { useDispatch } from "react-redux";
import { setHigh, setLow,setMid,setArray,setResult,setExecutionTime } from "../redux/BinarySlice";
import Output from "./Output";


const Input = () => {
  const [outputArray, setOutputArray] = useState()
  const [elem, setElem] = useState("");
  const dispatch = useDispatch();

  const handleInputArray= (e) => {
    const textFieldValue = e.target.value;
    const testarray = textFieldValue.split(',').map((item) => parseInt(item.trim(), 10));
    setOutputArray(testarray);
    dispatch(setArray(testarray));
    }

  const binarySearch = (arr, elem) => {
    dispatch(setArray(outputArray));
    let low= 0
    dispatch(setLow(0));
    let high = arr.length-1
    dispatch(setHigh(arr.length - 1));
    while (low <= high) {
      let mid = Math.floor((low+high)/2)
      dispatch(setMid(Math.floor((low + high) / 2)));
      if (arr[mid] === elem) {
        dispatch(setLow(mid));
        dispatch(setHigh(mid));
        dispatch(setResult(mid));
        return mid;
      } else if (arr[mid] < elem) {
        low = mid + 1;
        dispatch(setLow(mid+1));
      } else {
        high = mid - 1;
        dispatch(setHigh(mid-1))
      }
    }

    return -1;
  };

  const handleSearch = () => {
    const targetNumber = parseInt(elem, 10);
    const start = performance.now();
    const index = binarySearch(outputArray, targetNumber);
    setResult(index);
    const end = performance.now();
    const time = end - start;
    dispatch(setExecutionTime(time));
  };

  return (
    <div className="container">
        <div className="input-text">
            <label>Input Sorted Array</label>
            <textarea
            type="textarea"
            onChange={handleInputArray}
            />
        </div>
      <div>
        <label>Target Element:</label>
        <input
          type="text"
          value={elem}
          onChange={(e) => setElem(e.target.value)}
        /><br/><br/>
        <button onClick={handleSearch}>Search</button>
      </div>
      <Output />
    </div>
  );
};

export default Input;
