import "../App.css";

import google from "../assets/icons/google.png";
import Man1 from "../assets/Man1.png";
import Man2 from "../assets/Man2.png";
import Man3 from "../assets/Man3.png";

import { BsHouse } from "react-icons/bs";
import Button from "../components/Button";
import React, { Component } from "react";

import SignOut from "../assets/icons/SignOut.png";

const Add = (props) => {
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
        <div className=" max-w-6xl w-full justify-center items-start overflow-hidden py-5">
            <div className="  grid grid-cols-2 gap-6 justify-start items-start">
                <div className=" col-span-2 lg:col-span-1">
                    <form className=" ">
                        <label>
                            <p>First Name</p>
                            <input
                                class="border-[1.5px] rounded-lg border-[#D6DDEB]  md:text-xl w-[100%] py-3 pl-5 px-64"
                                type="text"
                                name="name"
                                placeholder="John"
                            />
                        </label>
                    </form>
                    <form className="">
                        <label>
                            <p>Date of Birth</p>
                            <input
                                className="border-[1.5px] rounded-md border-[#D6DDEB] md:text-xl w-[100%] py-3 pl-5 px-64"
                                type="text"
                                name="name"
                                placeholder="MM/DD/YY"
                            />
                        </label>
                    </form>
                </div>

                <div className=" col-span-2 lg:col-span-1 ">
                    <form>
                        <label>
                            <p>Last Name</p>
                            <input
                                className="border-[1.5px] rounded-lg border-[#D6DDEB]  md:text-xl w-[100%]  py-3 pl-5 px-64"
                                type="text"
                                name="name"
                                placeholder="Smith"
                            />
                        </label>
                    </form>
                    <form>
                        <label>
                            <p>Sex</p>
                            <select className="py-3 px-5   md:text-xl w-[249%] border-[1.5px] rounded-lg border-[#D6DDEB] ">
                                <option selected disabled>
                                    Choose
                                </option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </label>
                    </form>
                </div>
                <div className="  col-span-2 lg:col-span-1 ">
                    <form>
                        <label>
                            <p>MRN</p>
                            <input
                                class="border-[1.5px] rounded-lg border-[#D6DDEB] md:text-xl w-[100%]  py-3 pl-5 px-64"
                                type="text"
                                name="name"
                                placeholder="MM/DD/YY"
                            />
                        </label>
                    </form>
                    <form>
                        <label>
                            <p>Study Upload</p>
                            <select className="py-3 px-5 md:text-xl w-[106%]  border-[1.5px] rounded-lg border-[#D6DDEB]">
                                <option selected disabled>
                                    Choose Study
                                </option>
                                <optgroup label="RADIOLOGY BODY PARTS">
                                    <option>Skull x-ray </option>
                                    <option>Paranasal sinus</option>
                                    <option>Post Nasal Space</option>
                                    <option>Neck/ cervical spine</option>
                                    <option>
                                        Thoracic/ Thoracolumbar spine
                                    </option>
                                    <option>Chest</option>
                                    <option>Lumbar/Lumbosacral spine</option>
                                    <option>Pelvis</option>
                                    <option>Hip</option>
                                    <option>Thigh/Femur</option>
                                    <option>Knee</option>
                                    <option>leg</option>
                                    <option>Ankle</option>
                                    <option>Foot</option>
                                    <option>Shoulder</option>
                                    <option>Arm</option>
                                    <option>Forearm</option>
                                    <option>Wrist</option>
                                    <option>Hand</option>
                                </optgroup>
                                <optgroup label="IMAGING MODALITIES:">
                                    <option> X-RAY </option>
                                    <option>MAMMOGRAPHY </option>
                                    <option>CT</option>
                                    <option>MRI</option>
                                </optgroup>
                            </select>
                        </label>
                    </form>
                </div>
                <div className=" col-span-2 lg:col-span-1">
                    <label>
                        <p>Location</p>
                        <input
                            className="border-[1.5px] rounded-lg border-[#D6DDEB]  md:text-xl w-[100%]  py-3 pl-5 px-64"
                            type="text"
                            name="name"
                            placeholder="Location"
                        />
                    </label>

                    <label>
                        <p>Priority</p>
                        <select className="py-3 px-5  md:text-xl w-[180%] border-[1.5px] rounded-lg border-[#D6DDEB] ">
                            <option selected disabled>
                                Choose Priority
                            </option>
                            <option></option>
                        </select>
                    </label>
                </div>
            </div>
            <div className=" flex flex-row  px-2 py-5 mt-3 space-x-6 ">
                <div className=" border-[2px] outline-gray-500 outline-dashed lg:w-40 md:w-40 sm:w-40 w-40 py-5 items-center justify-center px-4">
                    <p className="justify-center items-center text-sm">
                        Upload file
                    </p>
                    <p className="justify-center items-center text-[#01326A]">
                        View
                    </p>
                </div>
                <div className=" border-[2px] outline-gray-500 outline-dashed lg:w-40 md:w-40 sm:w-40 w-40 py-5 items-center justify-center px-4">
                    <p className="justify-center items-center text-sm">
                        Upload file
                    </p>
                    <p className="justify-center items-center text-[#01326A]">
                        View
                    </p>
                </div>
                <div className=" border-[2px] outline-gray-500 outline-dashed lg:w-40 md:w-40 sm:w-40 w-40 py-5 items-center justify-center px-4">
                    <p className="justify-center items-center text-sm">
                        Upload file
                    </p>
                    <p className="justify-center items-center text-[#01326A]">
                        View
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Add;
