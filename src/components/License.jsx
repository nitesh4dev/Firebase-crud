import React from "react";
import Table from 'react-bootstrap/Table';
import "../Styles/license.css"

const License = () => {
    return (
        <>
            <div className="currPage">
                Dashboard/License
            </div>
            <div className="license">
                <div className="  cards">
                    <div className=" card card1">
                        <div>
                            <h6>Total Licenses</h6>
                            <h4>65</h4>
                        </div>
                        <div>
                            <h6>Active Licenses</h6>
                            <h4>65</h4>
                        </div>
                        <div>
                            <h6>Avaliable Licenses</h6>
                            <h4>0</h4>
                        </div>
                        <div>
                            <button>Add Licenses +</button>
                            <p>No more Licenses avaliable, contact ResoluteAI team</p>
                        </div>
                    </div>
                    <div className=" card card2">
                        <div className="dropdown">
                            <select name="" id="">
                                <option value="" selected disabled hidden >Select Bus</option>
                                <option value="">A</option>
                            </select>
                        </div>
                        <div className="stats">
                            <div><h6>Total Activities</h6><h5>1707</h5></div>
                            <div><h6>Total Students</h6><h5>0</h5></div>
                            <div><h6>Total CheckledIn</h6><h5>1706</h5></div>
                            <div><h6>Total ChekedOut</h6><h5>1</h5></div>
                        </div>

                    </div>
                </div>
                <div className="searchInputs">
                    <input type="text" placeholder="Name or ID"/>
                    <select name="" id="">
                        <option value="" selected disabled hidden >Select Bus</option>
                        <option value="">A</option>
                    </select>
                </div>
                <div className="Table">
                <Table striped bordered>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Emp-ID Number</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Bus No</th>
          <th>Email</th>
          <th>Password</th>
          <th>Login-Device-Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Image</td>
          <td>08048</td>
          <td>The name</td>
          <td>7506135522</td>
          <td>7856</td>
          <td>example@gmail.com</td>
          <td>08u0u</td>
          <td>Android</td>
        </tr>
      </tbody>
    </Table>
                </div>
            </div>
        </>
    )
}

export default License;