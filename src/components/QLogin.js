import Surprised from "../assets/Surprised.png";
import Logo from "../assets/Logo.png";

import "../CSS/QLogin.css";

function QLogin() {
    return (
        <div>
            <div
                style={{
                    paddingTop: "2%",
                    width: "40%",
                    height: 650,
                    backgroundColor: "#F8F8FD",
                }}
            >
                <div style={{ marginLeft: "30%" }}>
                    <img src={Logo} alt="Logo" height={"0%"} width={"50%"} />
                </div>

                <div style={{ marginTop: "6%" }}>
                    <img
                        src={Surprised}
                        alt="Surprised"
                        width={"100%"}
                        style={{ marginLeft: "0%" }}
                    />
                </div>
            </div>

            <div
                style={{
                    paddingTop: "2%",
                    width: "60%",
                    height: 650,
                    marginLeft: "40%",
                    marginTop: -677,
                }}
            >
                <div style={{ marginLeft: "36%", marginTop: "10%" }}>
                    <p className="more">Welcome Back, Benjamin</p>
                </div>

                <div style={{ marginLeft: "10%" }}>
                    <form>
                        <div style={{ marginLeft: "25%", marginBottom: "-4%" }}>
                            <p
                                style={{
                                    fontWeight: "600",
                                    fontSize: 13,
                                    color: "#515B6F",
                                }}
                            >
                                Password
                            </p>
                        </div>
                        <input
                            className="textInput01"
                            type="text"
                            name="name"
                            placeholder="Enter password"
                            security=""
                        />
                    </form>

                    <div style={{ display: "flex", height: "5%" }}>
                        <div
                            style={{
                                width: "13%",
                                height: "5%",
                                marginLeft: "28%",
                            }}
                        >
                            <p
                                style={{
                                    fontSize: 13,
                                    color: "#515B6F",
                                    fontWeight: "500",
                                }}
                            >
                                Remember me
                            </p>
                        </div>

                        <div
                            style={{
                                width: "15%",
                                height: "2%",
                                marginLeft: "14%",
                            }}
                        >
                            <p
                                style={{
                                    fontSize: 13,
                                    color: "#515B6F",
                                    fontWeight: "500",
                                }}
                            >
                                Forgot Password
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: 5 }}>
                        <button className="btn03">Login</button>
                    </div>

                    <div className="email3">
                        <p style={{ color: "#AF8958" }}>
                            Not Benjamin, log into a different account
                        </p>
                    </div>

                    <div className="email03">
                        <p>Don't have an account?{""} Sign Up</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default QLogin;
