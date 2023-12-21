import React from "react";
import Output from "./Output";
import { useState } from "react";
import { useEffect } from "react";

const Input = () => {
    const [inputArray, setInputArray] = useState([]);
    const [elem,setElem] = useState();
    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(0);
    const [mid,setMid] = useState(0);

    const handleInputArray= (e) => {
        console.log(e.target.value);
        const textFieldValue = e.target.value;
        const arrayOfNumbers = textFieldValue.split(',').map(function(item) {
        return parseInt(item.trim(), 10);
        });
        setInputArray(arrayOfNumbers)
        setLow(0);
        setHigh(inputArray.length-1);
        setMid(inputArray.length/2-1);
        }

    const handleSearchElement= (e) => {
        const element = e.target.value;
        setElem(element);
        }    

    const handleSearch = ({inputArray,low,mid,high,elem}) => {
            console.log("search");
            console.log(inputArray[mid]);
            console.log(elem);
            if(inputArray[mid]==elem){
                console.log("element found");
                }
            else if(elem>array[mid]){
                setLow(mid);
                setMid((high-low)/2);
                console.log(low,mid,"low","mid");
                }
            else {
                setHigh(mid);
                setMid(high/2);
                console.log(high,mid,"high","mid");
                }
            
        }

    return(
        <>
            <p>Please enter the Sorted Array</p>
            <input type="textfield" placeholder="Enter the Array" name="input-array" onChange={handleInputArray}></input>
            <p>Please enter the Element to be Searched</p>
            <input type="textfield" placeholder="Enter the Element to search" name="search-element" onChange={handleSearchElement}></input> <br/ > <br />
            <button onClick={handleSearch({inputArray,low,mid,high,elem})}>Search</button>
            {/* <Output array={array} element={elem}/> */}
            <p>Output Array : </p>
            <p>array:{inputArray}</p>
            <p>low:{inputArray[low]}</p>
            <p>mid:{inputArray[mid]}</p>
            <p>high:{inputArray[high]}</p>
            <p>elem:{elem}</p>
        </>
    )
}

export default Input