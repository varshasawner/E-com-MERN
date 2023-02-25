import { useEffect, useState } from "react"

export default function Cart() {
    const [product, setProduct] = useState([]);
    const [cartNumber, setCartNumber] = useState([]);
    const [visible, setVisible] = useState(false);
    const [count, setCount] = useState(1);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res) => { return res.json() })
        .then((res) => {
            setProduct(res);
            console.log(res)
        })
    }, [])


    const addItem = (item) => {
        // console.log(item);
        if(cartNumber.includes(item)){
            alert("item is already in cart");
        }else{
            setCartNumber([...cartNumber, item]);
            alert("Item Added in cart");
        } 
    }

    const removeCart = (index) =>{
        console.log(index);
        // console.log(cartNumber);
        cartNumber.splice(index, 1);
        setCartNumber([...cartNumber]);
        // console.log(a);
    }

    const increment = (e) => {
        if(count==10){
            alert("You Cant Add More Than 10 Item At a time");
        }else{
            setCount(count+1);
        }
    }
    const decrement = (e) => {
        if(count==0){
            alert("error");
        }else{
            setCount(count-1);
        }
    }

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
                            <th>Action</th>
                            <th>Total Price</th>
                        </tr>
                {cartNumber.map((item, index) => {
                    return <>
                        
                        <tr>
                            <td>01</td>
                            <td>{item.title}</td>
                            <td><img src={item.image} height={100} width={100} /></td>
                            <td>{item.price}</td>
                            <td><button onClick={()=>removeCart(index)}>Remove</button>
                                <button onClick={(e)=>decrement}>-</button>
                                <input type="text" value={count} size="1"/>
                                <button onClick={(e)=>increment}>+</button>
                            </td>
                            <td>{item.price}</td>
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