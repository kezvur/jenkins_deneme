import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const FeaturedPropertyCard = ({slug,countryName, cityName, districtName, url, title, location, price }) => {
  return (
    <Row>
      <Col className=" d-flex m-1">
        <Card className="properties-card col-12 col-md-6 col-lg-4">
        <Link to={`/property/${slug}`}>
          <Card.Img
            className="properties-page-image img-fluit"
            // src={`/images/featured-properties/${image}`}
            src={url}
            alt={title}
          /> </Link>
          <span className="heart-icon">
            <CiHeart />
          </span>
          <div className="row-cols-2 properties-card-body ">
            <div className="col-8 p-3 ">
              <p className="fw-bold mb-0">{title}</p>
              <p className="mb-0 ">{countryName}/ {cityName}/ {districtName}</p>
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

export default FeaturedPropertyCard;
