import { useState } from "react";

export default function Calculator(){
    const [number, setNumber] = useState("");

    const getVal = (e) => {
        setNumber(number + e.target.value);
        console.log(number)
    }

    const result = () => {
        setNumber(eval(number));
    }
    const clear = () => {
        setNumber("");
    }

    return (
        <>
            <h1>Hello, Calculator</h1>
            <input type="text" value={number}/>
            <button onClick={getVal} value="1">1</button>
            <button onClick={getVal} value="2">2</button>
            <button onClick={getVal} value="3">3</button>
            <button onClick={getVal} value="4">4</button>
            <button onClick={getVal} value="+">+</button>
            <button onClick={getVal} value=".">.</button>
            <button onClick={clear}>AC</button>
            <button onClick={result}>=</button>
        </>
    )
}