import "./Onboard.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from "react-bootstrap/Modal";
import Geocoding from "../geocoding/Geocoding"

import {
    CitySelect,
    CountrySelect
  } from "react-country-state-city";
  import "react-country-state-city/dist/react-country-state-city.css";
  import Button from 'react-bootstrap/Button';
  
const Onboard = () => {
    const [selected, setSelected] = useState("");
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    const [showModal, setShowModal] = useState(false);

  useEffect(()=> {
    Aos.init({ duration: 3000 })
  })

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="dashboard" data-aos="fade-bottom">
        <div className="dashboard__container ">
          <div className="dashboard__container-sidebar">
            <Sidebar/>
          </div>
          <div className="onboard__container-home">
            <article className="onboard__form-card">
                <form action="" className="onboard__form">
                    <div className="onboard__form-input">
                        <label htmlFor="">Company Name:</label>
                        <input type="text" name='company-name' placeholder='Enter company name' required/>
                    </div>
                    <div className="onboard__form-input">
                        <label htmlFor="">Asset Company:</label>
                        <input type="text" name='company-name' placeholder='Enter asset company' required/>
                    </div>
                    <div className="onboard__form-input">
                        <label htmlFor="">Year established:</label>
                        <input type="date" name='company-name' placeholder='Enter Year established' required/>
                    </div>
                    <div className="onboard__form-input">
                        <label htmlFor="">Industry (Sector):</label>
                        <input type="text" name='company-name' placeholder='Enter Industry (Sector)' required/>
                    </div>
                    <div className="onboard__form-input">
                        <label htmlFor="">Asset Category:</label>
                        <input type="text" name='company-name' placeholder='Enter Asset Category' required/>
                    </div>
                    <div className="onboard__form-input">
                        <label htmlFor="">UID:</label>
                        <input type="text" name='company-name' placeholder='Enter UID' required/>
                    </div>
                    <div className="onboard__form-input">
                        <label htmlFor="">Country:</label>
                        <CountrySelect
                            onChange={(e) => {
                            setCountryid(e.id);
                            }}
                            placeHolder="Select Country"
                        />
                    </div>
                    <div className="onboard__form-input">
                        <label htmlFor="">City:</label>
                        <CitySelect
                            countryid={countryid}
                            stateid={stateid}
                            onChange={(e) => {
                            console.log(e);
                            }}
                            placeHolder="Select City"
                            id="city"
                        />
                    </div>
                    <div className="onboard__form-input">
                        <label htmlFor="">Latitude:</label>
                        <input type="text" name='company-name' placeholder='Enter Latitude' required/>
                    </div>
                    <div className="onboard__form-input">
                        <label htmlFor="">Longitude:</label>
                        <input type="text" name='company-name' placeholder='Enter Longitude' required/>
                    </div>
                    <div className="onboard__form-input">
                        <Button className="new-btn" variant="primary" onClick={handleShowModal}>Check map</Button>
                    </div>
                    <div className="onboard__form-input">
                        <Button className="new-btn" variant="success">Create Asset</Button>
                    </div>
                </form>
            </article>
          </div>
        </div>

        <Modal className="bg-transparent" size="lg" show={showModal} onHide={handleCloseModal}>
            <Modal.Body>
            {
                <Geocoding/>
            }
            </Modal.Body>
        </Modal>
    </ section>
  )
}

export default Onboard