import "../App.css";
import ConSidebar from "./ConSidebar.js";
import ConsultantCard from "../components/ConsultantsCard";

import Header from "../components/Header";
import { BsHouse } from "react-icons/bs";
import Button from "../components/Button";
import PatientsCon from "./PatientsCon";
import PatientsCard from "../components/PatientsCard";

function ConDashboard(props) {
    return (
        <div class="flex justify-start items-start bg-[#E7F0FA]">
            <div class="w-full ">
                <Header />
                <div class="flex justify-start items-start space-x-4 ">
                    <div class="w-full hidden md:flex md:w-[240px] ">
                        <ConSidebar page="dashboard" />
                    </div>
                    <div class="w-full sm:px-8 md:px-16 lg:px-2 py-4 justify-start items-center mt-20">
                        <div class="flex text-center space-x-2 px-1">
                            <BsHouse />
                            <h3>Home</h3>
                        </div>

                        <div
                            class="flex text-center pl-1"
                            style={{ justifyContent: "space-between" }}
                        >
                            <h2 class="font-bold mb-5">Dashboard</h2>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full mb-2 px-16 shadow" />

                        <PatientsCon />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ConDashboard;
