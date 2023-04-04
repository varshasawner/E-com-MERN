import { useEffect, useState } from "react"
import Clock from 'react-clock';
// import 'react-clock/dist/Clock.css'
import './../../node_modules/react-clock/dist/Clock.css'

export default function Anologclock(){
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date())
        }, 1000);
    })

    return ( 
        <>
            <div style={{background:"green"}}>
                <Clock value={time}/>
            </div>
        </>
    )
}