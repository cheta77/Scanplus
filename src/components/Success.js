import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import Upload from "../assets/icons/Upload";
import SignOut from "../assets/icons/SignOut.png";
import Button from "../components/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function SignUpmodal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="bg-transparent">
            <button
                onClick={handleShow}
                className="px-4 py-1 mt-5 w-100 h-[100%] text-sm  font-semibold  bg-[#1C4D94] border-[10px] border-[#1C4D94] rounded-lg text-[white]"
            >
                SignUp
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                {/* <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <div className="flex flex-row px-5">
                        <div className="mt-5 py-3 ">
                            <div className="flex g-1">
                                <p className="font-semibold text-md">
                                    You are almost here
                                </p>
                            </div>
                            <div className="flex mt-3">
                                <p className=" text-sm">
                                    Add your organization and logo to complete
                                    the registration process
                                </p>
                            </div>
                        </div>
                        <div className="flex rounded-full w-20 h-20  shrink-0 grow-0 border-[1px] justify-content-center align-items-center mt-5 bg-gray-100">
                            <img
                                src={SignOut}
                                alt="Logo"
                                class="w-4 h-4 justify-content-center align-items-center"
                            />
                        </div>
                    </div>
                    <div>
                        <form className=" items-center mt-2 px-5 ">
                            <input
                                className="border-[1.0px]  shrink-0 grow-0 rounded-lg border-[#D6DDEB] lg:w-100 w-100 py-1 pl-5 mb-2 "
                                type="text"
                                name="name"
                                placeholder="Organization name"
                            />
                        </form>
                    </div>
                    <div>
                        <form className=" items-center mt-2 px-5 ">
                            <input
                                className="border-[1.0px]  shrink-0 grow-0 rounded-lg border-[#D6DDEB] lg:w-100 w-100 py-1 pl-5 mb-2 "
                                type="text"
                                name="name"
                                placeholder="Organization Address"
                            />
                        </form>
                    </div>
                    <div>
                        <form className=" items-center mt-2 px-5 ">
                            <input
                                className="border-[1.0px]  shrink-0 grow-0 rounded-lg border-[#D6DDEB] lg:w-100 w-100 py-1 pl-5 mb-2 "
                                type="number"
                                name="phonenumber"
                                placeholder="Phone Number"
                            />
                        </form>
                    </div>
                    <div className=" justify-content-center flex mt-4 mb-5">
                        <Link to="/">
                            <Button
                                variant="primary"
                                title="Process"
                                className="bg-[#1C4D94] border-[1px] border-[#1C4D94] rounded-lg  py-2 lg:w-96 md:w-96 w-64 text-sm  text-[white]"
                            />
                        </Link>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer> */}
            </Modal>
        </div>
    );
}
export default SignUpmodal;
