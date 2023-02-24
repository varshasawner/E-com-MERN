import { useEffect, useState } from "react"

export default function Cart() {
    const [product, setProduct] = useState([]);
    const [cartNumber, setCartNumber] = useState(0);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res) => { return res.json() })
        .then((res) => {
            setProduct(res);
            console.log(res)
        })
    }, [])


    const addItem = (e) => {
        setCartNumber(cartNumber+1)
    }
   

    return (
        <>
            <h1 align="center">Shopping Cart</h1>
            <p>&#128722; <span>{cartNumber}</span></p>
            <main>
                {
                    product.map((items,index) => {
                        return (
                            <div>
                                <img src={items.image} height={150} width={150} />
                                <p>{items.title}</p>
                                <p><b>{items.price}</b></p>
                                <button onClick={()=>addItem(index)}>Add to Cart</button>
                            </div>
                        )
                    })
                }
            </main>

        </>
    )
}