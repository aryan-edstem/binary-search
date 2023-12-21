import React from "react";
import { useState } from "react";

const Output = (props) => {
    const {arrayOfNumbers,elem} = props;
    const [low, setLow] = useState(arrayOfNumbers[0]);

    const handleBinarySearch = () => {
        console.log("output");
    }

    return(
        <>
            <p>Output Array : </p>
            <p>{arrayOfNumbers}</p>
            <p>{low}</p>
            <p>{elem}</p>

        </>
    )
}

export default Output