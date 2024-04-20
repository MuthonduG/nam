import "./Asset.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { LuUserCircle2 } from "react-icons/lu";
import { LuLayoutList } from "react-icons/lu";
import 'bootstrap/dist/css/bootstrap.min.css'
import Map from "../map/Map"

const Asset = () => {

  useEffect(()=> {
    Aos.init({ duration: 3000 })
  })

  return (
    <section className="dashboard" data-aos="fade-bottom">
        <div className="dashboard__container ">
          <div className="dashboard__container-sidebar">
            <Sidebar/>
          </div>
          <div className="dashboard__container-home">
            <article className="dashboard__container-card" data-aos="fade-left">
              <div className="dashboard__content-card-title">
                <span>Asset</span>
              </div>
              <div className="dashboard__content-card-body">
                <div className="dashboard__content-body">
                  <span><b>Company:</b></span>
                  <span>company</span>
                </div>
                <div className="dashboard__content-body">
                  <span><b>UID:</b></span>
                  <span>GH7890K</span>
                </div>
                <div className="dashboard__content-body">
                  <span><b>Country:</b></span>
                  <span>Lexumburg</span>
                </div>
                <div className="dashboard__content-body">
                  <span><b>City:</b></span>
                  <span>Lexumburg</span>
                </div>
                <div className="dashboard__content-body">
                  <span><b>Lat:</b></span>
                  <span>48.5678</span>
                </div>
                <div className="dashboard__content-body">
                  <span><b>Long:</b></span>
                  <span>5.5678</span>
                </div>
                <div className="dashboard__content-body-btn">
                  <button className="btn btn-danger">Generate metrics</button>
                </div>
              </div>
            </article>

            <Map/>

          </div>
        </div>
    </ section>
  )
}

export default Asset