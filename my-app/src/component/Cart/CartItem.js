import { useEffect, useState } from "react"

export default function CartItem(props) {
	const [grandTotal, setGrandTotal] = useState(0);
	const handlePrice = () => {
		let ans = 0;
		props.cart.map((item)=>{
			ans += item.amount * item.price; 
		})
		setGrandTotal(ans); 
	}

	useEffect(()=>{
		
	})

	return (
		<>
			<div ><br/><br/>
				<table border="1" cellPadding={15} cellSpacing={0} align="center">
					<tr>
						<th>S.No.</th>
						<th>Item Name</th>
						<th>Image</th>
						<th>price</th>
						<th> Action</th>
						<th>Total Price</th>
					</tr>
					{
						props.cart.map((item) => {
							return (<tr>
								<td>S.No.</td>
								<td>{item.title}</td>
								<td><img src={item.image} height={100} width={100}/></td>
								<td>{item.price}</td>
								<td> 
									<button>-</button>
									<span> 1 </span>
									<button>+</button>
									</td>
								<td>Total Price</td>
								<td><button>Remove</button></td>
							</tr>)
						})
					}
				</table>
				<h3>Grand Total : <span>Rs. {grandTotal}</span></h3>
			</div>
		</>
	)
}