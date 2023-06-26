import { Route, Routes, useSearchParams } from "react-router-dom";
import "./styles/page-style.css";
import "./styles/shop-style.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import { useEffect, useState } from "react";
import ProductCart from "./components/ProductCart";
import ItemCart from "./components/ItemCart";
import uniqid from 'uniqid';
import blue from "./components/assets/images/blue.png";
import colorado from "./components/assets/images/colorado.png";
import everything from "./components/assets/images/everything.gif";
import ghanna from "./components/assets/images/ghana.png";
import gradient from "./components/assets/images/gradient.png";
import mindanao from "./components/assets/images/mindanao.png";
import reginald from "./components/assets/images/reginald.png";
import shipwithlegs from "./components/assets/images/shipwithlegs.png";
import theVoid from "./components/assets/images/void.png";

function App() {
  let productImages = [blue, colorado, everything, ghanna, gradient, mindanao, reginald, shipwithlegs, theVoid];
  let [cartItems, setCartItems] = useState([]);
  let [products, setProducts] = useState([]);
  let [isHidden, setIsHidden] = useState(true);
  let [isCartHidden, setIsCartHidden] = useState(true);
  let [currentProduct, setCurrentProduct] = useState({ productName: "", productPrice: "" });
  let [currentImage, setCurrentImage] = useState(null);
  let [productQuantity, setProductQuantity] = useState(0)
  function onAddNewItem(condition, product, productImage) {
    setIsHidden(condition);
    if (product) {
      setCurrentProduct(product);
    }
    if (productImage) {
      setCurrentImage(productImage);
    }
  }
  function onAddToCart(currentProduct, quantity) {
    let products = []
    let newQuantity = quantity;
    if (quantity > 1000) {
      newQuantity = 1000;
    }
    for (let index = 0; index < newQuantity; index++) {
      let newObject = structuredClone(currentProduct)
      products = [...products, newObject]
    }
    let newCartItems = [...cartItems, [...products]];
    setProductQuantity(productQuantity + parseInt(newQuantity));
    setCartItems(newCartItems);
  }
  function onShowCart(condition) {
    setIsCartHidden(condition);
  }

  useEffect(() => {
    let productNames = ["The Color Blue", "The State of Colorado", "Everything", "Consitution of Ghanna", "Unpleasant Gradient", "The Island of Mindanao", "Reginald", "Ship with Legs", "The Void"];
    let productPrices = ["2000", "75", "9999999", "Tree Fiddy", "0.34", "10000", "999", "24321", "9829230123929"];
    let initialProducts = [];
    productNames.forEach((element, index) => {
      let newObject = {
        'productName': element,
        'productPrice': productPrices[index],
        'id': uniqid()
      }
      initialProducts = [...initialProducts, newObject];
    });
    setProducts(structuredClone(initialProducts));
  }, []);
  return (
    <div className="main-page">
      <Header cartItems={productQuantity} setCarHidden={onShowCart}></Header>
      <ProductCart currentImage={currentImage} onAddToCart={onAddToCart} onClose={onAddNewItem} isHidden={isHidden} currentProduct={currentProduct}></ProductCart>
      <ItemCart cartItems={cartItems} onShowCart={onShowCart} isCartHidden={isCartHidden}></ItemCart>
      <Routes>
        <Route path="/" element={<Shop productImages={productImages} products={products} onAddtoCart={onAddNewItem}></Shop>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
