import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import Upload from "../assets/icons/Upload";
import SignOut from "../assets/icons/SignOut.png";
import Button from "./Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Choicemodal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="bg-transparent">
            <button
                onClick={handleShow}
                className="border-[1.5px] border-[#1C4D94] rounded-lg  py-3 lg:w-40 md:w-40 w-40 text-md  text-[#1C4D94]"
            >
                Register
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                backdrop-bg="#0d6efd"
                backdrop-opacity="0.3"
                keyboard={false}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className="flex flex-col justify-center px-5 py-5">
                        <div className="flex justify-center ">
                            <p className="font-semibold text-lg">Hi! Welcome</p>
                        </div>
                        <div className="flex py-3 justify-center">
                            <p className=" text-md">
                                Please{" "}
                                <Link
                                    to="/SignUp"
                                    className="font-bold text-[#1C4D94]"
                                >
                                    Click here
                                </Link>{" "}
                                to register if you are a Consultant
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <p className="font-semibold text-lg">Or</p>
                        </div>
                        <div className="flex py-3 justify-center">
                            <p className=" text-md">
                                Please{" "}
                                <Link
                                    to="/ClientSignup"
                                    className="font-bold text-[#1C4D94]"
                                >
                                    Click here
                                </Link>{" "}
                                to register if you are a Client
                            </p>
                        </div>
                    </div>{" "}
                    {/* <div className=" justify-content-center flex mt-4 mb-5">
                        <Link to="/">
                            <Button
                                variant="primary"
                                title="Process"
                                className="bg-[#1C4D94] border-[1px] border-[#1C4D94] rounded-lg  py-2 lg:w-96 md:w-96 w-64 text-sm  text-[white]"
                            />
                        </Link>
                    </div> */}
                </Modal.Body>
            </Modal>
        </div>
    );
}
export default Choicemodal;
