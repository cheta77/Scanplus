
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
import React, { Component } from 'react'
import Profile from './Profile';
import AddReport from './AddReport';

class Report extends Component {
    constructor(props) {
        super(props)

        // Set initial state
        this.state = { msg: <ConsultantCard /> }

        // Binding this keyword
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {

        // Changing state
        this.setState({
            msg: <AddReport />
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
                        <div class="w-full  sm:px-8 md:px-16 lg:px-2 py-4 items-center mt-20">
                            <div class='flex items-center space-x-2 px-1 '>
                                <BsHouse className='font-bold' />
                                <h3>Home</h3>

                            </div>

                            <div class='flex text-center' style={{ justifyContent: 'space-between' }}>

                                <h2 class='font-bold'>Dashboard</h2>
                                <div class='space-x-4 flex'>
                                    <button onClick={this.handleClick}
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


                            <p>{this.state.msg}</p>


                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Report


