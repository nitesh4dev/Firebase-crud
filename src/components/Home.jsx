import "../Styles/home.css";
import React from 'react';
import DatePicker from "./DatePicker";
import DataTable from "./DataTable";

const Dashboard = () => {

    return (
        <>
            <div className="currPage">
                Dashboard/Home
            </div>
            <div className="home">
                <div className="cards">
                    <div className="card card1">
                        <div className="dateSelector">
                            <DatePicker />
                        </div>
                        <div className="attendance">
                            <div>
                            <h6>Students Present</h6>
                               <h5>1706</h5>
                            </div>
                            <div>
                            <h6>Students Absent</h6>
                               <h5>1706</h5>
                            </div>
                        </div>

                    </div>
                    <div className="card card2">
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
                <div className="head">
                   <h6>Activities</h6>
                   <button>Sync Todays Attendance</button>
                </div>
                <div className="table">
                      <DataTable/>
                </div>
            </div>
        </>
    )
}

export default Dashboard;