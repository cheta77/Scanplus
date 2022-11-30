import Settings from "../assets/icons/Settings.png";
import Bell from "../assets/icons/Bell.png";

import "react-dropdown/style.css";

import "@szhsin/react-menu/dist/core.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// function Login() {
//   return <h2>Home</h2>;
// }
function Header(props) {
    return (
        <div class="justify-between bg-[#E7F0FA] items-center py-4 flex self-start shadow-inner  fixed w-[99%]">
            <div class="pl-60">
                <form>
                    <input
                        class="bg-white justify-self-center  h-12 w-96 pl-6 rounded-lg"
                        type="text"
                        name="name"
                        placeholder="Search"
                    />
                </form>
            </div>
            <div class="justify-evenly bg-[#E7F0FA] flex w-40 px-6 self-end">
                <Link to="/SignUp">
                    <img src={Settings} class="w-8 h-8" />
                </Link>

                <Link to="/Login">
                    <img src={Bell} class="w-8 h-8" />
                </Link>
            </div>
        </div>
    );
}
export default Header;
