import React, { useEffect, useState } from "react";
import { swalAlert, swalConfirm } from "../../../helpers/functions/swal";
import {
  deleteAdvertType,
  getByIdAdvertType,
  updateAdvertType,
} from "../../../api/advert-type-service";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { config } from "../../../helpers/config";
import { Form, Formik, useFormik } from "formik";
import {
  setListRefreshToken,
  setOperation,
} from "../../../store/slices/misc-slice";

import "./admin-advert-type-edit.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import { isInValid, isValid } from "../../../helpers/functions/forms";
import ButtonLoader from "../../common/button-loader";


const AdminAdvertTypeEdit = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [adType, setAdType] = useState(props.data);

  // const initialValues = {
  //   title: "",
  // };

  // const validationSchema = Yup.object({
  //   title: Yup.string().required("Required"),
  // });

  // const onSubmit = async (values,formik) => {
  //   setLoading(true);

  //   try {
  //     const resp = await getByIdAdvertType(values);
  //     await updateAdvertType(resp);
  //     setAdType(resp.data);

  //     formik.resetForm();
  //     dispatch(setOperation(null));
  //     dispatch(setListRefreshToken(Math.random()));

  //     swalAlert("AdvertType was updated successfully", "success");
  //   } catch (err) {
  //     const errMsg = err.response.data.message;
  //     swalAlert(errMsg, "error");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleCancel = () => {
  //   formik.resetForm();
  //   dispatch(setOperation(null));
  // };

  // const formik = useFormik({
  //   initialValues,
  //   validationSchema,
  //   onSubmit:(values)=>onSubmit(values,formik),
  // });
  const close =()=>{
    
    props.close();
  }

  return (
    <div className="adTypeEdit"
      
          >
           <input
             placeholder="Title"
             className="m-3 g-3  d-flex justify-content-center rounded"
             style={{ backgroundColor: "#F4F4F4" }}
            
             type="text"
           />

          <div className=" button">
          <Button
              onClick={()=>{
                close()
              }}
              className="close   m-4  "             
            >
             CLOSE
            </Button>
            <Button
              
              className="delete  m-4  "
              disabled={!Formik.isValid || loading}
            >
              {loading ? <ButtonLoader /> : ""}DELETE
            </Button>
            <Button
              type="submit"
              className="save btn-login   m-4"
              disabled={!Formik.isValid || loading}
            >
              {loading ? <ButtonLoader /> : ""}SAVE
            </Button>
          </div>
    </div>
  );
};

export default AdminAdvertTypeEdit;
