import { useEffect, useState } from "react"
import Navbar from './Navbar'
import Shopping from "./Shopping"
import CartItem from "./CartItem"

export default function Index() {
	const [show, setShow] = useState(true);
	const [cart, setCart] = useState([]);

	const handleClick = (item) =>{
		let isPresent = false;
		cart.forEach((product)=>{
			if(item.id === product.id){
				isPresent = true;
			}
		})

		if(isPresent){
			return;
		}
		setCart([...cart, item])
	}

	return (
		<>
			<Navbar size={cart.length}/>
			<Shopping click={handleClick}/>
			<CartItem />
		
		</>
	)
}