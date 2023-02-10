import "../Styles/navbar.css"
import { NavLink ,Link} from 'react-router-dom';
import { BiLogOutCircle } from "react-icons/bi"
import { MdOutlineManageSearch,MdOutlineChecklistRtl ,MdManageAccounts} from "react-icons/md";
import {IoMdContact} from "react-icons/io"
import { SiSimpleanalytics } from "react-icons/si"
import {RiDashboardFill,RiContactsBookLine} from "react-icons/ri"
import { Outlet } from "react-router-dom";

function Dashboard() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();

  // console.log(date);
  return (
    <div className="dashboard">
      <div className="sidenav">
        <div className="nav">
          <div className="logo">
            <h2>Logo</h2>
          </div>
          <div className="innerlinks">

            <NavLink to="home"><span><RiDashboardFill /></span>Dashboard </NavLink>
            <NavLink to="attendance"><span><MdOutlineChecklistRtl /></span>Attendance Logs </NavLink>
            <NavLink to="analytics"><span><SiSimpleanalytics/></span>Analytics Report</NavLink>
            <NavLink to="students"><span><MdOutlineManageSearch /></span>Manage students</NavLink>
            <NavLink to="license"><span><RiContactsBookLine /></span>Manage Licenses</NavLink>
            <NavLink to="setting"><span><MdManageAccounts /></span>Settings</NavLink>
            <Link onClick={()=>localStorage.setItem("isLoggedIn",false)}><span><BiLogOutCircle /></span>Logout</Link>

          </div>
        </div>
      </div>
      <div className="topnav">
        <div className="email"><p><span><IoMdContact/></span> esvalson@kpsraipur.com</p></div>
      </div>
      <div className="date">
        <p>{day}-{month+1}-{year} {hour}:{minute}</p>
      </div>
      <Outlet className="outlet"/>
    </div>
  );
}

export default Dashboard;
