
import '../App.css';
import Sidebar from './Sidebar.js';
import ConsultantCard from '../components/ConsultantsCard'
import TotalCard from '../components/TotalCard.js';
import NewConstCard from '../components/NewConstCard.js';
import TotalReportsCard from '../components/TotalReportsCard.js';
import google from '../assets/icons/google.png'
import Man1 from '../assets/Man1.png'
import Man2 from '../assets/Man2.png'
import Man3 from '../assets/Man3.png'
import Header from '../components/Header'
import { BsHouse } from 'react-icons/bs';
import Button from '../components/Button';

function SubmitReport(props) {
    return (
        <div class="flex justify-start items-start bg-[#E7F0FA]">
            <div class="w-full ">
                <div class="w-full   sm:px-8 md:px-16 lg:px-2 py-4 justify-start items-center mt-20">
                    <div class="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 lg:gap-6 gap-6 mb-6">
                        <div>
                            <div>
                                <h6>
                                    Firt Name
                                </h6>
                                <h6 class='mt-2 font-semibold'>
                                    Sam
                                </h6>
                            </div>

                            <div class='mt-4'>
                                <h6>
                                    Last Name
                                </h6>
                                <h6 class='mt-2 font-semibold'>
                                    Tol
                                </h6>
                            </div>

                            <div class='mt-4'>
                                <h6>
                                    Email
                                </h6>
                                <h6 class='mt-2 font-semibold'>
                                    kpanousmuel9@gmail.com
                                </h6>
                            </div>
                            <div class='mt-4'>
                                <h6>
                                    Phone        </h6>
                                <h6 class='mt-2 font-semibold'>
                                    09038734912        </h6>
                            </div>

                            <div class='mt-4'>
                                <h6>
                                    Studies        </h6>
                                <h6 class='mt-2 font-semibold'>
                                    Studies        </h6>
                            </div>
                        </div>

                        <div class='bg-white px-4 py-4 rounded-3xl items-center justify-center'>
                            <div class='flex  justify-between'>
                                <div>
                                    <h6>
                                        Pending
                                    </h6>

                                </div>
                                <div>
                                    <h6>
                                        DOS        </h6>
                                    <h6 class='mt-2 font-semibold'>
                                        30/12/2022        </h6>
                                </div>
                            </div>
                            <div class='flex  justify-between mt-3'>
                                <div>
                                    <h6>
                                        Full Name        </h6>
                                    <h6 class='mt-2 font-semibold'>
                                        Sam Tol       </h6>
                                </div>
                                <div>
                                    <h6>
                                        DOR        </h6>
                                    <h6 class='mt-2 font-semibold'>
                                        25/12/2022        </h6>
                                </div>
                            </div>

                            <div class='flex  justify-between mt-3'>
                                <div>
                                    <h6>
                                        Studies        </h6>
                                    <h6 class='mt-2 font-semibold'>
                                        Sam Tol       </h6>
                                </div>
                                <div>
                                    <h6>
                                        DOU        </h6>
                                    <h6 class='mt-2 font-semibold'>
                                        23/11/2022        </h6>
                                </div>
                            </div>

                            <div class='flex  justify-between mt-3'>
                                <div>
                                    <h6>
                                        Studies Time      </h6>
                                    <h6 class='mt-2 font-semibold'>
                                        21.05.2021        </h6>
                                </div>
                                <div>
                                    <h6>
                                        Center        </h6>
                                    <h6 class='mt-2 font-semibold'>
                                        Reddington        </h6>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>

            </div>
        </div>
    );
}
export default SubmitReport;