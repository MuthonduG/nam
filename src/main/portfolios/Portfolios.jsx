import "./Portfolios.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table';
import Modalcomponent from "../../ui/modal/Modal"
import Button from 'react-bootstrap/Button';

const Portfolios = () => {

  useEffect(()=> {
    Aos.init({ duration: 3000 })
  })

  return (
    <section className="dashboard" data-aos="fade-bottom">
        <div className="dashboard__container ">
          <div className="dashboard__container-sidebar">
            <Sidebar/>
          </div>
          <div className="asset__list">
            <span><b>Portfolio List</b></span>
            <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number of assets</th>
                            <th colSpan={2}>Portfolio Description</th>
                            <th>Creted on</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Button variant="primary">Finance</Button></td>
                            <td>10</td>
                            <td colSpan={2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, excepturi.</td>
                            <td>1997</td>
                            <td><Modalcomponent/></td>
                        </tr>

                        <tr>
                            <td><Button variant="primary">Finance</Button></td>
                            <td>10</td>
                            <td colSpan={2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, excepturi.</td>
                            <td>1997</td>
                            <td><Modalcomponent/></td>
                        </tr>

                        <tr>
                            <td><Button variant="primary">Finance</Button></td>
                            <td>10</td>
                            <td colSpan={2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, excepturi.</td>
                            <td>1997</td>
                            <td><Modalcomponent/></td>
                        </tr>

                        <tr>
                            <td><Button variant="primary">Finance</Button></td>
                            <td>10</td>
                            <td colSpan={2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, excepturi.</td>
                            <td>1997</td>
                            <td><Modalcomponent/></td>
                        </tr>     

                        <tr>
                            <td><Button variant="primary">Finance</Button></td>
                            <td>10</td>
                            <td colSpan={2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, excepturi.</td>
                            <td>1997</td>
                            <td><Modalcomponent/></td>
                        </tr>

                        <tr>
                            <td><Button variant="primary">Finance</Button></td>
                            <td>10</td>
                            <td colSpan={2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, excepturi.</td>
                            <td>1997</td>
                            <td><Modalcomponent/></td>
                        </tr>

                        <tr>
                            <td><Button variant="primary">Finance</Button></td>
                            <td>10</td>
                            <td colSpan={2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, excepturi.</td>
                            <td>1997</td>
                            <td><Modalcomponent/></td>
                        </tr>

                    </tbody>
                </Table>

          </div>
        </div>
    </ section>
  )
}

export default Portfolios