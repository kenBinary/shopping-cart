export default function ItemCart({ onShowCart, isCartHidden }) {
    let cartHidden = (isCartHidden) ? "hidden" : "";
    let cartClass = `item-cart ${cartHidden}`;
    return (
        // <section className="item-cart">
        <section className={cartClass}>
            <div className="cart-widget">
                <div className="close-widget" onClick={() => {
                    onShowCart(true)
                }}>X</div>
                <div className="close-cart-items">Cart</div>
                <div className="cart-items">
                    <div className="cart-products">
                        <img alt="some image"></img>
                        <p>product name</p>
                        <p>product total price</p>
                    </div>
                </div>
                <div className="item-total">Total: </div>
                <button className="checkout">
                    Checkout
                </button>
            </div>
        </section>
    );
}