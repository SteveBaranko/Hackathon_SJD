import logo from './logo.png';

function Navbar(){
    return(
        <nav className="navbar">
            <img className="logo" src={logo} alt="varisong logo"></img>
        </nav>
    )
}

export default Navbar;