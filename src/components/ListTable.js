import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Settings from '../assets/icons/Settings.png';
export default function ListTable() {
    return (
        <MDBTable align='middle' className=' rounded-md '>

            <MDBTableHead >
                <tr className='align-items-center '>
                    <th>     <input type="checkbox" class="custom-control-input" id="customCheck2" /></th>
                    <th scope='col'>Patient</th>
                    <th scope='col'>Studies</th>
                    <th scope='col'>Study Time</th>
                    <th scope='col'>Priority</th>
                    <th scope='col'>Center</th>
                    <th scope='col'>DOS</th>
                    <th scope='col'>DOR</th>
                    <th scope='col'>DOU</th>
                    <th scope='col'>Status</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                <tr className='bg-white py-6'>

                    <div className='d-flex align-items-center'>

                        <div className='mr-3'>
                            <input type="checkbox" class="custom-control-input" id="customCheck2" />


                        </div>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                    </div>
                    <td>
                        <p className='fw-semibold mb-1'>John Doe</p>
                    </td>
                    <td>
                        <p className=' mb-1'>Studies</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>Study Time</p>
                    </td>
                    <td>
                        <p>
                            24.00 R (24)
                        </p></td>
                    <td>
                        <p className='fw-semibold  mb-1'>   Reddington
                            Hospital</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOS</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOR</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOU</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  Completed</p>
                    </td>
                    {/* <td>
                        <div className='d-flex align-items-center justify-between'>
                            <img src={Settings} class="w-4 h-4" />
                            <div className='border-w-1 border-red-500 w-3 h-6'>

                            </div>
                            <img src={Settings} class="w-4 h-4" />
                        </div>
                    </td> */}
                </tr>
                <tr class='h-8'></tr>

                <tr className='bg-white py-6'>

                    <div className='d-flex align-items-center'>

                        <div className='mr-3'>
                            <input type="checkbox" class="custom-control-input" id="customCheck2" />


                        </div>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                    </div>
                    <td>
                        <p className='fw-semibold mb-1'>John Doe</p>
                    </td>
                    <td>
                        <p className=' mb-1'>Studies</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>Study Time</p>
                    </td>
                    <td>
                        <p>
                            24.00 R (24)
                        </p></td>
                    <td>
                        <p className='fw-semibold  mb-1'>   Reddington
                            Hospital</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOS</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOR</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOU</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  Completed</p>
                    </td>
                </tr>
                <tr class='h-8'></tr>

                <tr className='bg-white py-6'>

                    <div className='d-flex align-items-center'>

                        <div className='mr-3'>
                            <input type="checkbox" class="custom-control-input" id="customCheck2" />


                        </div>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                    </div>
                    <td>
                        <p className='fw-semibold mb-1'>John Doe</p>
                    </td>
                    <td>
                        <p className=' mb-1'>Studies</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>Study Time</p>
                    </td>
                    <td>
                        <p>
                            24.00 R (24)
                        </p></td>
                    <td>
                        <p className='fw-semibold  mb-1'>   Reddington
                            Hospital</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOS</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOR</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOU</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  Completed</p>
                    </td>
                </tr>
                <tr class='h-8'></tr>


                <tr className='bg-white py-6'>

                    <div className='d-flex align-items-center'>

                        <div className='mr-3'>
                            <input type="checkbox" class="custom-control-input" id="customCheck2" />


                        </div>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                    </div>
                    <td>
                        <p className='fw-semibold mb-1'>John Doe</p>
                    </td>
                    <td>
                        <p className=' mb-1'>Studies</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>Study Time</p>
                    </td>
                    <td>
                        <p>
                            24.00 R (24)
                        </p></td>
                    <td>
                        <p className='fw-semibold  mb-1'>   Reddington
                            Hospital</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOS</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOR</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOU</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  Completed</p>
                    </td>
                </tr>
                <tr class='h-8'></tr>

                <tr className='bg-white py-6'>

                    <div className='d-flex align-items-center'>

                        <div className='mr-3'>
                            <input type="checkbox" class="custom-control-input" id="customCheck2" />


                        </div>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                    </div>
                    <td>
                        <p className='fw-semibold mb-1'>John Doe</p>
                    </td>
                    <td>
                        <p className=' mb-1'>Studies</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>Study Time</p>
                    </td>
                    <td>
                        <p>
                            24.00 R (24)
                        </p></td>
                    <td>
                        <p className='fw-semibold  mb-1'>   Reddington
                            Hospital</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOS</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOR</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOU</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  Completed</p>
                    </td>
                </tr>
                <tr class='h-8'></tr>

                <tr className='bg-white py-6'>

                    <div className='d-flex align-items-center'>

                        <div className='mr-3'>
                            <input type="checkbox" class="custom-control-input" id="customCheck2" />


                        </div>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                    </div>
                    <td>
                        <p className='fw-semibold mb-1'>John Doe</p>
                    </td>
                    <td>
                        <p className=' mb-1'>Studies</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>Study Time</p>
                    </td>
                    <td>
                        <p>
                            24.00 R (24)
                        </p></td>
                    <td>
                        <p className='fw-semibold  mb-1'>   Reddington
                            Hospital</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOS</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOR</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOU</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  Completed</p>
                    </td>
                </tr>
                <tr class='h-8'></tr>

                <tr className='bg-white py-6'>

                    <div className='d-flex align-items-center'>

                        <div className='mr-3'>
                            <input type="checkbox" class="custom-control-input" id="customCheck2" />


                        </div>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                    </div>
                    <td>
                        <p className='fw-semibold mb-1'>John Doe</p>
                    </td>
                    <td>
                        <p className=' mb-1'>Studies</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>Study Time</p>
                    </td>
                    <td>
                        <p>
                            24.00 R (24)
                        </p></td>
                    <td>
                        <p className='fw-semibold  mb-1'>   Reddington
                            Hospital</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOS</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOR</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOU</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  Completed</p>
                    </td>
                </tr>
                <tr class='h-8'></tr>

                <tr className='bg-white py-6'>

                    <div className='d-flex align-items-center'>

                        <div className='mr-3'>
                            <input type="checkbox" class="custom-control-input" id="customCheck2" />


                        </div>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                    </div>
                    <td>
                        <p className='fw-semibold mb-1'>John Doe</p>
                    </td>
                    <td>
                        <p className=' mb-1'>Studies</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>Study Time</p>
                    </td>
                    <td>
                        <p>
                            24.00 R (24)
                        </p></td>
                    <td>
                        <p className='fw-semibold  mb-1'>   Reddington
                            Hospital</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOS</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOR</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOU</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  Completed</p>
                    </td>
                </tr>
                <tr class='h-8'></tr>
                <tr className='bg-white py-6'>

                    <div className='d-flex align-items-center'>

                        <div className='mr-3'>
                            <input type="checkbox" class="custom-control-input" id="customCheck2" />


                        </div>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                    </div>
                    <td>
                        <p className='fw-semibold mb-1'>John Doe</p>
                    </td>
                    <td>
                        <p className=' mb-1'>Studies</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>Study Time</p>
                    </td>
                    <td>
                        <p>
                            24.00 R (24)
                        </p></td>
                    <td>
                        <p className='fw-semibold  mb-1'>   Reddington
                            Hospital</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOS</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOR</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOU</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  Completed</p>
                    </td>
                </tr>
                <tr class='h-8'></tr>
                <tr className='bg-white py-6'>

                    <div className='d-flex align-items-center'>

                        <div className='mr-3'>
                            <input type="checkbox" class="custom-control-input" id="customCheck2" />


                        </div>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                    </div>
                    <td>
                        <p className='fw-semibold mb-1'>John Doe</p>
                    </td>
                    <td>
                        <p className=' mb-1'>Studies</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>Study Time</p>
                    </td>
                    <td>
                        <p>
                            24.00 R (24)
                        </p></td>
                    <td>
                        <p className='fw-semibold  mb-1'>   Reddington
                            Hospital</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOS</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOR</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOU</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  Completed</p>
                    </td>
                </tr>
                <tr class='h-8'></tr>

                <tr className='bg-white py-6'>

                    <div className='d-flex align-items-center'>

                        <div className='mr-3'>
                            <input type="checkbox" class="custom-control-input" id="customCheck2" />


                        </div>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                    </div>
                    <td>
                        <p className='fw-semibold mb-1'>John Doe</p>
                    </td>
                    <td>
                        <p className=' mb-1'>Studies</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>Study Time</p>
                    </td>
                    <td>
                        <p>
                            24.00 R (24)
                        </p></td>
                    <td>
                        <p className='fw-semibold  mb-1'>   Reddington
                            Hospital</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOS</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOR</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOU</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  Completed</p>
                    </td>
                </tr>
                <tr class='h-8'></tr>
                <tr className='bg-white py-6'>

                    <div className='d-flex align-items-center'>

                        <div className='mr-3'>
                            <input type="checkbox" class="custom-control-input" id="customCheck2" />


                        </div>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                    </div>
                    <td>
                        <p className='fw-semibold mb-1'>John Doe</p>
                    </td>
                    <td>
                        <p className=' mb-1'>Studies</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>Study Time</p>
                    </td>
                    <td>
                        <p>
                            24.00 R (24)
                        </p></td>
                    <td>
                        <p className='fw-semibold  mb-1'>   Reddington
                            Hospital</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOS</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOR</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOU</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  Completed</p>
                    </td>
                </tr>
                <tr class='h-8'></tr>

                <tr className='bg-white py-6'>

                    <div className='d-flex align-items-center'>

                        <div className='mr-3'>
                            <input type="checkbox" class="custom-control-input" id="customCheck2" />


                        </div>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                    </div>
                    <td>
                        <p className='fw-semibold mb-1'>John Doe</p>
                    </td>
                    <td>
                        <p className=' mb-1'>Studies</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>Study Time</p>
                    </td>
                    <td>
                        <p>
                            24.00 R (24)
                        </p></td>
                    <td>
                        <p className='fw-semibold  mb-1'>   Reddington
                            Hospital</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOS</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOR</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOU</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  Completed</p>
                    </td>
                </tr>
                <tr class='h-8'></tr>
                <tr className='bg-white py-6'>

                    <div className='d-flex align-items-center'>

                        <div className='mr-3'>
                            <input type="checkbox" class="custom-control-input" id="customCheck2" />


                        </div>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                    </div>
                    <td>
                        <p className='fw-semibold mb-1'>John Doe</p>
                    </td>
                    <td>
                        <p className=' mb-1'>Studies</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>Study Time</p>
                    </td>
                    <td>
                        <p>
                            24.00 R (24)
                        </p></td>
                    <td>
                        <p className='fw-semibold  mb-1'>   Reddington
                            Hospital</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOS</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOR</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOU</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  Completed</p>
                    </td>
                </tr>
                <tr class='h-8'></tr>

                <tr className='bg-white py-6'>

                    <div className='d-flex align-items-center'>

                        <div className='mr-3'>
                            <input type="checkbox" class="custom-control-input" id="customCheck2" />


                        </div>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                    </div>
                    <td>
                        <p className='fw-semibold mb-1'>John Doe</p>
                    </td>
                    <td>
                        <p className=' mb-1'>Studies</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>Study Time</p>
                    </td>
                    <td>
                        <p>
                            24.00 R (24)
                        </p></td>
                    <td>
                        <p className='fw-semibold  mb-1'>   Reddington
                            Hospital</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOS</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOR</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  DOU</p>
                    </td>
                    <td>
                        <p className='fw-semibold  mb-1'>  Completed</p>
                    </td>
                </tr>
                <tr class='h-8'></tr>

            </MDBTableBody>
        </MDBTable>
    );
}