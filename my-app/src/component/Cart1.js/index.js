import { useEffect, useState } from "react";
import CartList from "./CartList";
import Header from "./Header";
import ProductList from "./ProductList";

export default function Cart1() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [active, setActive] = useState(true);
  const [msg, setMsg] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setProduct(res);
        console.log(res);
      });
  }, []);

  const addToCart = (data) => {
    // console.log(data)
    if (cart.includes(data)) {
      setMsg(true);
			setTimeout(()=>{
				setMsg(false);
			},2000)
    } else {
      setCart([...cart, {...data, quantity:1}]);
      console.log(cart)
    }
  };

  return (
    <>
      <Header
        cartCount={cart.length}
        show={(value) => setActive(value)}
        msg={msg}
      />
      {active ? (
        <ProductList products={product} fun={addToCart} />
      ) : (
        <CartList cart={cart} />
      )}
    </>
  );
}
