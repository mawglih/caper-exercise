import './basket.css';
const CustomerBasket = ({
  products,
  reduceQuantity,
  increaseQuantity,
}) => {
  let totalItems = products.reduce((acc, prod) => acc + prod.quantity, 0);
  let totalPrice = products.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);
  return (
    <div className="basket">
      <h1>Customer Basket</h1>
      {
        products.map(product => {
          return (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <h4>Total quantity:
                <span
                  className="arrows"
                  onClick={() => reduceQuantity(product.id)}
                >
                  &lt;
                </span> 
                {product.quantity}  
                <span
                  className="arrows"
                  onClick={() => increaseQuantity(product.id)}
                >
                  &gt;
                </span>
              </h4>
              <h4>Total Price: ${(product.quantity * product.price).toFixed(2) }</h4>
            </div>
          )
        }
        )
      }
      {totalItems > 0 ? (
        <>
          <h1>Total items:{totalItems}</h1>
          <h1>Total Price: ${totalPrice.toFixed(2)}</h1>
        </>
      ) : (
        <h1>No items in the cart</h1>
      )}
      
    </div>
  );
}
export default CustomerBasket;


