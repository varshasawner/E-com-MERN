import { useEffect, useState } from "react";

export default function CartList(props) {

  const [newCart, setNewCart] = useState([]);

  useEffect(()=>{
    setNewCart(props.cart);
  }, [props.cart])

  const removeCartItem = (i) => {
    newCart.splice(i, 1);
    setNewCart([...newCart])
  }

  return (
    <>
      <h1>Cart List</h1>

      <table className="tab" border="1" cellPadding={15} cellSpacing={0} align="center">
        <tr>
          <th>S.No.</th>
          <th>Item Name</th>
          <th>Image</th>
          <th>price</th>
          <th> Action</th>
          <th>Total Price</th>
        </tr>
        {newCart.map((item, i) => {
          return (
            <tr>
              <td>S.No.</td>
              <td>{item.title}</td>
              <td>
                <img src={item.image} height={100} width={100} />
              </td>
              <td>{item.price}</td>
              <td>
              <button onClick={()=>{
                  const crt = newCart.map((item, index)=>{
                    return i === index ? {...item, quantity: item.quantity-1} : item
                  })
                  setNewCart(crt)
                }}>-</button>
                <span> {item.quantity} </span>
                <button onClick={()=>{
                  const crt = newCart.map((item, index)=>{
                    return i === index ? {...item, quantity: item.quantity+1} : item
                  })
                  setNewCart(crt)
                }}>+</button>
              </td>
              <td>{ item.price * item.quantity }</td>
              <td>
                <button onClick={()=>removeCartItem(i)}>Remove</button>
              </td>
            </tr>
          );
        })}
      </table>
      <p>
        Grand Total = { (newCart.map((item=>item.price * item.quantity))).reduce((sum, currValue)=> sum + currValue, 0 )
        }
      </p>
    </>
  );
}
