import "./Assetlist.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table';
import Modalcomponent from "../../ui/modal/Modal"
import Button from 'react-bootstrap/Button';

const Assetlist = () => {

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
            <span><b>Asset List</b></span>
            <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Sector</th>
                            <th>Asset Category</th>
                            <th>Company name</th>
                            <th>Parent company</th>
                            <th>UID</th>
                            <th>Year created</th>
                            <th>Region</th>
                            <th>Country</th>
                            <th>{' '}</th>
                            <th>{' '}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Minining</td>
                            <td>Manufacturing</td>
                            <td>Bamburi Cement</td>
                            <td>Bamburi Ltd</td>
                            <td>GHT2827H</td>
                            <td>1979</td>
                            <td>Africa</td>
                            <td>Kenya</td>
                            <td><Button variant="primary">View</Button></td>
                            <td><Modalcomponent/></td>
                        </tr>

                        <tr>
                            <td>Minining</td>
                            <td>Manufacturing</td>
                            <td>Bamburi Cement</td>
                            <td>Bamburi Ltd</td>
                            <td>GHT2827H</td>
                            <td>1979</td>
                            <td>Africa</td>
                            <td>Kenya</td>
                            <td><Button variant="primary">View</Button></td>
                            <td><Modalcomponent/></td>
                        </tr>

                        <tr>
                            <td>Minining</td>
                            <td>Manufacturing</td>
                            <td>Bamburi Cement</td>
                            <td>Bamburi Ltd</td>
                            <td>GHT2827H</td>
                            <td>1979</td>
                            <td>Africa</td>
                            <td>Kenya</td>
                            <td><Button variant="primary">View</Button></td>
                            <td><Modalcomponent/></td>
                        </tr>

                        <tr>
                            <td>Minining</td>
                            <td>Manufacturing</td>
                            <td>Bamburi Cement</td>
                            <td>Bamburi Ltd</td>
                            <td>GHT2827H</td>
                            <td>1979</td>
                            <td>Africa</td>
                            <td>Kenya</td>
                            <td><Button variant="primary">View</Button></td>
                            <td><Modalcomponent/></td>
                        </tr>

                        <tr>
                            <td>Minining</td>
                            <td>Manufacturing</td>
                            <td>Bamburi Cement</td>
                            <td>Bamburi Ltd</td>
                            <td>GHT2827H</td>
                            <td>1979</td>
                            <td>Africa</td>
                            <td>Kenya</td>
                            <td><Button variant="primary">View</Button></td>
                            <td><Modalcomponent/></td>
                        </tr>

                        <tr>
                            <td>Minining</td>
                            <td>Manufacturing</td>
                            <td>Bamburi Cement</td>
                            <td>Bamburi Ltd</td>
                            <td>GHT2827H</td>
                            <td>1979</td>
                            <td>Africa</td>
                            <td>Kenya</td>
                            <td><Button variant="primary">View</Button></td>
                            <td><Modalcomponent/></td>
                        </tr>

                        <tr>
                            <td>Minining</td>
                            <td>Manufacturing</td>
                            <td>Bamburi Cement</td>
                            <td>Bamburi Ltd</td>
                            <td>GHT2827H</td>
                            <td>1979</td>
                            <td>Africa</td>
                            <td>Kenya</td>
                            <td><Button variant="primary">View</Button></td>
                            <td><Modalcomponent/></td>
                        </tr>

                    </tbody>
                </Table>

          </div>
        </div>
    </ section>
  )
}

export default Assetlist