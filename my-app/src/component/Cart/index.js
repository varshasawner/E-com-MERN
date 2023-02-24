import { useEffect, useState } from "react"

export default function Cart() {
    const [product, setProduct] = useState([]);
    const [cartNumber, setCartNumber] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res) => { return res.json() })
        .then((res) => {
            setProduct(res);
            console.log(res)
        })
    }, [])


    const addItem = (item) => {
        console.log(item)
        setCartNumber([...cartNumber, item])
    }

    useEffect(() => {
        console.log(cartNumber)
    }, [cartNumber])
   

    return (
        <>
            <h1 align="center">Shopping Cart</h1>
            <p onClick={() => setVisible(!visible)}>&#128722; <span>{cartNumber.length}</span></p>
            {visible && <div>Cart details
                {cartNumber.map(item => 
                    <div>
                        <img src={item.image} height={150} width={150} />
                        <p>{item.title}</p>
                    </div>
                )}
                </div>}
            {!visible && 
            <main>
            {
                product.map((items,index) => {
                    return (
                        <div>
                            <img src={items.image} height={150} width={150} />
                            <p>{items.title}</p>
                            <p><b>{items.price}</b></p>
                            <button onClick={()=>addItem(items)}>Add to Cart</button>
                        </div>
                    )
                })
            }
        </main>
            }
        </>
    )
}