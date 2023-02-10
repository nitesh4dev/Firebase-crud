import React, { useEffect, useContext } from "react";
import { Navigate,Outlet } from "react-router-dom";
import { globalData } from '../App';

const Protected = () => {
    const {auth} = useContext(globalData);

    return auth? <Outlet/> : <Navigate to='/'/>
}

export default Protected;