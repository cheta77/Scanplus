import Man1 from '../assets/Man1.png'
import Verified from '../assets/Verified.png'
import Man3 from '../assets/Man3.png'
import Lady from '../assets/Lady.png'
import Button from '../components/Button';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
function Profile(props) {
    return (
        <div>
            <div class='flex space-x-4'>


                <div class="flex justify-between items-center space-x-4 py-16 px-4 bg-white rounded-2xl  ">
                    <div
                        class=" justify-start items-center"
                    >




                        <div class='flex space-x-8 items-center'>
                            <img src={Lady} width={130} height={130} />
                            <div class='flex-none '>
                                <div class='mb-2'> <h4>Active</h4></div>
                                <text class='font-bold'>Christine Dave</text>

                            </div>
                        </div>

                        <div class='mt-4'>
                            <h6 class='text-xs font-medium text-black'>Response Rate</h6>
                            <Progress percent={87} />
                        </div>
                        <div class='mt-2'>
                            <h6 class='text-xs font-medium text-black'>Delivered on time</h6>
                            <Progress percent={100} />
                        </div>
                        <div class='mt-2'>
                            <h6 class='text-xs font-medium text-black'>Scan Completion</h6>
                            <Progress percent={87} />
                        </div>




                    </div>
                </div>

                <div class="flex  items-start space-x-4 py-16 px-4 bg-white rounded-2xl w-[24%] ">
                    <div
                        class=" justify-start items-center w-full "
                    >
                        <div class='mb-2'> <h1 class='text-black text-sm font-semibold'>Recent Activity</h1></div>
                        <div class='mt-10'>
                            <hr
                                style={{
                                    background: 'grey',
                                    color: 'grey',
                                    borderColor: 'grey',
                                    height: '1px',

                                }}
                            />
                            <hr
                                style={{
                                    background: 'grey',
                                    color: 'grey',
                                    borderColor: 'grey',
                                    height: '1px',
                                    marginTop: 12
                                }}
                            />
                            <hr
                                style={{
                                    background: 'grey',
                                    color: 'grey',
                                    borderColor: 'grey',
                                    height: '1px',
                                    marginTop: 12
                                }}
                            />
                            <hr
                                style={{
                                    background: 'grey',
                                    color: 'grey',
                                    borderColor: 'grey',
                                    height: '1px',
                                    marginTop: 12
                                }}
                            />
                            <hr
                                style={{
                                    background: 'grey',
                                    color: 'grey',
                                    borderColor: 'grey',
                                    height: '1px',
                                    marginTop: 12
                                }}
                            />
                            <hr
                                style={{
                                    background: 'grey',
                                    color: 'grey',
                                    borderColor: 'grey',
                                    height: '1px',
                                    marginTop: 12
                                }}
                            />
                            <hr
                                style={{
                                    background: 'grey',
                                    color: 'grey',
                                    borderColor: 'grey',
                                    height: '1px',
                                    marginTop: 12
                                }}
                            />
                            <hr
                                style={{
                                    background: 'grey',
                                    color: 'grey',
                                    borderColor: 'grey',
                                    height: '1px',
                                    marginTop: 12
                                }}
                            />
                            <hr
                                style={{
                                    background: 'grey',
                                    color: 'grey',
                                    borderColor: 'grey',
                                    height: '1px',
                                    marginTop: 12
                                }}
                            />
                            <hr
                                style={{
                                    background: 'grey',
                                    color: 'grey',
                                    borderColor: 'grey',
                                    height: '1px',
                                    marginTop: 12
                                }}
                            />
                            <hr
                                style={{
                                    background: 'grey',
                                    color: 'grey',
                                    borderColor: 'grey',
                                    height: '1px',
                                    marginTop: 12
                                }}
                            />
                            <hr
                                style={{
                                    background: 'grey',
                                    color: 'grey',
                                    borderColor: 'grey',
                                    height: '1px',
                                    marginTop: 12
                                }}
                            />
                            <hr
                                style={{
                                    background: 'grey',
                                    color: 'grey',
                                    borderColor: 'grey',
                                    height: '1px',
                                    marginTop: 12
                                }}
                            />
                            <hr
                                style={{
                                    background: 'grey',
                                    color: 'grey',
                                    borderColor: 'grey',
                                    height: '1px',
                                    marginTop: 12
                                }}
                            />
                            <hr
                                style={{
                                    background: 'grey',
                                    color: 'grey',
                                    borderColor: 'grey',
                                    height: '1px',
                                    marginTop: 12
                                }}
                            />
                            <hr
                                style={{
                                    background: 'grey',
                                    color: 'grey',
                                    borderColor: 'grey',
                                    height: '1px',
                                    marginTop: 12
                                }}
                            />
                            <hr
                                style={{
                                    background: 'grey',
                                    color: 'grey',
                                    borderColor: 'grey',
                                    height: '1px',
                                    marginTop: 12
                                }}
                            />
                            <hr
                                style={{
                                    background: 'grey',
                                    color: 'grey',
                                    borderColor: 'grey',
                                    height: '1px',
                                    marginTop: 12
                                }}
                            />
                        </div>
                    </div>

                </div>

            </div>

            <div class='flex space-x-4'>
                <div class=" justify-between items-center  py-4 px-4 bg-white rounded-2xl  mt-6">

                    <div class="flex  items-center  space-x-4  mt-3">
                        <div class='w-90  flex  items-center  space-x-3'>
                            <div class="w-10 md:w-12 h-10 md:h-12 flex-none">
                                <div
                                    class="w-full h-full  font-bold text-xl text-center rounded-full bg-[#2984FF]  text-white flex justify-center items-center"
                                >
                                    <div><img src={Man3} alt="file" class="w-30 h-30" /></div>
                                </div>
                            </div>

                            <div>
                                <h6 class="font-semibold text-[#494646] text-sm">Kim Builer </h6>
                                <h6 class="text-sm md:text-sm sm:text-xs font-light text-[#3F3F3F]">Hello Christine,  I just receiv... </h6>

                            </div>
                        </div>
                        <div>
                            <h6 class='font-medium text-xs'>2d</h6>
                        </div>
                    </div>

                    <div class="flex  items-center  space-x-4  mt-3">
                        <div class='w-90  flex  items-center  space-x-3'>
                            <div class="w-10 md:w-12 h-10 md:h-12 flex-none">
                                <div
                                    class="w-full h-full  font-bold text-xl text-center rounded-full bg-[#2984FF]  text-white flex justify-center items-center"
                                >
                                    <div><img src={Man3} alt="file" class="w-30 h-30" /></div>
                                </div>
                            </div>

                            <div>
                                <h6 class="font-semibold text-[#494646] text-sm">Larry Gaga </h6>
                                <h6 class="text-sm md:text-sm sm:text-xs font-light text-[#3F3F3F]">Hello Christine,  I just receiv... </h6>

                            </div>
                        </div>
                        <div>
                            <h6 class='font-medium text-xs'>2d</h6>
                        </div>
                    </div>

                    <div class="flex  items-center  space-x-4  mt-3">
                        <div class='w-90  flex  items-center  space-x-3'>
                            <div class="w-10 md:w-12 h-10 md:h-12 flex-none">
                                <div
                                    class="w-full h-full  font-bold text-xl text-center rounded-full bg-[#2984FF]  text-white flex justify-center items-center"
                                >
                                    <div><img src={Man3} alt="file" class="w-30 h-30" /></div>
                                </div>
                            </div>

                            <div>
                                <h6 class="font-semibold text-[#494646] text-sm">Evelyn James </h6>
                                <h6 class="text-sm md:text-sm sm:text-xs font-light text-[#3F3F3F]">Hello Christine,  I just receiv... </h6>

                            </div>
                        </div>
                        <div>
                            <h6 class='font-medium text-xs'>2d</h6>
                        </div>
                    </div>

                </div>
                <div class='justify-center items-center  py-8 px-3 bg-white rounded-2xl  mt-6'>
                    <div class="flex px-1">

                        <div
                            class=" justify-center items-center"
                        >
                            <h1 class='text-black text-sm font-semibold'>Manage Radiographers</h1>
                            <h6 class='mt-2 font-medium text-xs'>The copy goes here on a <br />special feature to make<br /> vendor management easy</h6>
                        </div>
                        <img src={Verified} alt="file" class="w-14 h-13 mt-8 ml-1" />
                    </div>

                    <Button
                        variant='primary'
                        title='Learn More'
                        className=' w-48 bg-[#003A83] text-white text py-2 text-sm font-light mt-4 rounded-lg'
                    />
                </div>
            </div>
        </div>

    );
}
export default Profile