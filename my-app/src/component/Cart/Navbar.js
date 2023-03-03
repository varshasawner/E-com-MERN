import { useEffect, useState } from "react"

export default function Navbar(props) {
	

	return (
		<>
			<div className="navbar">  
				<div className="navItem" onClick={()=>props.setShow(true)}>Shopping</div>
				<div className="navItem" onClick={()=>props.setShow(false)}>Cart <sup>{props.size}</sup></div>

				
			</div>
		</>
	)
}