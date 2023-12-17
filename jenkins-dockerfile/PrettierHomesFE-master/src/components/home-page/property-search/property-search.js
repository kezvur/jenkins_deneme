import React, { useState } from "react";
import { Button, ButtonGroup, Form, InputGroup, ToggleButton } from "react-bootstrap";
import "./property-search.scss";
const PropertySearch = () => {

  const [radioValue, setRadioValue] = useState("");

  const handleRadioChange = (value) => {
    setRadioValue(value);
  };

  return (
    <div className="property-search mt-2">
      <Form className="my">
        <h1 className="pb-4">
          Easy Way To Find a <br /> Perfect Property
        </h1>
        <ButtonGroup toggle>
          <ToggleButton
            type="radio"
            variant="light"
            name="radio"
            value="rent"
            checked={radioValue === "rent"}
            onChange={() => handleRadioChange("rent")}
          >
            Rent
          </ToggleButton>
          <ToggleButton
            type="radio"
            variant="light"
            name="radio"
            value="sale"
            checked={radioValue === "sale"}
            onChange={() => handleRadioChange("sale")}
          >
            Sale
          </ToggleButton>
        </ButtonGroup>

        <InputGroup className="mb-3">
          <Form.Control aria-label="property" aria-describedby="property" />
          <Button type="submit" id="search" className="mx-2 bg-success">
            Search
          </Button>
        </InputGroup>
        <div className="mb-3">
          <Form.Check
            inline
            label="House"
            name="group1"
            type="radio"
            id="House"
          />
          <Form.Check
            inline
            label="Apartment"
            name="group1"
            type="radio"
            id="Apartment"
          />
          <Form.Check
            inline
            label="Villa"
            name="group1"
            type="radio"
            id="Villa"
          />
          <Form.Check
            inline
            label="Office"
            name="group1"
            type="radio"
            id="Office"
          />
        </div>
      </Form>
    </div>
  );
};

export default PropertySearch;
