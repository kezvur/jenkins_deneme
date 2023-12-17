import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getUsers } from "../../../api/user-service";
import { FaEdit, FaTimes } from "react-icons/fa";
import "./styles/admin-customers.scss";
import Spacer from "../../common/spacer";
import CustomPaginaton from "../../common/custom-pagination";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { LiaSearchMinusSolid } from "react-icons/lia";

const Customers = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [totalRows, setTotalRows] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [flag, setFlag] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  const [lazyState, setlazyState] = useState({
    first: 0,
    rows: 3,
    page: 0,
    sortField: "",
    sortOrder: "DESC",
  });

  const loadData = async (page, size, sort, type) => {
    try {
      const resp = await getUsers(page, size, sort, type, search);
      console.log(resp);
      setTotalRows(resp.totalElements);
      setTotalPages(resp.totalPages);
      setData(resp.content);
      setPage(resp.number)
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const onPage = (event) => {
    setlazyState((prevState) => {
      return {
        ...prevState,
        first: event.first,
        page: event.first / event.rows,
        rows: event.rows,
      };
    });
  };

  useEffect(() => {
    // zaman ayari yarim saniyr bekle
    loadData(
      page,
      lazyState.rows,
      lazyState.sortField,
      lazyState.sortOrder
    );
  }, [lazyState, search, flag, page]);

  const customPage =(page)=>{
      setPage(page)
  }

  const getOperationButtons = (x) => {
    return (
      <>
        <Button className="btn-link icons" onClick={() => "handleDelete" }>
          <AiOutlineDelete />
        </Button>
        <Button className="btn-link icons " onClick={() => props.edit(x)}>
          <FiEdit2 />
        </Button>
      </>
    );
  };
 console.log(search)

  return (
    <Container className="customerList">
      <Spacer height={20} />
      <div className="inputDiv   ">
        <input
          placeholder="Type something"
          className=""
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
        />
        <button className="iconsSearch">
          <LiaSearchMinusSolid />
        </button>
      </div>
      {/* <DataTable
        lazy
        dataKey="id"
        value={data}
        paginator
        rows={lazyState.rows}
        totalRecords={totalRows}
        loading={loading}
        first={lazyState.first}
        onPage={(event) => onPage(event)}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        rowsPerPageOptions={[5, 10, 15]}
      >    
        <Column field="lastName" header="Name"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="phone" header="Phone"></Column>
        <Column header="Actions" body={getOperationButtons}></Column>
      </DataTable> */}

      <div className="m-3  g-3 p-3 d-flex justify-content-between rounded fw-bold">
        <div className="w-25 text-left ">Name</div>
        <div className="w-25 text-left">Email</div>
        <div className="w-25 text-left"></div>
        <div className="w-25 text-left">Phone</div>
        <div className="w-25 text-end me-4">Action</div>
      </div>
      {data?.map((x) => {
        return (
          <>
            <div
              className="m-3  g-3  d-flex justify-content-between rounded"
              style={{ backgroundColor: "#F4F4F4" }}
            >
              <div className="ms-3 w-25 text-left d-flex align-items-center">
                {x.lastName}
              </div>{" "}
              <div className="w-25 text-left d-flex align-items-center">
                {x.email}
              </div>
              <div className="w-25 text-left d-flex align-items-center phoneColumn ">
                {}
              </div>
              <div className="w-25 text-left d-flex align-items-center phoneColumn ">
                {x.phone}
              </div>
              <div className="w-25 text-end me-4">{getOperationButtons(x)}</div>
            </div>
          </>
        );
      })}
      <p className="ms-4">Total Element : {totalRows}</p>
      <CustomPaginaton
        customPage={customPage}
        totalPages={totalPages}
        page={page}
      />
      {/* kucuk ekranlarda phone column u kaldirilabilir.  */}
      <Spacer height={200} />
      
    </Container>
  );
};

export default Customers;
