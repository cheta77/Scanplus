
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

let items = [
  {
    title: 'Hello world',
    tutor_name: 'john doe',
    tutor_title: 'web developer',
    star: 4.5,
    price: '500',
    modules: 24,
    reviews: 123,
    students: 242
  },
  {
    title: 'Hello world',
    tutor_name: 'john doe',
    tutor_title: 'web developer',
    star: 4.5,
    price: '500',
    modules: 24,
    reviews: 123,
    students: 242
  },
  {
    title: 'Hello world',
    tutor_name: 'john doe',
    tutor_title: 'web developer',
    star: 4.5,
    price: '500',
    modules: 24,
    reviews: 123,
    students: 242
  },
  {
    title: 'Hello world',
    tutor_name: 'john doe',
    tutor_title: 'web developer',
    star: 4.5,
    price: '500',
    modules: 24,
    reviews: 123,
    students: 242
  },
  {
    title: 'Hello world',
    tutor_name: 'john doe',
    tutor_title: 'web developer',
    star: 4.5,
    price: '500',
    modules: 24,
    reviews: 123,
    students: 242
  },
  {
    title: 'Hello world',
    tutor_name: 'john doe',
    tutor_title: 'web developer',
    star: 4.5,
    price: '500',
    modules: 24,
    reviews: 123,
    students: 242
  }
];

let totals = [
  {
    number: '0,000'
  }
];

function Home(props) {
  return (



    <div class="flex justify-start items-start bg-[#E7F0FA]">

      <div class="w-full ">
        <Header />
        <div class="flex justify-start items-start space-x-4 ">
          <div class="w-full hidden md:flex md:w-[240px] ">
            <Sidebar page='dashboard' />
          </div>
          <div class="w-full   sm:px-8 md:px-16 lg:px-2 py-4 justify-start items-center mt-20">
            <div class='flex items-center space-x-2 px-1 '>
              <BsHouse className='font-bold' />
              <h3>Home</h3>

            </div>

            <div class='flex text-center pl-1' style={{ justifyContent: 'space-between' }}>

              <h2 class='font-bold'>Dashboard</h2>
              <Button variant='primary'
                title='Add New'
                className='  bg-[#1C4D94]  py-1 px-3 text-sm  text-[#FFFFFF] rounded-md' />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full mb-2 px-16" />
            <div class="w-full bg-white justify-center rounded-lg">
              <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 lg:gap-56 gap-6 mb-6 w-96">
                {/* {#each totals as total} */}
                <TotalCard ImgUrl={google} alt="file" class="w-5 h-5" />
                <TotalCard ImgUrl={Man3} />
                <TotalCard ImgUrl={Man2} />
                <TotalCard ImgUrl={Man1} />
                <TotalCard ImgUrl={google} />
                {/* {/each} */}
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 lg:gap-6 gap-6 mb-6">
              <NewConstCard Title='New Consultants' />
              <TotalReportsCard />
              <NewConstCard Title='New Radiographers' />

            </div>

            <ConsultantCard />

          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;