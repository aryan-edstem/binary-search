import React, { useState } from "react";
import './binarysearch.css';

const Input = () => {
  const [inputArray, setinputArray] = useState()
  const [outputArray, setOutputArray] = useState()
  const [elem, setElem] = useState("");
  const [result, setResult] = useState(-1);
  const [left, setLeft] = useState();
  const [right,setRight] = useState();
  const [executionTime, setExecutionTime] = useState(null);

  const handleInputArray= (e) => {
    const textFieldValue = e.target.value;
    setinputArray(e.target.value);
    setOutputArray(textFieldValue.split(',').map(function(item) {
    return parseInt(item.trim(), 10);
    }));
    }

    
  const binarySearch = (arr, elem) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (arr[mid] === elem) {
        return mid;
      } else if (arr[mid] < elem) {
        low = mid + 1;
        setLeft(low)
      } else {
        high = mid - 1;
        setRight(high);
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
    setExecutionTime(time + ' milliseconds');
  };

  return (
    <div className="container">
        <div className="input-text">
            <label>Input Sorted Array</label>
            <textarea
            type="textarea"
            value={inputArray}
            onChange={handleInputArray}
            />
        </div>
        {/* <div className="input-container">
          {inputArray?.map((value, index) => (
            <div key={index}  className="input-box ">
              {value}
            </div>
          ))}
        </div> */}
      <div>
        <label>Target Element:</label>
        <input
          type="text"
          value={elem}
          onChange={(e) => setElem(e.target.value)}
        /><br/><br/>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <div className="array-container">
          {outputArray?.map((value, index) => (
            <div key={index}  className={`array-box ${index<left || index>right ? 'inactive' :''}`}>
              {value}
            </div>
          ))}
        </div>
        <label>
          Result: {result !== -1 ? `Found at position ${result +1}` : "Not Found"} <br />
          Elapsed time: {executionTime}
        </label>
      </div>
    </div>
  );
};

export default Input;
