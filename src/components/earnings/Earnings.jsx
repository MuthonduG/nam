import "./Earnings.scss"
import Img from "../../assets/earnings.jpeg"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Earnings = () => {
    useEffect(()=> {
        Aos.init({ duration: 3000})
    })

  return (
    <section className="earnings">
        <div className="earnings__container wrapper">
            <div className="earnings__left">
                <img src={Img} alt="earnings" data-aos="fade-right"/>
            </div>

            <div className="earnings__right" data-aos="zoom-in-out">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, quod autem assumenda sit voluptatum magni asperiores incidunt, harum pariatur accusamus iure omnis nemo molestias nihil consequatur et. Perferendis, nemo ipsam.
                </p>
                <a href="#" className="btn_button">Get Started</a>
            </div>
        </div>
    </section>
  )
}

export default Earnings