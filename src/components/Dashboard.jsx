import '../App.css';
import { NavLink } from 'react-router-dom';
import {BiLogOutCircle} from "react-icons/bi"
import {BsPeopleFill} from "react-icons/bs"
import {MdOutlineManageSearch} from "react-icons/md";
import {Outlet} from "react-router-dom";
import { globalData } from '../App';
import { useContext } from 'react';

function Dashboard() {
  const {setValidated} = useContext(globalData);
  return (
    <div className="dashboard">
        <div className="nav">
            <ul>
                <li><NavLink to="addstudents"><BsPeopleFill/> Add Students</NavLink></li>
                <li><NavLink to="students"><MdOutlineManageSearch/> Manage students</NavLink></li>
                <li><button className='logout' onClick={()=>{setValidated(false)}}><BiLogOutCircle/> Logout</button></li>
            </ul>
        </div>
           <Outlet/>
    </div>
  );
}

export default Dashboard;
