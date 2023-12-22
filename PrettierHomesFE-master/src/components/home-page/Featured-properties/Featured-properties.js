import React, { useEffect, useState } from "react";
import FeaturedPropertyCard from "./Featured-property-card";
import featuredProperties from "../../../helpers/data/featured-properties.json";
import { Col, Row } from "react-bootstrap";
import Spacer from "../../common/spacer";
import { getPopularAdvertList } from "../../../api/adverts-service";

const FeaturedProperties = () => {
const [popularList, setPopularList] = useState([]);



const loadData =async ()=>{

  try{
const resp = await getPopularAdvertList(6);
setPopularList(resp);
console.log(resp)
  }catch(error){
console.log(error)
  }
}

useEffect(() =>{
  loadData();
},[])


//degioskenleri olusturmak

// ihtiyaciniz olan fonksiyonlari olusturaksiniz




  return (
    <div className="featured-properties">
      <h2>Discover Popular Properties </h2>
      <span className="text-success mb-5 ">Featured Properties</span>
      {/* <Spacer/> */}
      <Row>
        {popularList.map((property) => (
          <Col lg={4} md={6} key={property.id}>
            <FeaturedPropertyCard {...property} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedProperties;
