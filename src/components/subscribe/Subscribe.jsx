import "./Subscribe.scss"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Subscribe = () => {

    useEffect(()=> {
        Aos.init({ duration: 3000 })
    })

  return (
    <section className="subscribe">
        <div className="subscribe__container wrapper">
            <h2 data-aos="fade-up">Subscribe & get news updates.</h2>
            <p data-aos="fade-up">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi quia nostrum, unde et, eum ducimus ratione alias doloremque accusamus quas facilis error dolorem maxime vitae aliquid fugiat culpa! Molestiae, eum.
            </p>
            <form action="#" data-aos="fade-up">
                <input type="email" placeholder="Enter Your Email" required/>
                <a href="#" className="btn_button">Subscribe</a>
            </form>
        </div>
    </section>
  )
}

export default Subscribe