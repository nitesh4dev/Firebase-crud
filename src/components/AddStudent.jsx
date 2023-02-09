import React, { useState, useContext } from 'react';
import "../App.css";
import { globalData } from "../App";

const AddStudents = () => {
    const { addStudent } = useContext(globalData);

    const [inputs, setInputs] = useState({ fname: "", mname: "", lname: "", std: "", division: "", rollNo: "", addrs1: "", addrs2: "", landmark: "", city: "", pincode: "" });
    const [errors, setErrors] = useState({
        fname: "",
        mname: "",
        lname: "",
        std: "",
        division: "",
        rollNo: "",
        addrs1: "",
        city: "",
        pincode: ""

    })

    const handleInputs = (e) => {
        const { name, value } = e.target;
        if (name === "fname" || name === "mname" || name === "lname" || name === "city" || name === "landmark") {
            let result = value.replace(/[^a-z]/gi, '');
            setInputs({ ...inputs, [name]: result });
            setErrors({ ...errors, [name]: "" });
        }
        else if (name === "rollNo" || name === "pincode") {
            let result = value.replace(/\D/g, '');
            setInputs({ ...inputs, [name]: result });
            setErrors({ ...errors, [name]: ""})
        }
        else{
            setInputs({ ...inputs, [name]:value });
            setErrors({ ...errors, [name]: ""})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { fname, mname, lname, std, division, rollNo, addrs1, city, pincode } = inputs;
        if (fname === "" || mname === "" || lname === "" || std === "" || division === "" || rollNo === "" || addrs1 === "" || city === "" || pincode === "") {
            setErrors({
                fname: fname ? "" : "First Name is Required",
                mname: mname ? "" : "Middle Name is Required",
                lname: lname ? "" : "Last Name is Required",
                std: std ? "" : "Please select class",
                division: division ? "" : "Please select Division",
                rollNo: rollNo ? "" : "Roll Number is Required",
                addrs1: addrs1 ? "" : "Address is Required",
                city: city ? "" : "Please enter the City",
                pincode: pincode ? "" : "Please enter the Pincode"

            })
        }

        else {
            addStudent(inputs);
        }

    }
    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <input type="text" placeholder='First Name' name='fname' value={inputs.fname} onChange={handleInputs} />
                        <small>{errors.fname}</small>
                    </div>
                    <div className="col">
                        <input type="text" placeholder='Middle Name' name='mname' value={inputs.mname} onChange={handleInputs} />
                        <small>{errors.mname}</small>
                    </div>
                    <div className="col">
                        <input type="text" placeholder='Last Name' name='lname' value={inputs.lname} onChange={handleInputs} />
                        <small>{errors.lname}</small>
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        <select name="std" value={inputs.std} onChange={handleInputs}>
                            <option value="">Select Class</option>
                            <option value="1">I</option>
                            <option value="2">II</option>
                            <option value="3">III</option>
                            <option value="4">IV</option>
                            <option value="5">V</option>
                            <option value="6">VI</option>
                            <option value="7">VII</option>
                            <option value="8">VIII</option>
                            <option value="9">IX</option>
                            <option value="10">X</option>
                        </select>
                        <small>{errors.std}</small>
                    </div>
                    <div className="col">
                        <select name="division" value={inputs.division} onChange={handleInputs}>
                            <option value="">Select Division</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                        <small>{errors.division}</small>
                    </div>
                    <div className="col">
                        <input type="text" placeholder='Roll Number' name='rollNo' value={inputs.rollNo} onChange={handleInputs} />
                        <small>{errors.rollNo}</small>
                    </div>
                </div>
                <div className="row">
                    <div className="col3">
                        <input type="text" placeholder='Address Line 1' name='addrs1' value={inputs.addrs1} onChange={handleInputs} />
                        <small>{errors.addrs1}</small>
                    </div>
                    <div className="col3" >
                        <input type="text" placeholder='Address Line 2' name="addrs2" value={inputs.addrs2} onChange={handleInputs} />
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        <input type="text" placeholder='Landmark' name='landmark' value={inputs.landmark} onChange={handleInputs} />
                    </div>
                    <div className="col">
                        <input type="text" placeholder='City' name='city' value={inputs.city} onChange={handleInputs} />
                        <small>{errors.city}</small>
                    </div>
                    <div className="col">
                        <input type="text" placeholder='Pincode' name='pincode' value={inputs.pincode} onChange={handleInputs} />
                        <small>{errors.pincode}</small>
                    </div>
                </div>
                <div className="submit">
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}


export default AddStudents;