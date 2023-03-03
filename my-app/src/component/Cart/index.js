import { useEffect, useState } from "react"
import Navbar from './Navbar'
import Shopping from "./Shopping"
import CartItem from "./CartItem"

export default function Index() {
	const [show, setShow] = useState(true);
	const [cart, setCart] = useState([]);
	const [warning, setWarning] = useState(false);

	const handleClick = (item) => {
		let isPresent = false;
		cart.forEach((product) => {
			if (item.id === product.id) {
				isPresent = true;
			}
		})

		if (isPresent) {
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return;
		}
		setCart([...cart, item])
	}

	return (
		<>
			<Navbar size={cart.length} setShow={setShow}/>
			{
				 show ?  <Shopping click={handleClick} /> : <CartItem cart={cart} setCart={setCart}/>
			}
			
			
			{
				warning && <div className="warning">Item Is already Added in cart</div>
			}

		</>
	)
}