

export default function ProductList(props) {
  console.log(props.products);
  return (
    <>
      <h1>Product List</h1>
      <main className="main">
        {props.products.map((item) => {
          return (
            <div className="sections">
              <img src={item.image} height={150} width={150} />
              <p className="title">{item.title}</p>
              <p>
                <b>{item.price}</b>
              </p>
              <button
                onClick={() => {
                  props.fun(item)
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </main>
    </>
  );
}
