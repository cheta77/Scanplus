import Sideright from "../assets/Sideright.png";
import ScanPlusLogo from "../assets/ScanPlusLogo.png";
import Radiographer from "../assets/Radiographer.png";
import Button from "../components/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../CSS/SignUp.css";
import SignUpmodal from "../components/SignUpmodal";

function SignUp() {
    function deleteHandler() {
        alert("Clicked");
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full px-10 overflow-hidden">
            <div
                className="hidden md:block lg:w-[95%] md:w-[95%] bg-left bg-cover "
                style={{
                    backgroundImage: `url(${Sideright})`,
                    position: "static",
                }}
            >
                <div className="w-full h-full mt-[45%] ">
                    <img
                        src={Radiographer}
                        alt="Radiographer"
                        className="w-[94%]"
                        position="static"
                    />
                </div>
            </div>

            <div className="w-full h-full px-10 ">
                <div className=" flex flex-row lg:w-[100%] md:w-[100%]  justify-between items-center ">
                    <div className="bg-white">
                        <img
                            src={ScanPlusLogo}
                            alt="Logo"
                            className="w-[40%] md:w-[40%]"
                        />
                    </div>

                    <div className="justify-center items-center  w-[25%]">
                        <Link to="/Login">
                            <Button
                                variant="primary"
                                title="Sigin In"
                                className=" border-[1.5px] border-[#1C4D94] rounded-lg  py-3 lg:w-40 md:w-40 w-40 text-md  text-[#1C4D94]"
                            />
                        </Link>
                    </div>
                </div>

                <div className="mt-5 py-3 ">
                    <div className="flex">
                        <p className="font-semibold text-2xl">Register</p>
                    </div>

                    <form className=" items-center mt-4">
                        <input
                            className="border-[1.5px] rounded-md border-[#D6DDEB] lg:w-100 w-100 py-3 pl-5"
                            type="text"
                            name="name"
                            placeholder="FullName"
                        />
                    </form>
                    <form className=" items-center mt-4">
                        <input
                            className="border-[1.5px] rounded-md border-[#D6DDEB] lg:w-100 w-100 py-3 pl-5"
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                    </form>

                    <form className=" items-center mt-4">
                        <input
                            className="border-[1.5px] rounded-lg border-[#D6DDEB]  lg:w-100  w-100 py-3 pl-5"
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                    </form>
                    <form className=" items-center mt-4">
                        <input
                            className="border-[1.5px] rounded-lg border-[#D6DDEB]  lg:w-100  w-100 py-3 pl-5"
                            type="password"
                            name="password"
                            placeholder="Confirm Password"
                        />
                    </form>
                    {/* <form className=" items-center mt-4">
                        <select className="border-[1.5px] rounded-lg border-[#D6DDEB]  lg:w-100  w-100 py-3 pl-5">
                            <option selected disabled>
                                Who are you?
                            </option>
                            <option>Consultants</option>
                            <option>Client</option>
                        </select>
                    </form> */}
                    {/* <SignUpmodal /> */}
                    <div className=" items-center mt-4">
                        <Link to="/ConDashboard">
                            <Button
                                variant="primary"
                                title="Sign Up"
                                className="bg-[#1C4D94] border-[1.5px] border-[#1C4D94] rounded-lg  py-3 lg:w-100 md:w-100 w-full text-md  text-[white]"
                            />
                        </Link>
                    </div>

                    {/* <div className="justify-center items-center flex mt-10">
                        <p className="text-[#7C8493]">
                            Already have an account?{""}
                            <Link to="/Login">
                                <button className="text-[#AF8958]">
                                    Login
                                </button>
                            </Link>
                        </p>
                    </div> */}

                    {/* <div className="justify-center items-center flex mt-5 sm:px-10 px-10">
                        <p className="text-[#7C8493]">
                            By clicking 'Continue', you acknowledge that you
                            have <br />
                            read and accept the{" "}
                            <span className="text-[#AF8958]">
                                Terms of Service
                            </span>{" "}
                            Terms of Service and{" "}
                            <span className="text-[#AF8958]">
                                Privacy Policy.
                            </span>
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
export default SignUp;
