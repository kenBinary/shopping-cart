import { Route, Routes } from "react-router-dom";
import "./styles/page-style.css";
import "./styles/shop-style.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import { useEffect, useState } from "react";
import ProductCart from "./components/ProductCart";
import ItemCart from "./components/ItemCart";
import uniqid from 'uniqid';

function App() {
  let [cartItems, setCartItems] = useState([]);
  let [products, setProducts] = useState([]);
  let [isHidden, setIsHidden] = useState(true);
  let [isCartHidden, setIsCartHidden] = useState(true);
  let [currentProduct, setCurrentProduct] = useState({ productName: "", productPrice: "" });
  function onAddNewItem(condition, product) {
    setIsHidden(condition);
    if (product) {
      setCurrentProduct(product);
    }
  }
  function onAddToCart(currentProduct, quantity) {
    let products = []
    for (let index = 0; index < quantity; index++) {
      let newObject = structuredClone(currentProduct)
      products = [...products, newObject]
    }
    // let newCartItems = [...cartItems, currentProduct];
    let newCartItems = [...cartItems, ...products];
    console.log(quantity)
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
      <Header cartItems={cartItems} setCarHidden={onShowCart}></Header>
      <ProductCart onAddToCart={onAddToCart} onClose={onAddNewItem} isHidden={isHidden} currentProduct={currentProduct}></ProductCart>
      <ItemCart onShowCart={onShowCart} isCartHidden={isCartHidden}></ItemCart>
      <Routes>
        <Route path="/" element={<Shop products={products} onAddtoCart={onAddNewItem}></Shop>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
