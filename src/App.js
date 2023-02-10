import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Students from './components/Students';
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { createContext } from 'react';
import { confirm } from "react-confirm-box";
import Analytics from './components/Analytics';
import Attendance from './components/Attendance';
import Home from './components/Home';
import License from './components/License';
import Settings from './components/Settings';
import PrivateRoute from './components/PrivateRoute';
import { Navigate } from 'react-router-dom';
export const globalData = createContext();

function App() {
  const studentsCollection = collection(db, "students");
  const [students, setStudents] = useState([]);
  const [enableEdit, setEnableEdit] = useState("");
  const [jwt, setJwt] = useState(false);

  const getStudents = async () => {
    const data = await getDocs(studentsCollection);
    setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }


  const addStudent = async (inputs, id) => {
    console.log(inputs)
    try {
      const shortend = {
        name: inputs.fname + " " + inputs.mname + " " + inputs.lname,
        class: inputs.std,
        division: inputs.division,
        rollNumber: inputs.rollNumber,
        address: inputs.addrs1 + " " + inputs.addrs2,
        landmark: inputs.landmark,
        city: inputs.city,
        pincode: inputs.pincode
      }
      console.log(shortend)

      if (id) {
        const studentDoc = doc(db, "students", id);
        await updateDoc(studentDoc, shortend);
        alert("Updated Successfully");
      }
      else {
        await addDoc(studentsCollection, shortend);
      }
      getStudents();
    }
    catch (err) {
      alert("something went wrong, please try again after some time")
    }
  }


  const deleteStudent = async (id) => {
    const result = await confirm("Are you sure to delete?");
    if (result) {
      const studentDoc = doc(db, "students", id);
      await deleteDoc(studentDoc);
      getStudents();
    }
  }

  const logout = () => {
    localStorage.setItem("jwt", "")
  }

  useEffect(() => {
    setJwt(localStorage.getItem("jwt"));
    getStudents();
  }, [])

  const dataCentre = {
    students: students,
    addStudent: addStudent,
    deleteStudent: deleteStudent,
    enableEdit: enableEdit,
    setEnableEdit: setEnableEdit,
    logout: logout
  }



  return (

    <BrowserRouter>
      <globalData.Provider value={dataCentre}>
        <Routes>
          <Route path="/" element={jwt ? <Navigate to="/dashboard/home" /> : <Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path='home' element={<Home />} />
              <Route path='attendance' element={<Attendance />} />
              <Route path='analytics' element={<Analytics />} />
              <Route path='students' element={<Students />} />
              <Route path='license' element={<License />} />
              <Route path='setting' element={<Settings />} />
            </Route>
          </Route>
        </Routes>
      </globalData.Provider>
    </BrowserRouter>
  );
}

export default App;
