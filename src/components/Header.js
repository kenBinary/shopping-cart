import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="page-title">
                <h1>Whimsical Wares</h1>
                <p>wacky stuffy you can buy</p>
            </div>
            <ul className="navigation-bar">
                <li><Link to="/">Go to Shop</Link></li>
                <li><Link to="/contact">Go to Contacts</Link></li>
            </ul>
            <div className="user-actions">
                <input type="text" placeholder="Search"></input>
                <div id="user-login">Login</div>
                <div id="user-cart">cart</div>
            </div>
        </header>
    );
}