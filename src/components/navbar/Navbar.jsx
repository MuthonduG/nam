import Logo from "../../assets/logo.png"
import "./Navbar.scss"
import { TiThMenuOutline } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

const Navbar = () => {
    const [ showNav, setShowNav ] = useState(false)



  return (
    <header className="navbar">
        <nav className="navbar__container wrapper">
            <a href="#" className="navbar__logo" onClick={()=> setShowNav(false)}>
                <img src={Logo} alt="logo" />
            </a>

            <ul className={`${ showNav ? "show" : ""}`}>
                <li><a href="#">Product</a></li>
                <li><a href="#">Company</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Blog</a></li>
            </ul>

            <div className="navbar__btns">
                <a href="#">Login</a>
                <a href="#" className="btn_button">Register</a>
            </div>

            <div className="navbar__menu" onClick={()=> setShowNav(!showNav)}>
                {
                    showNav ? <IoMdClose /> : <TiThMenuOutline />
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar