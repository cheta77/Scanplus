import React from "react";
import {
    MDBBadge,
    MDBBtn,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
export default function ConsultantCard() {
    return (
        <MDBTable align="middle" className="bg-[#F5F5F5] rounded-md">
            <MDBTableHead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Pay</th>
                    <th scope="col">Status</th>
                    <th scope="col">DOA</th>
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
