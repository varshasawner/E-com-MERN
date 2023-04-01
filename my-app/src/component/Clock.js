import { useState } from "react"

export default function Clock(){
    const [time, setTime] = useState("");

    // let start = () => {
        const t = new Date().toLocaleTimeString();
        const timing = () => {
            setTime(t);
        }
        const setClock = setInterval(timing, 1000);
    // }

    const stop = () => {
        clearInterval(setClock);
    }


    return ( 
        <>
            <h1>{time}</h1>
            {/* <button onClick={start}>Start</button> */}
            <button onClick={stop}>Stop</button>
        </>
    )
}