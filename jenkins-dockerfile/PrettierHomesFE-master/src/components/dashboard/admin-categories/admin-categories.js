import React, { useState } from "react";
import { FiHome } from "react-icons/fi";
import { FcCheckmark } from "react-icons/fc";
import Table from 'react-bootstrap/Table';

const Categories = () => {
 


  return (
    <div >
      <Table className="table border bg-info">
        <thead >
          <tr>
            <th>Icon</th>
            <th>Name</th> 
            <th>Sequence</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <FiHome />
            </td>
            <td>House</td>
            <td>1</td>
            <td><FcCheckmark /></td>
            <td>
              <button >Select</button>
            </td>
          </tr>
          <tr>
            <td>
              <FiHome />
            </td>
            <td>Villa</td>
            <td>2</td>
            <td><FcCheckmark /></td>
            <td>
              <button >Select</button>
            </td>
          </tr>
          <tr>
            <td>
              <FiHome />
            </td>
            <td>Trash Can</td>
            <td>3</td>
            <td><FcCheckmark /></td>
            <td>
              <button >Select</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Categories;
