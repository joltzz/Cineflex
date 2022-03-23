import { Link } from "react-router-dom";

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
