import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { useContext } from "react";
import { globalData } from "../App";

const EditForm = () => {
    const { addStudent } = useContext(globalData);

    const location = useLocation();
    const { address, city, division, id, landmark, name, pincode, rollNumber } = location.state;
    let splitName = name.split(" ");
    console.log(splitName)
    let splitAddrs = address.split("||")

    const [inputs, setInputs] = useState({
        fname: splitName[0],
        mname: splitName[1],
        lname: splitName[2],
        class: location.state.class,
        division: division,
        rollNumber: rollNumber,
        addrs1: splitAddrs[0],
        addrs2: splitAddrs[1],
        landmark: landmark,
        city: city,
        pincode: pincode
    })

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInputs({ ...inputs, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(inputs, id);
        setInputs({
            fname: "",
            mname: "",
            lname: "",
            class: "",
            division: "",
            rollNumber: "",
            addrs1: "",
            addrs2: "",
            landmark: "",
            city: "",
            pincode: ""
        })
    }

    return (
        <div className="addstudents container">
            <h4>Add Students</h4>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <input type="text" name="fname" placeholder='First Name' value={inputs.fname} onChange={handleChange} required />
                    </div>
                    <div className="col">
                        <input type="text" name="mname" placeholder='Middle Name' value={inputs.mname} onChange={handleChange} required />
                    </div>
                    <div className="col">
                        <input type="text" name="lname" placeholder='Last Name' value={inputs.lname} onChange={handleChange} required />
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        <select name="class" value={inputs.class} onChange={handleChange}>
                            <option value="" disabled hidden selected>Select Class</option>
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
                    </div>
                    <div className="col">
                        <select name="division" value={inputs.division} onChange={handleChange}>
                            <option value="" disabled selected hidden>Select Division</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>
                    <div className="col">
                        <input type="number" placeholder='Roll Number' name='rollNumber' value={inputs.rollNumber} onChange={handleChange} required />
                    </div>
                </div>
                <div className="row">
                    <div className="col3">
                        <input type="text" placeholder='Address Line 1' name='addrs1' value={inputs.addrs1} onChange={handleChange} required />
                    </div>
                    <div className="col3" >
                        <input type="text" placeholder='Address Line 2' value={inputs.addrs2} onChange={handleChange} name="addrs2" />
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        <input type="text" placeholder='Landmark' name='landmark' value={inputs.landmark} onChange={handleChange} required />
                    </div>
                    <div className="col">
                        <input type="text" placeholder='City' name='city' value={inputs.city} onChange={handleChange} required />
                    </div>
                    <div className="col">
                        <input type="number" placeholder='Pincode' name='pincode' value={inputs.pincode} onChange={handleChange} required />
                    </div>
                </div>
                <div className="submit">
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default EditForm;