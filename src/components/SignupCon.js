import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "../components/Button";
const SignupCon = () => {
    return (
        <div className="flex h-screen w-screen bg-gray-100 justify-center py-12">
            <div className="  items-center justify-center shadow-lg md:w-[60%] sm:w-[50%] py-5 mt-12 mb-5">
                <div className=" flex  justify-end  ">
                    <div className="justify-center items-center  w-[25%]">
                        <Link to="/Login">
                            <Button
                                variant="primary"
                                title="Sigin In"
                                className=" border-[1.5px] border-[#1C4D94] rounded-lg  py-3 lg:w-40 md:w-20 w-30 text-sm  text-[#1C4D94]"
                            />
                        </Link>
                    </div>
                </div>

                <div className="mt-5 py-3 w-full px-5">
                    <div className="flex px-5 mb-5">
                        <p className="font-semibold text-2xl">
                            Complete Registration
                        </p>
                    </div>
                    <div className=" flex flex-row justify-evenly">
                        <form className=" items-center flex mt-4">
                            <input
                                className="border-[1.5px] rounded-md border-[#D6DDEB] lg:w-96 w-96 py-3 pl-5"
                                type="text"
                                name="name"
                                placeholder="FullName"
                            />
                        </form>

                        <form className=" items-center flex mt-4">
                            <input
                                className="border-[1.5px] rounded-md border-[#D6DDEB] lg:w-96 w-96 py-3 pl-5"
                                type="text"
                                name="email"
                                placeholder="Email"
                            />
                        </form>
                    </div>

                    <div className="flex flex-row justify-content-evenly ">
                        <form className=" items-center flex mt-4">
                            <input
                                className="border-[1.5px] rounded-md border-[#D6DDEB] lg:w-96 w-96 py-3 pl-5 "
                                type="text"
                                name="address"
                                placeholder="Address"
                            />
                        </form>
                        <form className=" items-center flex mt-4">
                            <input
                                className="border-[1.5px] rounded-md border-[#D6DDEB] lg:w-96 w-96 py-3 pl-5"
                                type="number"
                                name="phonenumber"
                                placeholder="Phone Number"
                            />
                        </form>
                    </div>

                    <div className=" items-center flex mt-10 px-5 py-lg-5">
                        <Link to="/Dashboard">
                            <Button
                                variant="primary"
                                title="Create Account"
                                className="bg-[#1C4D94] border-[1.5px] border-[#1C4D94] rounded-lg  py-3 lg:w-96 md:w-96 w-64 text-sm  text-[white]"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupCon;
