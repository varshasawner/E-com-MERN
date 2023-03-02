import { useEffect, useState } from "react"

export default function Cart() {
	const [product, setProduct] = useState([]);
	const [cartNumber, setCartNumber] = useState([]);
	const [visible, setVisible] = useState(false);
	const [count, setCount] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => { return res.json() })
			.then((res) => {
				setProduct(res);
				console.log(res)
			})
	}, [])

	const addItem = (item) => {
		// console.log(item);
		if (cartNumber.includes(item)) {
			alert("item is already in cart");
		} else {
			setCartNumber([...cartNumber, item]);
			alert("Item Added in cart");
		}
	}

	const removeCart = (index) => {
		console.log(index);
		// console.log(cartNumber);
		cartNumber.splice(index, 1);
		setCartNumber([...cartNumber]);
		// console.log(a);
	}

	function outer() {
		var counter = 1;
		function inner() {
			return counter++;
		}
	}
	outer();

	// useEffect(() => {
	//     console.log(cartNumber)
	// }, [cartNumber])

	return (
		<>
			<h1 align="center">Shopping Cart</h1>
			<p onClick={() => setVisible(!visible)}>&#128722; <span>{cartNumber.length}</span></p>
			{visible && <div><h2>Cart details</h2>
				<table border="1" cellPadding={15} cellSpacing={0} align="center">
					<tr>
						<th>S.No.</th>
						<th>Item Name</th>
						<th>Image</th>
						<th>price</th>
						<th> </th>
						<th>Total Price</th>
					</tr>
					{cartNumber.map((item, index) => {
						return <>
							<tr>
								<td>01</td>
								<td>{item.title}</td>
								<td><img src={item.image} height={100} width={100} /></td>
								<td>{item.price}</td>
								<td><button onClick={() => removeCart(index)}>Remove</button>
									<button onClick={() => {
										const _cart = count.map((item, indexcart) => {
											return index === indexcart ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item 
										})
										setCount(_cart);
									}}>-</button>
									<input type="text" value={count} size="1" id={`box${index}`} />
									<span>1</span>
									<button>+</button>
								</td>
								<td><span id={`totalPrice${index}`}>{item.price}</span></td>
							</tr>
						</>
					}
					)}
				</table>
				<h1>Grand Total : </h1>
			</div>}
			{!visible &&
				<main className="main">
					{
						product.map((items) => {
							return (
								<div className="sections">
									<img src={items.image} height={150} width={150} />
									<p className="title">{items.title}</p>
									<p><b>{items.price}</b></p>
									<button onClick={() => addItem(items)}>Add to Cart</button>
								</div>
							)
						})
					}
				</main>
			}
		</>
	)
}