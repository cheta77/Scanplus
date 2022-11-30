import "../App.css";
import Sidebar from "./Sidebar.js";
import PatientsCard from "../components/PatientsCard";
import TotalCourseCard from "../components/TotalCard.js";
import EcoachCard from "../components/NewConstCard.js";
import EcoahCard2 from "../components/TotalReportsCard.js";
import google from "../assets/icons/google.png";
import Man1 from "../assets/Man1.png";
import Man2 from "../assets/Man2.png";
import Man3 from "../assets/Man3.png";
import Header from "../components/Header";
import { BsHouse } from "react-icons/bs";
import Button from "../components/Button";
import ConsultantCard from "../components/ConsultantsCard";

function Patients(props) {
    return (
        <div class="flex h-screen justify-start items-start bg-[#E7F0FA]">
            <div class="w-full ">
                <Header />
                <div class="flex justify-start items-start space-x-4 ">
                    <div class="w-full hidden md:flex md:w-[240px] ">
                        <Sidebar page="dashboard" />
                    </div>
                    <div class="w-full   sm:px-8 md:px-16 lg:px-2 py-4 justify-start items-center mt-20">
                        <div class="flex items-center space-x-2 px-1 ">
                            <BsHouse className="font-bold" />
                            <h3>Home</h3>
                        </div>

                        <div
                            class="flex text-center pl-1"
                            style={{ justifyContent: "space-between" }}
                        >
                            <h2 class="font-bold">Dashboard</h2>
                            <Button
                                variant="primary"
                                title="Add New"
                                className="  bg-[#1C4D94]  py-1 px-3 text-sm  text-[#FFFFFF] rounded-md"
                            />
                        </div>
                        <div class="grid grid-cols-1 w-full mb-2 px-16">
                            {/* <ConsultantCard /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Patients;
