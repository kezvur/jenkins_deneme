import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { CiHeart } from "react-icons/ci";
import "./property-card.scss";


const PropertyCard = ({url,price, title, location }) => {
  
  return (
    <Row>
      <Col className=" d-flex m-1">
        <Card className="properties-card col-12 col-md-6 col-lg-4">
          <Card.Img
            className="properties-page-image img-fluit"
            src={url ? url :`https://images.pexels.com/photos/19453408/pexels-photo-19453408/free-photo-of-kent-peyzaj-su-yaz.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`}
            alt={title}
          />
          <span className="heart-icon">
            <CiHeart />
          </span>
          <div className="row-cols-2 properties-card-body ">
            <div className="col-8 p-3 ">
              <p className="fw-bold mb-0">{title}</p>
              <p className="mb-0 ">{location}</p>
            </div>
            <div>
              <div className="properties-card-cost">
                {" "}
                <span> $ </span> {price}
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default PropertyCard;
