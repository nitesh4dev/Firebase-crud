import React, { useState } from "react";
import "../Styles/licenseForm.css"


const LicenseForm = () => {
    const [inputs, setInputs] = useState({ fname: "", lname: "", phoneNumber: "", busNumber: "", empId: "", email: "", photo: null, password: "" })
    const [errors, setErrors] = useState({
        fname: "",
        lname: "",
        phoneNumber: "",
        busNumber: "",
        empId: "",
        email: "",
        photo: "",
        password: ""
    })

    const handleInputs = (e) => {
        const { name, value } = e.target;
        if (name === "fname" || name === "lname") {
            let result = value.replace(/[^a-z]/gi, '');
            setInputs({ ...inputs, [name]: result });
            setErrors({ ...errors, [name]: "" })
        }
        else if (name === "busNumber") {
            let result = value.replace(/[^a-z^0-9]/gi, '');
            setInputs({ ...inputs, [name]: result });
            setErrors({ ...errors, [name]: "" })
        }
        else if (name === "phoneNumber" || name === "empId") {
            let result = value.replace(/\D/g, '');
            setInputs({ ...inputs, [name]: result });
            setErrors({ ...errors, [name]: "" })
        }
        else {
            setInputs({ ...inputs, [name]: value });
            setErrors({ ...errors, [name]: "" })
        }
    }


    const handleSubmit = (e) => {
        const { fname, lname, phoneNumber, busNumber, empId, email, photo, password } = inputs;
        e.preventDefault();
        if (fname === "" || lname === "" || phoneNumber === "" || busNumber === "" || empId === "" || email === "" || photo === null || password === "") {
            setErrors({
                fname: fname ? "" : "First name is Required",
                lname: lname ? "" : "Last name is Required",
                phoneNumber: phoneNumber ? "" : "Phone Number is Required",
                busNumber: busNumber ? "" : "Bus Number is Required",
                empId: empId ? "" : "Employee ID is Required",
                email: email ? "" : "Email is Required",
                photo: photo ? "" : "Photo is Required",
                password: password ? "" : "Password is Required"
            })
        }
        if (/^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/.test(busNumber) == false) {
            setErrors({...errors,busNumber:"Please enter a Valid Bus Number"})
        }
        else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
            setErrors({ ...errors, email: "Please Enter an Valid Email" })
        }
        else if (/^.{8,16}$/.test(password) === false) {
            setErrors({ ...errors, password: "Password should contain 8-16 characters" })
        }
        else if (/^.*[0-9].*$/.test(password) === false) {
            setErrors({ ...errors, password: "Password should contain atlest a Number" })
        }
        else if (/^.*[a-zA-Z].*$/.test(password) === false) {
            setErrors({ ...errors, password: "Password should contain atlest an alphabet" })
        }

        else {
            console.log(inputs)
        }

    }

    return (
        <div className="licenseForm" >
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="First Name" name="fname" value={inputs.fname} onChange={handleInputs} />
                    <small>{errors.fname}</small>
                </div>
                <div>
                    <input type="text" placeholder="Last Name" name="lname" value={inputs.lname} onChange={handleInputs} />
                    <small>{errors.lname}</small>
                </div>
                <div>
                    <input type="text" placeholder="Phone Number" name="phoneNumber" value={inputs.phoneNumber} onChange={handleInputs} />
                    <small>{errors.phoneNumber}</small>
                </div>
                <div>
                    <input type="text" placeholder="Bus Number ex:- MH01AB1010" name="busNumber" value={inputs.busNumber} onChange={handleInputs} />
                    <small>{errors.busNumber}</small>
                </div>
                <div>
                    <input type="text" placeholder="Employee Id" name="empId" value={inputs.empId} onChange={handleInputs} />
                    <small>{errors.empId}</small>
                </div>
                <div>
                    <input type="text" placeholder="Email ID" name="email" value={inputs.email} onChange={handleInputs} />
                    <small>{errors.email}</small>
                </div>
                <div>
                    <input type="file" onChange={(e) => { setInputs({ ...inputs, photo: e.target.files[0] }) }} />
                    <small>{errors.photo}</small>
                </div>
                <div>
                    <input type="password" placeholder="Choose a Password" name="password" value={inputs.password} onChange={handleInputs} />
                    <small>{errors.password}</small>

                </div>

                <input type="submit" />
            </form>

        </div>
    )
}

export default LicenseForm;