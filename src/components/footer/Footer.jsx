import "./Footer.scss"
import Logo from "../../assets/logo.png"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Footer = () => {

    useEffect(()=> {
        Aos.init({ duration: 3000})
    })

  return (
    <footer className="footer">
        <div className="footer__container wrapper" data-aos="fade-up">
            <div className="footer__col">
                <img src={Logo} alt="namsaf" />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
            </div>

            <div className="footer__col">
                <h2>About</h2>
                <a href="#"> about us </a>
                <a href="#"> features </a>
                <a href="#"> news </a>
            </div>
            
            <div className="footer__col">
                <h2>Services</h2>
                <a href="#"> Portfolio analysis </a>
                <a href="#"> Asset Analysis </a>
                <a href="#"> Trend Analysis </a>
            </div>
            
            <div className="footer__col">
                <h2>Support</h2>
                <a href="#"> FAQs </a>
                <a href="#"> support </a>
                <a href="#"> contact us </a>
            </div>

            <div className="footer__col">
                <h3>Socials</h3>
                <div className="footer__icons">
                    <a href="#" className="footer__icon"> <FaFacebook/> </a>
                    <a href="#" className="footer__icon"> <FaInstagram/> </a>
                    <a href="#" className="footer__icon"> <FaLinkedinIn/> </a>
                    <a href="#" className="footer__icon"> <FaTwitter/> </a>
                    <a href="#" className="footer__icon"> <FaYoutube/> </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer