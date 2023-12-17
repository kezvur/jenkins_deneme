
import React,{useState} from "react";
import { Container } from "react-bootstrap";
import Spacer from "../../components/common/spacer";
import AdminAdvertTypeNew from "../../components/dashboard/admin-advert-types/admin-advert-type-new";
import AdminAdvertTypeEdit from "../../components/dashboard/admin-advert-types/admin-advert-type-edit";
import AdminAdvertTypes from "../../components/dashboard/admin-advert-types/admin-advert-types";
import { useSelector } from "react-redux";





const AdminAdvertTypesPage = () => {
  const { currentOperation } = useSelector((state) => state.misc);
    

    
  return (
    <Container>
       <Spacer height={40} />  
       
     {currentOperation === "new" && ( <> <AdminAdvertTypeNew /> <Spacer /> </> )}
      {currentOperation === "edit" && (<> <AdminAdvertTypeEdit  /><Spacer /> </> )}
      <AdminAdvertTypes  />
    </Container>
  );
};

export default AdminAdvertTypesPage;

