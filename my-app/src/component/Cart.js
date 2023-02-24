export default function Cart(){

    fetch("https://fakestoreapi.com/products")
    .then((res)=>{ return res.json()})
    .then((res)=>{ console.log(res)})

    return (
        <>
            <h1 align="center">Shopping Cart</h1>
            <p>&#128722;</p>
            
        </>
    )
}