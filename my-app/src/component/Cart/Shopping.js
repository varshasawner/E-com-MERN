import { useEffect, useState } from "react";

export default function Shopping(props) {
  const [product, setProduct] = useState([]);

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

  return (
    <>
      <main className="main">
        {product.map((items) => {
          return (
            <div className="sections">
              <img src={items.image} height={150} width={150} />
              <p className="title">{items.title}</p>
              <p>
                <b>{items.price}</b>
              </p>
              <button onClick={() => props.click(items)}>Add to Cart</button>
            </div>
          );
        })}
      </main>
    </>
  );
}
