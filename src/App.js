import { Route, Routes } from "react-router-dom";
import "./styles/page-style.css";
import "./styles/shop-style.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Shop from "./components/Shop";

function App() {
  return (
    <div className="main-page">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
