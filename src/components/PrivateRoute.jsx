import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { globalData } from "../App"

const PrivateRoute = () => {
  const navigate = useNavigate();  
  const [jwt, setJwt] = useState("");
  useEffect(()=>{
    setJwt(localStorage.getItem("jwt"));;
  })
  return jwt? <Outlet/> : navigate("/",{ replace: true })
 
};

export default PrivateRoute;
