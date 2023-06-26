import { useState } from "react";

export default function ProductCart({ isHidden, onClose, currentProduct, onAddToCart, currentImage }) {
    let cartHidden = (isHidden) ? "hidden" : "";
    let cartClass = `product-cart ${cartHidden}`;
    let [productQuantity, setProductQuantity] = useState(1);
    function onQuantityChange(count) {
        setProductQuantity(count);
    }
    return (
        <section className={cartClass}>
            <div className="add-product-cart">
                <div onClick={() => {
                    onClose(true)
                }} className="close-product-cart">X</div>
                <div className="product-cart-image">
                    <img alt="Some Image" src={currentImage}></img>
                </div>
                <div className="product-cart-detail">
                    <p>{currentProduct.productName}</p>
                    <p>₱ {currentProduct.productPrice}</p>
                    <label>Quantity</label>
                    <input onChange={(event) => {
                        onQuantityChange(event.target.value)
                    }} placeholder="1" type="number" className="product-cart-quantity" value={productQuantity}></input>
                    <button onClick={() => {
                        onAddToCart(currentProduct, productQuantity)
                    }}>Add To Cart</button>
                </div>
            </div>
        </section>
    );
}