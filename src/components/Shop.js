import ItemCard from "./ItemCard";
export default function Shop({ productImages, products, onAddtoCart }) {
    return (
        <section className="shop-section">
            {
                products.map((element, index) => {
                    return <ItemCard productImage={productImages[index]} product={element} key={element.id} onAddToCart={() => {
                        onAddtoCart(false, element, productImages[index])
                    }}></ItemCard>
                })
            }
            {/* <div className="item-card">
                <img alt="Some Image"></img>
                <p>Some Product</p>
                <p>₱ 250.00</p>
                <button>Add To Cart</button>
            </div> */}
        </section>
    );

}