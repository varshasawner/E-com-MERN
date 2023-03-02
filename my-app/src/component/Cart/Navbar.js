import { useEffect, useState } from "react"

export default function Navbar(props) {
	

	return (
		<>
			<div className="navbar">  
				<div>Shopping</div>
				<div>Cart <sup>{props.size}</sup></div>
			</div>
		</>
	)
}