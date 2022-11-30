
import '../App.css';

import Button from '../components/Button';
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import SubmitReport from './SubmitReport';



class AddReport extends Component {
    constructor(props) {
        super(props)

        // Set initial state
        this.state = { msg: <div></div> }

        // Binding this keyword
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {

        // Changing state
        this.setState({
            msg: <SubmitReport />
        })
    }

    render() {
        return (



            <div class="flex justify-start items-start bg-[#E7F0FA]">

                <div className='mt-5 px-6'>
                    <div class='flex space-x-10'>
                        <div>
                            <h6 class='text-sm'>
                                Login
                            </h6>
                            <form className='justify-center items-center flex mt-4'>
                                <input className="border-[1.5px] rounded-md border-[#D6DDEB] lg:w-96 w-96 py-3 pl-5" type="text" name="name" placeholder='Enter your full name' />
                            </form>
                        </div>
                        <div>
                            <h6 class='text-sm'>
                                Login
                            </h6>
                            <form className='justify-center items-center flex mt-4'>
                                <input className="border-[1.5px] rounded-md border-[#D6DDEB] lg:w-96 w-96 py-3 pl-5" type="text" name="name" placeholder='Enter your full name' />
                            </form>
                        </div>
                    </div>

                    <div class='flex space-x-10 mt-6'>
                        <div>
                            <h6 class='text-sm'>
                                Login
                            </h6>
                            <form className='justify-center items-center flex mt-4'>
                                <input className="border-[1.5px] rounded-md border-[#D6DDEB] lg:w-96 w-96 py-3 pl-5" type="text" name="name" placeholder='Enter your full name' />
                            </form>
                        </div>
                        <div>
                            <h6 class='text-sm'>
                                Login
                            </h6>
                            <form className='justify-center items-center flex mt-4'>
                                <input className="border-[1.5px] rounded-md border-[#D6DDEB] lg:w-96 w-96 py-3 pl-5" type="text" name="name" placeholder='Enter your full name' />
                            </form>
                        </div>
                    </div>

                    <div class='flex space-x-10 mt-6'>
                        <div>
                            <h6 class='text-sm'>
                                Login
                            </h6>
                            <form className='justify-center items-center flex mt-4'>
                                <input className="border-[1.5px] rounded-md border-[#D6DDEB] lg:w-96 w-96 py-3 pl-5" type="text" name="name" placeholder='Enter your full name' />
                            </form>
                        </div>
                        <div>
                            <h6 class='text-sm'>
                                Login
                            </h6>
                            <form className='justify-center items-center flex mt-4'>
                                <input className="border-[1.5px] rounded-md border-[#D6DDEB] lg:w-96 w-96 py-3 pl-5" type="text" name="name" placeholder='Enter your full name' />
                            </form>
                        </div>
                    </div>
                    <p>{this.state.msg}</p>
                    <btn onClick={this.handleClick}
                        variant='primary'
                        title='Preview'
                        className=' bg-transparent w-28 border-[#01326A] border-[1px] text-[#01326A] text py-2 px-4 text-xs font-semibold mt-4 rounded-lg'
                    />
                </div>
            </div>
        );
    }
}
export default AddReport;



