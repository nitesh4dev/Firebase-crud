import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import { useContext } from "react";
import { globalData } from "../App"
import { useNavigate } from "react-router-dom";
import "../Styles/students.css";
import AddStudents from "./AddStudent";
import { HiOutlineUpload } from "react-icons/hi";
import { BsDownload } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Students = () => {
  const [show, setShow] = useState(false);

  const { students, deleteStudent, setEnableEdit } = useContext(globalData);
  const navigate = useNavigate();

  const navigateToForm = (id) => {
    const editingStudent = students.find((val) => val.id === id);
    navigate("/dashboard/edit", { state: editingStudent });
    setEnableEdit(true);
  }

  return (
    <div className="students">
      <div className="currPage">
        <h6>Dashboard/Manage Student</h6>
      </div>
      <div className="openForm">
        <button onClick={() => setShow(true)} >Add student using Form +</button>
      </div>
      <div className="excelFile">
        <button>Upload Excel File <HiOutlineUpload /></button>
      </div>
      <div className="container">
        <div className="searchInputs">
          <input type="text" placeholder="Search by Name or ID-I" />
          <select name="" id="">
            <option value="" selected disabled hidden>Select Class</option>
            <option value="a">a</option>
            <option value="b">b</option>
          </select>
          <select name="" id="">
            <option value="" selected disabled hidden>Select Division</option>
            <option value="">a</option>
            <option value="">b</option>
            <option value="">c</option>
          </select>
          <select name="" id="">
            <option value="" selected disabled hidden>Select Bus NO</option>
            <option value="">a</option>
            <option value="">b</option>
            <option value="">c</option>
          </select>
          <select name="" id="">
            <option value="" selected disabled hidden>Select Admission Status</option>
            <option value="">a</option>
            <option value="">b</option>
            <option value="">c</option>
          </select>

        </div>
        <div className="head">
          <h5>Students Data</h5>
          <button>Download QR Code <BsDownload /></button>
        </div>

        <div className="table">
          <Table striped bordered>
            <thead>
              <tr>
                <th>Admisson No</th>
                <th>Full Name</th>
                <th>Class</th>
                <th>Section</th>
                <th>Bus-Id</th>
                <th>Admission Status <button>ViewQrCode</button></th>

              </tr>
            </thead>
            <tbody>
              {
                students.map((val, ind) => {
                  return (
                    <tr key={ind}>
                      <td>1000</td>
                      <td>{val.name}</td>
                      <td>{val.std}</td>
                      <td>{val.division}</td>
                      <td>Auto</td>
                      <td>Studying</td>
                    </tr>
                  )
                })
              }

            </tbody>
          </Table>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body><AddStudents /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Students;