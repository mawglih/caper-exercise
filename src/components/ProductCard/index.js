import './product.css';

const Product = ({
  thumbnail,
  name,
  qrUrl,
  id,
  price,
  addToCart,
}) => {
  return (
    <div className="card">
      <div className="content">
        <h2>{name}</h2>
        <img src={thumbnail} alt=""/>
        <img className="qrcode" src={qrUrl} alt=""/>
        <h3>${price}.00</h3>
        <button onClick={() => addToCart(id, price, name)}>Add to cart</button>
      </div>
    </div>
  )
}
export default Product;
