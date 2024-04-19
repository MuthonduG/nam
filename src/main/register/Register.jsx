import { useState } from "react";
import "./Register.scss"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    function toggleSignUp() {
        setIsSignUpActive(!isSignUpActive);
    }

    return (
        <section className={`register ${isSignUpActive ? 'right-panel-active' : ''}`}>
            <div className={isSignUpActive ? "register__container" : "register__login"}>
                <form action="#">
                    <h1>{isSignUpActive ? 'Create Account' : 'Sign In'}</h1>
                    <div className="register__socials">
                        <a href="#" className='register__icons'><FaFacebook/></a>
                        <a href="#" className='register__icons'><FcGoogle/></a>
                        <a href="#" className='register__icons'><FaLinkedinIn/></a>
                    </div>
                    <p>{isSignUpActive ? 'Or use your email for registration' : 'Or use your account'}</p>
                    {isSignUpActive && 
                    <input type="text" name='user_name' placeholder='Enter user name' required/>}
                    <input type="email" name='email' placeholder='Enter email' required/>
                    <input type="password" name='password' placeholder='Enter password' required/>
                    {isSignUpActive ? <button>Sign Up</button> : <button>Sign In</button>}
                </form>
            </div>

            <div className="register__overlay-container">
                <div className="register__overlay">
                    <div className="register__overlay_left">
                        <h1>Hello, Welcome to Namsaf</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, odio!</p>
                        <button className="register__overlay_signin" onClick={() => setIsSignUpActive(false)}> Sign In</button>
                    </div>
                    <div className="register__overlay_right">
                        <h1>Welcome Back to Namsaf</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, odio!</p>
                        <button className="register__overlay_signup" onClick={toggleSignUp}> Sign Up</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
