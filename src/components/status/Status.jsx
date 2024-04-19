import "./Status.scss"
import StatusImg from "../../assets/status.jpeg"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Status = () => {

    useEffect(()=> {
        Aos.init({ duration: 3000 })
    })

  return (
    <section className="status">
        <div className="status__container wrapper">
            <div className="status__left" data-aos="zoom-in-up">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos veniam minus reiciendis, rerum eos quis facilis quasi, eaque iusto et quia facere tempore hic, amet dicta suscipit dolorem iure.
                </p>
                <a href="#" className="btn_button">Know More</a>
            </div>

            <div className="status__right" data-aos="fade-left">
                <img src={StatusImg} alt="status" />
            </div>
        </div>
    </section>
  )
}

export default Status