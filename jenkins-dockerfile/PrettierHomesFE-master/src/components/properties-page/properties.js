import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import PropertyForm from "./property-form";
import PropertyCard from "./property-card";
import featuredProperties from "../../helpers/data/featured-properties.json";
import { getAllAdvertsForUsers } from "../../api/adverts-service";
import { useLocation, useParams } from "react-router-dom";

const Properties = () => {
  const { state } = useLocation();  
  const { atype,categoryId, search } = state || {};
  const [data, setData]= useState([]);
  const [page, setpage]= useState(0);
  const [size, setSize]= useState(10);
  const [sort, setSort]= useState('title');
  const [type, setType]= useState("DESC");
  const [q, setQ]= useState(search || "");
  const [category, setCategory]= useState(categoryId || "");
  const [advertType, setAdvertType]= useState(atype || "");
  const [priceStart, setpriceStart]= useState('');
  const [priceEnd, setpriceEnd]= useState('');
  const [status, setStatus]= useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [flag, setFlag]=useState(false);
  
const loadData = async ()=>{
  console.log(page, size,sort, type,q,category,advertType,priceStart,priceEnd,status, country,city,district)
  try{
    const resp = await getAllAdvertsForUsers(page, size,sort, type,q,category,advertType,priceStart,priceEnd,status,country,city,district);
    //0, 10,"title","DESC",search,category,atype,"","",""
    setData(resp.content)   
  }catch(error){
console.log(error)
  }
}

useEffect(() =>{
  loadData();
}, [flag])

const getFeatures =(type, category, search,country, city,districts,priceMin,priceMax)=>{
  console.log(type, category, search,country, city,districts,priceMin,priceMax)
  setDistrict(districts)
  setpriceEnd(priceMax)
  setpriceStart(priceMin)
  setCity(city)
  setCountry(country)
  setCategory(category)
  setAdvertType(type)
  setQ(search)
  setFlag(!flag) 
}


const [showPropertyForm, setShowPropertyForm] = useState(false);
const togglePropertyForm = () => {
  setShowPropertyForm(!showPropertyForm);
};

  return (
    <Container>
      <Button className="d-md-none btn btn-success " onClick={togglePropertyForm}>Filter</Button>

      {showPropertyForm && (
        <Row>
          <Col md={4} className="d-md-none mb-5">
            <PropertyForm search={search} type={atype} category={categoryId} getFeatures={getFeatures}/>
          </Col>
        </Row>
      )}
      <Row>
        <Col md={4} className="d-none d-md-block">
          <PropertyForm search={search} type={atype} category={categoryId} getFeatures={getFeatures}/>
        </Col>
        <Col md={8} className="d-flex flex-wrap ">
          
        {data.map((property) => (
          <Col md={6}   key={property.id}>
            <PropertyCard {...property} />
          </Col>
        ))}
        </Col>

      </Row>
    </Container>
  );
};

export default Properties;

// import React from 'react';
// // import './properties-page.scss';
// import { Button, Card, CardGroup, Col, Container, Form, Row } from 'react-bootstrap';
// import {CiSearch} from "react-icons/ci";

// const Properties = () => {
//   return (
//     <Container className='mt-4 mb-4'>
//       <Row>

//         <Col className=' col-12 col-md-4 '>
//           <Form className='properties-page-form'>
//             <Form.Group className="mb-5">
//               <Form.Label>Find your home</Form.Label>
//               <Form.Control className='property-search-input' placeholder=" What are you looking for?" />
//             </Form.Group>

//             <Form.Group className='mb-5'>
//               <Form.Label>Property Status</Form.Label>
//               <Form.Check type="radio" label="All" />
//               <Form.Check type="radio" label="Rent" />
//               <Form.Check type="radio" label="Sale" />
//             </Form.Group>

//             <Form.Group className='mb-5'>
//               <Form.Label>Property Type</Form.Label>
//               <Form.Check type="radio" label="All" />
//               <Form.Check type="radio" label="Houses" />
//               <Form.Check type="radio" label="Apartments" />
//               <Form.Check type="radio" label="Offices" />
//               <Form.Check type="radio" label="Villas" />
//             </Form.Group>

//             <Form.Group className='mb-5'>
//               <Form.Label>Price Range</Form.Label>
//               <Row>
//                 <Col>
//                   <Form.Control className='property-min-input' placeholder="Min" />
//                 </Col>
//                 <Col>
//                   <Form.Control className='property-max-input' placeholder="Max" />
//                 </Col>
//               </Row>
//             </Form.Group>

//             <Form.Group className='mb-5'>
//               <Form.Label>Location</Form.Label>
//               <Form.Select className='property-min-input'>
//                 <option>City</option>
//                 <option value="1">One</option>
//                 <option value="2">Two</option>
//                 <option value="3">Three</option>
//               </Form.Select>
//             </Form.Group>

//             <Button className='property-search-button col-12' type="submit">
//              <CiSearch/> Search
//             </Button>
//           </Form>
//         </Col>

//         <Col className='g-2'>
//         <Container className=''>
//           <Row className='row-cols-md-2 g-4'>
//              <img src="https://fastly.picsum.photos/id/947/536/354.jpg?hmac=SWrzGjeEE8tsTHphNhl2ma3QToFb3nDd5hLIbtWX69s" alt="" />
//              <img src="https://fastly.picsum.photos/id/947/536/354.jpg?hmac=SWrzGjeEE8tsTHphNhl2ma3QToFb3nDd5hLIbtWX69s" alt="" />
//           </Row>
//         </Container>
//         </Col>

//       </Row>
//     </Container>
//   );
// };

// export default Properties;
