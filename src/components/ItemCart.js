import CartProduct from "./CartProduct";
import uniqid from 'uniqid';

export default function ItemCart({ onShowCart, isCartHidden, cartItems }) {
    let cartHidden = (isCartHidden) ? "hidden" : "";
    let cartClass = `item-cart ${cartHidden}`;
    let newCartItems = structuredClone(cartItems);
    let cartProducts = [];
    let totalPrice = 0;
    for (let i = 0; i < newCartItems.length; i++) {
        let newCartProduct = newCartItems[i];
        let newObject = {
            'productName': newCartProduct[0].productName,
            'productPrice': (newCartProduct[0].productPrice * newCartProduct.length),
            'productQuantity': newCartProduct.length,
            'id': uniqid()
        }
        cartProducts = [...cartProducts, newObject]
    }
    cartProducts.forEach((element) => {
        totalPrice += element.productPrice;
    })
    return (
        // <section className="item-cart">
        <section className={cartClass}>
            <div className="cart-widget">
                <div className="close-widget" onClick={() => {
                    onShowCart(true)
                }}>X</div>
                <div className="close-cart-items">Cart</div>
                <div className="cart-items">
                    {
                        cartProducts.map(element => {
                            return <CartProduct key={element.id} productName={element.productName} productPrice={element.productPrice} productQuantity={element.productQuantity}></CartProduct>
                        })
                    }
                    {/* <div className="cart-products">
                        <p>Quantity:</p>
                        <p>product name</p>
                        <p>total Price</p>
                    </div> */}
                </div>
                <div className="item-total">Total: {totalPrice} </div>
                <button className="checkout">
                    Checkout
                </button>
            </div>
        </section>
    );
}