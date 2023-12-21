import React, { useState } from "react";
import './binarysearch.css';

const Input = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [elem, setElem] = useState("");
  const [result, setResult] = useState(null);

  const binarySearch = (arr, elem) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (arr[mid] === elem) {
        return mid;
      } else if (arr[mid] < elem) {
        low = mid + 1;
      } else {
        high = mid - 1;
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
      <div>
        <label>Sorted Array: {array}</label>
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
            <div key={index}  className="array-box">
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
