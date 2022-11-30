import "../App.css";
import ClientSidebar from "./ClientSidebar.js";
import Header from "../components/Header";
import { BsHouse } from "react-icons/bs";
import Button from "../components/Button";
import React, { Component } from "react";
import Profile from "../Routes/Profile";
import Add from "../Client/Add";
import PatientsCard from "../components/PatientsCard";
// import CreateReport from "./CreateReport";

class ClientDashboard extends Component {
    constructor(props) {
        super(props);

        // Set initial state
        this.state = { msg: <PatientsCard /> };

        // Binding this keyword
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // Changing state
        this.setState({
            msg: <Add />,
        });
    }

    render() {
        return (
            <div class="flex justify-start items-start bg-[#E7F0FA] overflow-hidden">
                <div class="w-full ">
                    <Header />
                    <div class="flex justify-start items-start space-x-4 ">
                        <div class="w-full hidden md:flex md:w-[240px] ">
                            <ClientSidebar page="dashboard" />
                        </div>
                        <div class="w-full  sm:px-8 md:px-16 lg:px-8 py-4 items-center mt-20">
                            <div class="flex items-center space-x-2 px-1 ">
                                <BsHouse />
                                <h3 className="text-sm">Home</h3>
                            </div>

                            <div
                                className="flex flex-row text-center"
                                style={{ justifyContent: "space-between" }}
                            >
                                <p className="font-bold">Dashboard</p>
                                <div class="space-x-4 px-5">
                                    <button
                                        onClick={this.handleClick}
                                        variant="primary"
                                        className="  bg-[#003A83] w-40 text-white  py-2 text-md font-light font-semibold mt-4 rounded-lg"
                                    >
                                        Add Patient Report
                                    </button>
                                </div>
                            </div>

                            <p>{this.state.msg}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClientDashboard;
