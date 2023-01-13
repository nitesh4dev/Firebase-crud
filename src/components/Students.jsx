import React from "react";
import Table from 'react-bootstrap/Table';
import {FiEdit} from "react-icons/fi"
import {MdDelete} from "react-icons/md";
import { useContext } from "react";
import {globalData} from "../App"
import { useNavigate } from "react-router-dom";

const Students = () => {

const {students, deleteStudent,setEnableEdit} = useContext(globalData);
const navigate = useNavigate();

const navigateToForm =(id)=>{
    const editingStudent =students.find((val)=>val.id===id);
    navigate("/dashboard/edit",{state:editingStudent});
    setEnableEdit(true);
}

console.log()
    const iconStyle = {
        fontSize:"23px",
        marginLeft:"20px",
        color:"red",
        cursor:"pointer"
    }
    return (
        <div className="students container">
            <h4>Manage Students</h4>
            <div className="table">
            <Table striped bordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Class</th>
          <th>Roll No.</th>
          <th>Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
       {
        students.map((val,ind)=>{
            return(
            <tr key={ind}>
            <td>{val.name}</td>
            <td>{val.class}-{val.division}</td>
            <td>{val.rollNumber}</td>
            <td><FiEdit onClick={()=>navigateToForm(val.id)}  style={iconStyle}/> <MdDelete onClick={()=>deleteStudent(val.id)} style={iconStyle}/></td>
          </tr>
            )
        })
       }
        
      </tbody>
    </Table>
            </div>
        </div>
       
    )
}

export default Students;