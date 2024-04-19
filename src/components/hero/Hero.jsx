import "./Hero.scss"
import Mob from "../../assets/logo.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Hero = () => {

    useEffect(()=> {
        Aos.init({ duration: 3000 })
    })
  return (
    <section className="hero">
        <div className="hero__container wrapper">
            <div className="hero__left" data-aos="fade-right">
                <img src={Mob} alt="Hero" />
            </div>

            <div className="hero__right" data-aos="zoom-in-up">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, deserunt?</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut sequi dolore vitae earum, unde ipsa officia veritatis quae eligendi, nesciunt voluptatibus asperiores, blanditiis sapiente explicabo ratione odit voluptates quasi? Quisquam?
                </p>
                <a href="#" className="btn_button">
                    Try for free
                </a>
            </div>
        </div>

    </section>
  )
}

export default Hero