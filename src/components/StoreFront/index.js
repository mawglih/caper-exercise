import { useState } from "react";
import { Data } from "../../data";
import CustomerBasket from "../CustomerBasket";
import Product from "../ProductCard";
import './store.css';

const StoreFront = () => {
  const [products, addProducts] = useState([]);
  const addToCart = (id, price, name) => {
    const existingProduct = products.find(product => product.id === id);
    let product = {id, price, name, quantity: 1};
    if(existingProduct) {
      addProducts(products.map(product => product.id === id ? {...product, quantity: product.quantity + 1} : product));
    } else {
      addProducts([...products, product]);
    }
  }
  const reduceQuantity = id => {
    const existingProduct = products.find(product => product.id === id);
    if(existingProduct.quantity > 1) {
      addProducts(products.map(product => product.id === id ? {...product, quantity: product.quantity - 1} : product));
    } else {
      const updateProducts = products.filter(i => i.id !== id)
      addProducts(updateProducts);
    }
  }

  const increaseQuantity = id => {
    addProducts(products.map(product => product.id === id ? {...product, quantity: product.quantity + 1} : product));
  }
  return (
    <div className="container-hor">
      <div className="store-content">
        <h1>Our Products</h1>
        <div className="products">
          {Data.map(el => {
          return(
            <Product
              key = {el.id}
              thumbnail={el.thumbnail}
              name= { el.name}
              qrUrl = {el.qrUrl}
              id={el.id}
              price={el.price}
              addToCart={(id, price, name) => addToCart(id, price, name)}
            />
            )
          })}
        </div>
      </div>
      <CustomerBasket
        products={products}
        reduceQuantity={reduceQuantity}
        increaseQuantity={increaseQuantity}
      />
    </div>
  )
}
export default StoreFront;
