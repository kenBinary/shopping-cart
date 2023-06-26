import { Link } from "react-router-dom";

export default function Header({ cartItems, setCarHidden }) {
    return (
        <header>
            <div className="page-title">
                <h1>Whimsical Wares</h1>
                <p>wacky stuffy you can buy</p>
            </div>
            <ul className="navigation-bar">
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/contact">Contacts</Link></li>
            </ul>
            <div className="user-actions">
                <input type="text" placeholder="Search"></input>
                <div id="user-login">Login</div>
                <div id="user-cart" onClick={()=>{
                    setCarHidden(false)
                }}>
                    cart
                    <div className="num-of-items">
                        {cartItems}
                    </div>
                </div>
            </div>
        </header>
    );
}