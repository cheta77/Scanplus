
import '../../App.css';
import Sidebar from './Sidebar.js'
import { BsHouse } from 'react-icons/bs';
import Button from '../../components/Button';
import React, { Component } from 'react'
import Profile from '../Profile';
import ConsultantTable from '../Consultant/ConsultantTable';
import Header from '../../components/Header';

class Consult extends Component {
    constructor(props) {
        super(props)

        // Set initial state
        this.state = {
            msg:
                <ConsultantTable />
        }

        // Binding this keyword
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {

        // Changing state
        this.setState({
            msg: <Profile />
        })
    }

    render() {
        return (


            <div class="flex justify-start items-start bg-[#E7F0FA]">

                <div class="w-full ">
                    <Header />
                    <div class="flex justify-start items-start space-x-4 ">
                        <div class="w-full hidden md:flex md:w-[240px] ">
                            <Sidebar page='dashboard' />
                        </div>
                        <div class="w-[97%]  px-2 py-4 items-center mt-20 ">

                            <div class='flex  items-center justify-between w-[97%]'>
                                <div>
                                    <div class='flex items-center space-x-2  '>
                                        <BsHouse className='font-bold' />
                                        <h3>Home</h3>
                                    </div>
                                    <div>
                                        <h2 class='font-bold'>Dashboard</h2>
                                    </div>
                                </div>
                                <div class='space-x-4 flex'>
                                    <Button onClick={this.handleClick}
                                        variant='primary'
                                        title='Add'
                                        className='  bg-[#003A83] w-28 text-white text py-2 px-4 text-xs font-light mt-4 rounded-lg'
                                    />
                                    <Button onClick={this.handleClick}
                                        variant='primary'
                                        title='Finish'
                                        className=' bg-transparent w-28 border-[#01326A] border-[1px] text-[#01326A] text py-2 px-4 text-xs font-semibold mt-4 rounded-lg'
                                    />
                                </div>
                            </div>


                            <div class='pr-6 mt-6'>{this.state.msg}</div>



                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Consult


