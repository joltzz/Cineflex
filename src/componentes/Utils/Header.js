import { Link } from "react-router-dom";

import "./Header.css"

function Header(){
    return (
        <header className="Header">
            <Link to ="/" className="link">
                <p>CINEFLEX</p>
            </Link>
        </header>
    )
}
export default Header;
