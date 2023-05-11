import { useState } from "react";
import ProductList from "./ProductList";
import CartList from "./CartList";

export default function Header(props) {
  
  return (
    <>
      <div style={{ display: "flex", justifyContent:"space-between"}}>
        <div className="cursor">
        <a onClick={()=>{props.show(true)}}>Shopping Cart</a> 
          </div>
        <div className="cursor">
        <a onClick={()=>{props.show(false)}}>Cart</a> 
        <sup>{props.cartCount}</sup>
        </div>
      </div>
      {props.msg ?  <span className="errMsg">Item is already in cart</span> : ""}
     
    </>
  );
}


