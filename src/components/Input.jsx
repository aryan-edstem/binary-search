import React, { useState } from "react";
import './binarysearch.css';

const Input = () => {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50
  ];
  const [elem, setElem] = useState("");
  const [result, setResult] = useState(null);
  const [left, setLeft] = useState();
  const [right,setRight] = useState();

  const binarySearch = (arr, elem) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (arr[mid] === elem) {
        console.log(mid);
        return mid;
      } else if (arr[mid] < elem) {
        low = mid + 1;
        setLeft(low)
        console.log(left);
      } else {
        high = mid - 1;
        setRight(high);
        console.log(high);
      }
    }

    return -1;
  };

  const handleSearch = () => {
    const targetNumber = parseInt(elem, 10);
    if (!isNaN(targetNumber)) {
      const index = binarySearch(array, targetNumber);
      setResult(index);
    } else {
      setResult(null);
    }
  };

  return (
    <div className="container">
        <div className="input-container">
          {array.map((value, index) => (
            <div key={index}  className="input-box ">
              {value}
            </div>
          ))}
        </div>
      <div>
        <label>Target Element:</label>
        <input
          type="text"
          value={elem}
          onChange={(e) => setElem(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <div className="array-container">
          {array.map((value, index) => (
            <div key={index}  className={`array-box ${index<left || index>right ? 'inactive' :''}`}>
              {value}
            </div>

          ))}
        </div>
        <label>
          Result: {result !== null ? `Found at index ${result}` : "Not Found"}
        </label>
      </div>
    </div>
  );
};

export default Input;
