import React from "react";
import { Link } from "react-router-dom";
import ScanPlusLogo from "../assets/ScanPlusLogo.png";
import {
    BsArrowUpRight,
    BsChevronDown,
    BsHouse,
    BsOutlet,
} from "react-icons/bs";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import google from "../assets/icons/google.png";
import Home from "../assets/icons/Home.png";
import Book from "../assets/icons/Book.png";
import Radiographers from "../assets/icons/Radiographers.png";
import Patients from "../assets/icons/Patients.png";
import Report from "../assets/icons/Report.png";
import SignOut from "../assets/icons/SignOut.png";
<script>export let page;</script>;

function Sidebar(props) {
    return (
        <div>
            <ul class="fixed bg-[#E7F0FA] px-4 h-full py-1 shadow-2xl">
                <img src={ScanPlusLogo} class="w-32 h-32 mr-10" />
                <div class="border-b border-[#3F3F3F] py-4">
                    <li
                        class=" p-2 w-full flex  items-center {page == 'dashboard'
			? 'bg-red-600 text-[#FFFFFF]'
			: 'bg-transparent text-[#0D0D0D]} rounded-l-3xl text-sm font-semibold"
                    >
                        <img src={Home} alt="Logo" class="w-4 h-4" />

                        <a href="Dashboard" class="font-normal pl-3">
                            <h5>Home</h5>
                        </a>
                    </li>
                    <li
                        class=" p-2 w-full flex items-center {page == 'dashboard'
			? 'bg-[#FAF8F6] text-primary'
			: 'bg-transparent text-gray-400'} rounded-l-3xl text-sm font-semibold "
                    >
                        <img src={Book} alt="Logo" class="w-4 h-4" />
                        <a href="/Consultants" class="font-normal pl-3">
                            <h5>Consultants</h5>
                        </a>
                    </li>

                    <li
                        class=" p-2 w-full flex   items-center {page == '/'
			? 'bg-gray-200 text-primary'
			: 'bg-transparent text-gray-400'} rounded-l-3xl text-sm font-semibold"
                    >
                        <img src={Radiographers} alt="Logo" class="w-4 h-4" />
                        <a href="/" class="font-normal pl-3">
                            <h5>Radiographers</h5>
                        </a>
                    </li>
                    <li
                        class=" p-2 w-full flex  items-center {page == 'privacy'
			? 'bg-gray-200 text-primary'
			: 'bg-transparent text-gray-400'} rounded-l-3xl text-sm font-semibold"
                    >
                        <img src={Patients} alt="Logo" class="w-4 h-4" />
                        <a href="/Patients" class="font-normal pl-3">
                            <h5>Patient</h5>
                        </a>
                    </li>
                    <li
                        class=" p-2 w-full flex  items-center {page == 'notifications'
			? 'bg-gray-200 text-primary'
			: 'bg-transparent text-gray-400'} rounded-l-3xl text-sm font-semibold"
                    >
                        <img src={Report} alt="Logo" class="w-4 h-4" />
                        <a href="/Report" class="font-normal pl-3">
                            <h5>Report</h5>
                        </a>
                    </li>
                </div>

                <li
                    class=" p-2 w-full flex mt-10  items-center {page == 'notifications'
			? 'bg-gray-200 text-primary'
			: 'bg-transparent text-gray-400'} rounded-l-3xl text-sm font-semibold"
                >
                    <img src={SignOut} alt="Logo" class="w-4 h-4" />
                    <a href="/Login" class="font-normal pl-3">
                        <h5>Sign Out</h5>
                    </a>
                </li>

                <div class="flex px-2 py-2 items-center border-[#1C4D94] border-l border-t border-b border-r rounded-md mt-10 space-x-2">
                    <img src={google} alt="Logo" class="w-4 h-4" />
                    <Menu
                        menuStyle={{
                            paddingLeft: 30,
                            paddingRight: 30,
                            borderRadius: 10,
                        }}
                        menuButton={
                            <MenuButton class="color-[#383A47] font-normal text-xs">
                                Sylvia Hopkin
                            </MenuButton>
                        }
                    >
                        <Link to="/Dashboard">
                            <MenuItem style={{ marginTop: "10%" }}>
                                Hospital
                            </MenuItem>
                        </Link>
                        <MenuItem style={{ marginTop: "10%" }}>
                            Pharmacy
                        </MenuItem>
                        <MenuItem style={{ marginTop: "10%" }}>Doctor</MenuItem>
                        <MenuItem style={{ marginTop: "10%" }}>Health</MenuItem>
                        {/* <SubMenu label="Edit23">
        <MenuItem>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
      </SubMenu> */}
                    </Menu>
                </div>
            </ul>
        </div>
    );
}
export default Sidebar;
