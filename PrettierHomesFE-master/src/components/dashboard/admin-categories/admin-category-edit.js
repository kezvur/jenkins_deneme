import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { BsFillPlusSquareFill } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import { swalAlert } from '../../../helpers/functions/swal';
import { updateAdminCategory } from '../../../api/category-service';
import ButtonLoader from '../../common/button-loader';
import { isInValid, isValid } from '../../../helpers/functions/forms';
import "../../dashboard/admin-categories/admin-category.scss";
import Spacer from '../../common/spacer';

const AdminCategoryEdit = () => {

  
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([])
  const { currentRecord } = useSelector((state) => state.misc);

console.log(currentRecord)


  const initialValues = {
    ...currentRecord,
    // title:"",
    // slug:"",
    // icon:"",
    // seq:"",
    // isActive:""
  };
  
  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    slug: Yup.string().required("Required"),
    icon: Yup.string().required("Required"),
    seq: Yup.string().required("Required"),
    isActive: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const resp = await updateAdminCategory(values);
      setCategories(resp.data);      
    } catch (err) {
      
      const errMsg = err.response.data.message;
      swalAlert(errMsg, "error");
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  console.log(formik.values)

  useEffect(()=> {
    //loadData(),
  },[]);

  return (
    <div>
      <Container className="categoryEdit">
      <Spacer height={30} />
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Row className="justify-content-center">
            <Col md={12}>
              <Form.Group className=" mb-20" controlId="title">
                <Form.Label className="mb-0 label">title</Form.Label>
                <Form.Control
                  className="control"
                  type="text"
                  placeholder="title"
                  {...formik.getFieldProps("title")}
                  isInvalid={isInValid(formik, "title")}
                  isValid={isValid(formik, "title")}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.title}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-20" controlId="slug">
                <Form.Label className="mb-0 label">Slug</Form.Label>
                <Form.Control
                  className="control"
                  type="text"
                  placeholder="slug"
                  {...formik.getFieldProps("slug")}
                  isInvalid={isInValid(formik, "slug")}
                  isValid={isValid(formik, "slug")}
                />
              </Form.Group>
              <Form.Control.Feedback type="invalid">
                {formik.errors.slug}
              </Form.Control.Feedback>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={4}>
              <Form.Group className="mb-3" controlId="icon">
                <Form.Label className="mb-0 label">Icon</Form.Label>
                <Form.Control
                  className="control"
                  type="text"
                  placeholder="icon"
                  {...formik.getFieldProps("icon")}
                  isInvalid={isInValid(formik, "icon")}
                  isValid={isValid(formik, "icon")}
                />
              </Form.Group>
              <Form.Control.Feedback type="invalid">
                {formik.errors.icon}
              </Form.Control.Feedback>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="sequence">
                <Form.Label className="mb-0 label">Sequence</Form.Label>
                <Form.Control
                  className="control"
                  type="text"
                  placeholder="sequence"
                  {...formik.getFieldProps("sequence")}
                  isInvalid={isInValid(formik, "sequence")}
                  isValid={isValid(formik, "sequence")}
                />
              </Form.Group>
              <Form.Control.Feedback type="invalid">
                {formik.errors.sequence}
              </Form.Control.Feedback>
            </Col>
            
          </Row>
          <div className='d-flex '>
            <Button
              variant="danger"
              type="submit"
              className="btn-category w-25 mx-auto m-4 d-flex justify-content-center "
              disabled={!formik.isValid || loading}
            >
              {loading ? <ButtonLoader /> : ""}DELETE
            </Button>
            <Button
              variant="primary"
              type="submit"
              className="btn-category w-25 mx-auto m-4 d-flex justify-content-center"
              disabled={!formik.isValid || loading}
            >
              {loading ? <ButtonLoader /> : ""}SAVE
            </Button>
          </div>
        </Form>
      </Container>
      <Form>
        <Form.Group className='properties'>
          <label>Properties</label>
          <input/>
          <button><BsFillPlusSquareFill /></button>
          <label>Bedroom</label>
          <button><MdModeEdit /></button>
          <button><RiDeleteBinLine /></button>
          <label>Bathroom</label>
          <button><MdModeEdit /></button>
          <button><RiDeleteBinLine /></button>
          <switch>Status</switch>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AdminCategoryEdit;