import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
export default function ConsultantTable() {
    return (
        <MDBTable align='middle' className='bg-[#F5F5F5] rounded-md'>

            <MDBTableHead >
                <tr className='align-items-center '>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Phone</th>
                    <th scope='col'>Name of Organisation</th>
                    <th scope='col'>Payment</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>  09038734912</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>Scan Plus</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>   07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>  09038734912</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>Scan Plus</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>   07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>  09038734912</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>Scan Plus</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>   07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>  09038734912</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>Scan Plus</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>   07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>  09038734912</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>Scan Plus</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>   07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>  09038734912</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>Scan Plus</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>   07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>  09038734912</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>Scan Plus</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>   07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>  09038734912</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>Scan Plus</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>   07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>  09038734912</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>Scan Plus</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>   07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>  09038734912</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>Scan Plus</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>   07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>  09038734912</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>Scan Plus</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>   07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>  09038734912</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>Scan Plus</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>   07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>  09038734912</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>Scan Plus</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>   07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>  09038734912</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>Scan Plus</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>   07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>  09038734912</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>Scan Plus</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>   07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>  09038734912</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>Scan Plus</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>   07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>  09038734912</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>Scan Plus</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>   07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>  09038734912</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>Scan Plus</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>   07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>  09038734912</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>Scan Plus</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>   07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>  09038734912</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>Scan Plus</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>   07.05.2022</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>

                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>  09038734912</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>Scan Plus</p>
                    </td>
                    <td>
                        <p className='fw-bold mb-1'>   07.05.2022</p>
                    </td>
                </tr>
            </MDBTableBody>
        </MDBTable>
    );
}