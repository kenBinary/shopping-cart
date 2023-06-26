export default function CartProduct({productName = "",productPrice = "",productQuantity = ""}) {
    return (
        <div className="cart-products">
            <p>Quantity: {productQuantity}</p>
            <p>{productName}</p>
            <p>Total Price: {productPrice}</p>
        </div>
    )
}