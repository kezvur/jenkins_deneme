import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import "./property-form.scss";

const PropertyForm = () => {
  return (
    <Form className="properties-page-form">
      <Form.Group className="mb-5">
        <Form.Label>Find your home</Form.Label>
        <Form.Control
          className="property-search-input"
          placeholder=" What are you looking for?"
        />
      </Form.Group>

      <Form.Group className="mb-5">
        <Form.Label>Property Status</Form.Label>
        <Form.Check label="All"  name="property-by-status" type="radio" id="All" />
        <Form.Check label="Rent" name="property-by-status" type="radio" id="Rent" />
        <Form.Check label="Sale" name="property-by-status" type="radio" id="Sale" />
      </Form.Group>

      <Form.Group className="mb-5">
        <Form.Label>Property Type</Form.Label>
        
        <Form.Check
          
          label="All"
          name="property-by-type"
          type="radio"
          id="Alli"
        />
        <Form.Check
          
          label="House"
          name="property-by-type"
          type="radio"
          id="House"
        />
        <Form.Check
          
          label="Apartment"
          name="property-by-type"
          type="radio"
          id="Apartment"
        />
        <Form.Check
          
          label="Villa"
          name="property-by-type"
          type="radio"
          id="Villa"
        />
        <Form.Check
          
          label="Office"
          name="property-by-type"
          type="radio"
          id="Office"
        />
      </Form.Group>

      <Form.Group className="mb-5">
        <Form.Label>Price Range</Form.Label>
        <Row>
          <Col>
            <Form.Control className="property-min-input" placeholder="Min" />
          </Col>
          <Col>
            <Form.Control className="property-max-input" placeholder="Max" />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-5">
        <Form.Label>Location</Form.Label>
        <Form.Select className="property-min-input">
          <option>City</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>

      <Button className="property-search-button col-12" type="submit">
        <span className="fs-5">
          <CiSearch />
        </span>{" "}
        Search
      </Button>
    </Form>
  );
};

export default PropertyForm;
