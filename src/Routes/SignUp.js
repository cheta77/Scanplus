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
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full px-10 ">
            <div
                className="hidden sm:block lg:w-[95%] h-100 bg-left bg-cover "
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
                    />
                </div>
            </div>

            <div className="w-full h-full px-10 ">
                <div className=" flex flex-row lg:w-[100%] lg:h-50 sm:w-[100%]  justify-between items-center ">
                    <div className="bg-white">
                        <img
                            src={ScanPlusLogo}
                            alt="Logo"
                            className="w-[30%]"
                        />
                    </div>

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

                <div className="mt-5 py-3 ">
                    <div className="flex">
                        <p className="font-semibold text-2xl">Register</p>
                    </div>

                    <form className=" items-center flex mt-4">
                        <input
                            className="border-[1.5px] rounded-md border-[#D6DDEB] lg:w-100 w-100 py-3 pl-5"
                            type="text"
                            name="name"
                            placeholder="FullName"
                        />
                    </form>
                    <form className=" items-center flex mt-4">
                        <input
                            className="border-[1.5px] rounded-md border-[#D6DDEB] lg:w-100 w-100 py-3 pl-5"
                            type="text"
                            name="email"
                            placeholder="Email"
                        />
                    </form>

                    <form className=" items-center flex mt-4">
                        <input
                            className="border-[1.5px] rounded-lg border-[#D6DDEB]  lg:w-100  w-100 py-3 pl-5"
                            type="password"
                            name="name"
                            placeholder="Password"
                        />
                    </form>
                    <form className=" items-center flex mt-4">
                        <input
                            className="border-[1.5px] rounded-lg border-[#D6DDEB]  lg:w-100  w-100 py-3 pl-5"
                            type="password"
                            name="name"
                            placeholder="Confirm Password"
                        />
                    </form>
                    <SignUpmodal />
                    <div className=" items-center flex mt-4">
                        {/* <Link to="/">
                            <Button
                                variant="primary"
                                title="Sigin Up"
                                className="bg-[#1C4D94] border-[1.5px] border-[#1C4D94] rounded-lg  py-3 lg:w-96 md:w-96 w-64 text-sm  text-[white]"
                            />
                        </Link> */}
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
