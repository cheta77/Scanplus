import React from "react";
import {
    MDBBadge,
    MDBBtn,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

export default function RadiographerCard() {
    return (
        <MDBTable align="middle" className="bg-[#F5F5F5] rounded-md">
            <MDBTableHead className="py-10">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Name of Organization</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> $587.98</p>
                    </td>
                    <td>
                        <MDBBadge color="success" pill>
                            Active
                        </MDBBadge>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> 07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> $587.98</p>
                    </td>
                    <td>
                        <MDBBadge color="primary" pill>
                            Terminated
                        </MDBBadge>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> 07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> $58798</p>
                    </td>
                    <td>
                        <MDBBadge color="warning" pill>
                            pending
                        </MDBBadge>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> 07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> $58798</p>
                    </td>
                    <td>
                        <MDBBadge color="warning" pill>
                            pending
                        </MDBBadge>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> 07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> $58798</p>
                    </td>
                    <td>
                        <MDBBadge color="warning" pill>
                            pending
                        </MDBBadge>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> 07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> $58798</p>
                    </td>
                    <td>
                        <MDBBadge color="warning" pill>
                            pending
                        </MDBBadge>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> 07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> $58798</p>
                    </td>
                    <td>
                        <MDBBadge color="warning" pill>
                            pending
                        </MDBBadge>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> 07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> $58798</p>
                    </td>
                    <td>
                        <MDBBadge color="warning" pill>
                            pending
                        </MDBBadge>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> 07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> $58798</p>
                    </td>
                    <td>
                        <MDBBadge color="warning" pill>
                            pending
                        </MDBBadge>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> 07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> $58798</p>
                    </td>
                    <td>
                        <MDBBadge color="warning" pill>
                            pending
                        </MDBBadge>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> 07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> $58798</p>
                    </td>
                    <td>
                        <MDBBadge color="warning" pill>
                            pending
                        </MDBBadge>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> 07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> $58798</p>
                    </td>
                    <td>
                        <MDBBadge color="warning" pill>
                            pending
                        </MDBBadge>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> 07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> $58798</p>
                    </td>
                    <td>
                        <MDBBadge color="warning" pill>
                            pending
                        </MDBBadge>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> 07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> $58798</p>
                    </td>
                    <td>
                        <MDBBadge color="warning" pill>
                            pending
                        </MDBBadge>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> 07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> $58798</p>
                    </td>
                    <td>
                        <MDBBadge color="warning" pill>
                            pending
                        </MDBBadge>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> 07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> $58798</p>
                    </td>
                    <td>
                        <MDBBadge color="warning" pill>
                            pending
                        </MDBBadge>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> 07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> $58798</p>
                    </td>
                    <td>
                        <MDBBadge color="warning" pill>
                            pending
                        </MDBBadge>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> 07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> $58798</p>
                    </td>
                    <td>
                        <MDBBadge color="warning" pill>
                            pending
                        </MDBBadge>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> 07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> $58798</p>
                    </td>
                    <td>
                        <MDBBadge color="warning" pill>
                            pending
                        </MDBBadge>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> 07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> $58798</p>
                    </td>
                    <td>
                        <MDBBadge color="warning" pill>
                            pending
                        </MDBBadge>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> 07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                            </div>
                        </div>
                    </td>

                    <td>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> $58798</p>
                    </td>
                    <td>
                        <MDBBadge color="warning" pill>
                            pending
                        </MDBBadge>
                    </td>
                    <td>
                        <p className="fw-bold mb-1"> 07.05.2022</p>
                    </td>
                </tr>
            </MDBTableBody>
        </MDBTable>
    );
}
