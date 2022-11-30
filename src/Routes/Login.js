import Surprised from "../assets/Surprised.png";

import Button from "../components/Button";
import ScanPlusLogo from "../assets/ScanPlusLogo.png";
import Sideright from "../assets/Sideright.png";
import Radiographer from "../assets/Radiographer.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../CSS/SignUp.css";
import ChoiceModal from "../components/Choicemodal";

function Login(props) {
    function deleteHandler() {
        alert("Clicked");
    }

    return (
        <div className="  grid grid-cols-1 md:grid-cols-2 w-full px-5 overflow-hidden">
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
                    <ChoiceModal />
                    {/* <div className="justify-center items-center  w-[25%]">
                        <Link to="/">
                            <Button
                                variant="primary"
                                title="Register"
                                className=" border-[1.5px] border-[#1C4D94] rounded-lg  py-3 lg:w-40 md:w-40 w-40 text-md  text-[#1C4D94]"
                            />
                        </Link>
                    </div> */}
                </div>

                <div className="mt-5 py-5 ">
                    <div className="flex">
                        <p className="font-semibold text-2xl">Sign In</p>
                    </div>

                    {/* <div className="justify-center items-center flex ">
                        <Button
                            variant="primary"
                            title="Sign Up with Google"
                            className="lg:w-96 md:w-96 w-64 bg-[#F8F8FA] border-[1.5px] border-[#AF8958]  py-3 text-sm font-semibold text-[#AF8958]"
                        />
                    </div> */}

                    {/* <div className="justify-center items-center flex text-[#202430] mt-5">
                        <p className="text-[#7C8493]">Or Sign Up with email</p>
                    </div> */}

                    <form className=" items-center mt-5">
                        <input
                            className="border-[1.5px] rounded-lg border-[#D6DDEB] lg:w-100 md:w-[100%] w-100 py-3 pl-5"
                            type="text"
                            name="name"
                            placeholder="Email"
                        />
                    </form>

                    <form className=" items-center mt-5">
                        <input
                            className="border-[1.5px] rounded-lg border-[#D6DDEB]  lg:w-100 md:w-100 w-100 py-3 pl-5"
                            type="password"
                            name="name"
                            placeholder="Password"
                        />
                    </form>

                    <div className=" items-center mt-5">
                        <Link to="/Dashboard">
                            <Button
                                variant="primary"
                                title="Login"
                                className="bg-[#1C4D94] border-[1.5px] border-[#1C4D94] rounded-lg  py-3 lg:w-100 md:w-100 w-full text-md  text-[white]"
                            />
                        </Link>
                    </div>

                    <div className="justify-start items-center flex mt-10">
                        <p className="text-[#7C8493]">
                            Forget Password?
                            <Link to="/SignUp">
                                {" "}
                                <button className="text-[#1C4D94]">
                                    Reset
                                </button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
