import "../App.css";
import Sidebar from "../Sidebar.js";
import ConsultantCard from "../../components/ConsultantsCard";
import TotalCard from "../../components/TotalCard.js";
import NewConstCard from "../../components/NewConstCard.js";
import TotalReportsCard from "../../components/TotalReportsCard.js";
import google from "../assets/icons/google.png";
import Man1 from "../assets/Man1.png";
import Man2 from "../assets/Man2.png";
import Man3 from "../assets/Man3.png";
import Header from "../../components/Header";
import { BsHouse } from "react-icons/bs";
import Button from "../../components/Button";
import React, { Component } from "react";
import Profile from "../Profile";
import SignOut from "../assets/icons/SignOut.png";

const CreateReport = (props) => {
    // constructor(props) {
    //     super(props);

    //     // Set initial state
    //     this.state = { msg: <Profile /> };

    //     // Binding this keyword
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick() {
    //     // Changing state
    //     this.setState({
    //         msg: <Profile />,
    //     });
    // }

    // render() {
    return (
        <div className="flex justify-start items-start  ">
            <div className=" h-full lg:w-[91%] md:w-[91%] sm:w-[50%] justify-start items-start">
                <div className=" flex flex-row justify-between ">
                    <form className="  lg:w-[67%] justify-start mt-4">
                        <label>
                            <p>Report</p>
                            <input
                                class="border-[1.5px] rounded-lg border-[#D6DDEB] w-[320%] py-3 pl-5"
                                type="text"
                                name="name"
                                placeholder="John"
                            />
                        </label>
                    </form>

                    <form className="  lg:w-[60%] justify-start  mt-4">
                        <label>
                            <p>Report Details</p>
                            <input
                                className="border-[1.5px] rounded-md border-[#D6DDEB]  w-[320%] py-3 pl-5"
                                type="text"
                                name="name"
                                placeholder="Smith"
                            />
                        </label>
                    </form>
                </div>

                <div className=" flex flex-row justify-between ">
                    <form className=" lg:w-[50%] justify-start flex mt-4">
                        <label>
                            <p>Report Details</p>
                            <input
                                className="border-[1.5px] rounded-lg border-[#D6DDEB]  w-[320%] py-3 pl-5"
                                type="text"
                                name="name"
                                placeholder="MM/DD/YY"
                            />
                        </label>
                    </form>

                    <form className=" lg:w-[47%] justify-start flex mt-4">
                        <label>
                            <p>Details</p>
                            <select className="py-3 px-5 w-[335%]">
                                <option selected disabled>
                                    Choose
                                </option>
                                <option></option>
                            </select>
                        </label>
                    </form>
                </div>
                <div className=" flex flex-row justify-between ">
                    <form className=" flex lg:w-[67%] justify-start mt-4">
                        <label>
                            <p>MRN</p>
                            <input
                                class="border-[1.5px] rounded-lg border-[#D6DDEB] w-[320%] py-3 pl-5"
                                type="text"
                                name="name"
                                placeholder="MM/DD/YY"
                            />
                        </label>
                    </form>

                    <form className="  lg:w-[60%] justify-start flex mt-4">
                        <label>
                            <p>Study</p>
                            <input
                                className="border-[1.5px] rounded-md border-[#D6DDEB]  w-[320%] py-3 pl-5"
                                type="text"
                                name="name"
                            />
                        </label>
                    </form>
                </div>
                <div className="  h-full w-100 border-[2px] outline-dashed  py-5 mt-5 outline-gray-500">
                    <div className="flex flex-row justify-center items-center p-lg-5">
                        <img
                            src={SignOut}
                            alt="Logo"
                            class="w-4 h-4 justify-content-center align-items-center"
                        />
                        <p className="pl-5"> Upload Additional file</p>
                    </div>
                </div>

                <div className=" items-center flex mt-5">
                    <Button
                        variant="primary"
                        title="Preview"
                        className=" border-[1.5px] border-[#1C4D94] rounded-lg  py-3 lg:w-50 md:w-50 w-40 text-sm  text-[#01326A]"
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateReport;
