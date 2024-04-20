import "./Dashboard.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { LuUserCircle2 } from "react-icons/lu";
import { LuLayoutList } from "react-icons/lu";
import 'bootstrap/dist/css/bootstrap.min.css'

const Dashboard = () => {

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
                <LuUserCircle2/>
                <span>User</span>
              </div>
              <div className="dashboard__content-card-body">
                <div className="dashboard__content-body">
                  <span><b>Email:</b></span>
                  <span>email@user.com</span>
                </div>
                <div className="dashboard__content-body">
                  <span><b>User name:</b></span>
                  <span>username</span>
                </div>
                <div className="dashboard__content-body-btn">
                  <button className="btn btn-primary">View Profile</button>
                </div>
              </div>
            </article>

            <article className="dashboard__container-card" data-aos="fade-left">
              <div className="dashboard__content-card-title">
                <LuLayoutList/>
                <span>Portfilios and Assets</span>
              </div>
              <div className="dashboard__content-card-body">
                <div className="dashboard__content-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto culpa voluptates
                  </p>
                </div>
                <div className="dashboard__content-body-btn">
                  <button className="btn btn-primary">View Portfolios</button>
                  <button className="btn btn-primary">View Assets</button>
                </div>
              </div>
            </article>

          </div>
        </div>
    </ section>
  )
}

export default Dashboard