import "../App.css";
import Sidebar from "./Sidebar.js";
import Header from "../components/Header";
import { BsHouse } from "react-icons/bs";
import Button from "../components/Button";
import React, { Component } from "react";
import Profile from "./Profile";
import Add from "../Client/Add";
// import CreateReport from "./CreateReport";

class Report extends Component {
    constructor(props) {
        super(props);

        // Set initial state
        this.state = { msg: <Add /> };

        // Binding this keyword
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // Changing state
        this.setState({
            msg: <Profile />,
        });
    }

    render() {
        return (
            <div class="flex h-screen justify-start items-start bg-[#E7F0FA] ">
                <div class="w-full ">
                    <Header />
                    <div class="flex justify-start items-start space-x-4 ">
                        <div class="w-full hidden md:flex md:w-[240px] ">
                            <Sidebar page="dashboard" />
                        </div>
                        <div class="w-full  sm:px-8 md:px-16 lg:px-8 py-4 items-center mt-20">
                            <div class="flex items-center space-x-2 px-1 ">
                                <BsHouse />
                                <h3 className="text-sm">Home</h3>
                            </div>

                            <div
                                class="flex text-center"
                                style={{ justifyContent: "space-between" }}
                            >
                                <h2 class="font-bold">Report</h2>
                                {/* <div class="space-x-4 flex">
                                    <btn
                                        onClick={this.handleClick}
                                        variant="primary"
                                        title="Add Report"
                                        className="  bg-[#003A83] w-28 text-white text  py-2 text-xs font-light font-semibold mt-4 rounded-lg"
                                    />
                                    <Button
                                        onClick={this.handleClick}
                                        variant="primary"
                                        title="Finish"
                                        className=" bg-transparent w-28 border-[#01326A] border-[1px] text-[#01326A] text py-2 px-4 text-xs font-semibold mt-4 rounded-lg"
                                    />
                                </div> */}
                            </div>

                            <p>{this.state.msg}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Report;
