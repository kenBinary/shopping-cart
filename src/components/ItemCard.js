export default function ItemCard({ image, product, onAddToCart }) {
    return (
        <div className="item-card">
            <div className="image-container">
                <img alt="Some Image"></img>
            </div>
            <div className="item-action">
                <p>{product.productName}</p>
                <p>₱ {product.productPrice}</p>
                <button onClick={() => {
                    onAddToCart(product)
                }}>Add To Cart</button>
            </div>
        </div>
    );
}