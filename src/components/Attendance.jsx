import React from "react";
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DataTable from "./DataTable";
import "../Styles/attendance.css";
import { BsDownload } from "react-icons/bs"


const Attendance = () => {
    const [value, setValue] = React.useState(new Date());
    return (
        <>
            <div className="currPage">
                Dashboard/Attendance
            </div>
            <div className="attendancePage">
                <div className="DateRange">
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                                label="Start Date"
                                value={value}
                                minDate={dayjs('2017-01-01')}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                                label="End Date"
                                value={value}
                                minDate={dayjs('2017-01-01')}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
                <div className="searchInputs">
                    <select name="" id="">
                        <option value="" selected disabled hidden>Select Bus</option>
                        <option value="a">a</option>
                        <option value="b">b</option>
                    </select>
                    <select name="" id="">
                        <option value="" selected disabled hidden>Select Class</option>
                        <option value="">a</option>
                        <option value="">b</option>
                        <option value="">c</option>
                    </select>
                    <select name="" id="">
                        <option value="" selected disabled hidden>Select Division</option>
                        <option value="">a</option>
                        <option value="">b</option>
                        <option value="">c</option>
                    </select>
                    <select name="" id="">
                        <option value="" selected disabled hidden>Shifts</option>
                        <option value="">a</option>
                        <option value="">b</option>
                        <option value="">c</option>
                    </select>
                </div>
                <div className="report">
                    <div>
                        <h5>Date: 06-02-2023</h5>
                    </div>
                    <div>
                        <h6>Changed bus ExcelReport</h6>
                        <button>Download <BsDownload/></button>
                    </div>
                    <div>
                        <h6>All Attendance Details</h6>
                        <button>Download <BsDownload/></button>
                    </div>
                    <div>
                        <h6>All Bus Reports</h6>
                        <button>Download <BsDownload/></button>
                    </div>
                    <div>
                        <h6>ScannedIn/ScannedOut Report</h6>
                        <button>Download <BsDownload/></button>
                    </div>
                </div>
                <div className="table">
                    <DataTable />
                </div>

            </div>
        </>
    )
}

export default Attendance;