import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./styles/admin-custemer-adverts-cart.scss"
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
const AdvertPropertyCart = (props) => {


  return (
    <Container>
      <div className="custemAdvertCart">
        <Row>
          <Col
            sm={12}
            md={4}
            lg={2}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              alt="ddf"
              src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            {/* <div
              style={{
                border: "1px",
                width: "150px",
                height: "150px",
                backgroundColor: "blue",
              }}
            ></div> */}
          </Col>
          <Col sm={12} md={4} lg={2} className=" text-wrap">
            <p className="fw-bold ">Equestrian Family Home</p>
            <p>California City, CA, USA</p>
            <p>$1400.00</p>
          </Col>
          <Col
            sm={12}
            md={4}
            lg={2}
            className="d-flex justify-content-center align-items-center"
          >
            <p>03/04/2023</p>
          </Col>
          <Col
            sm={12}
            md={4}
            lg={2}
            className="d-flex justify-content-center align-items-center"
          >
            <p className="statusP text-center">Pending</p>
          </Col>
          <Col sm={12} md={4} lg={2} className="">
            <p>
              <IoEyeOutline /> 125
            </p>
            <p>
              <MdFavoriteBorder /> 
              122
            </p>
            <p>
              <CiLocationOn /> 
              452
            </p>
          </Col>
          <Col
            sm={12}
            md={4}
            lg={2}
            className="d-flex justify-content-center align-items-center"
          >
            <button className="icons border-0 bg-white">
              {" "}
              <AiOutlineDelete />
            </button>
            <button className="icons  border-0 bg-white">
              <FiEdit2 />
            </button>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default AdvertPropertyCart;