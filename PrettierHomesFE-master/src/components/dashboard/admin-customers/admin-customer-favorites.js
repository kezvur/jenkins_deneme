import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'
import "./styles/admin-customer-favorites-cart.scss"


const AdminCustomerFavorites = (props) => {



  return (
    <Container>
      <div className="custemFavoriteCart">
        <Row>
          
          <Col sm={12}
            md={4}
            lg={2}
            className="d-flex justify-content-center align-items-center">

            <img
              alt="ddf"
              src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          
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
            <p style={{ fontWeight: 'bold' }}>Villa</p>
          </Col>

          <Col
            sm={12}
            md={4}
            lg={2}
            className="d-flex justify-content-center align-items-center"
          >
            <p style={{ fontWeight: 'bold' }}>For Sale</p>
          </Col>

          <Col>
          
          
          </Col>


          <Col sm={12}
            md={4}
            lg={2}
            className="d-flex justify-content-center align-items-center"
            >
          <button
            sm={12}
            md={4}
            lg={2}
           className="icons  border-0 bg-white">
          <AiOutlineDelete />
          </button>
          </Col>

        </Row>
      </div>
    </Container>
  )
}

export default AdminCustomerFavorites