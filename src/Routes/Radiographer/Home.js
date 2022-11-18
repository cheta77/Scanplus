
import '../../App.css';
import RadioSidebar from './RadiographerSidebar';
import TotalCard from '../../components/TotalCard.js';
import NewConstCard from '../../components/NewConstCard.js';
import TotalReportsCard from '../../components/TotalReportsCard.js';
import google from '../../assets/icons/google.png'
import Man1 from '../../assets/Man1.png'
import Man2 from '../../assets/Man2.png'
import Man3 from '../../assets/Man3.png'
import Header from '../../components/Header';
import { BsHouse } from 'react-icons/bs';
import Button from '../../components/Button';
import ConsultantTable from './ConsultantTable';


function RadioHome(props) {
  return (



    <div class="flex justify-start items-start bg-[#E7F0FA]">

      <div class="w-full ">
        <Header />
        <div class="flex justify-start items-start space-x-4 ">
          <div class="w-full hidden md:flex md:w-[240px] ">
            <RadioSidebar page='dashboard' />
          </div>
          <div class="w-full px-4 py-4 justify-start items-center mt-20">

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
                <Button
                  variant='primary'
                  title='Add'
                  className='  bg-[#003A83] w-28 text-white text py-2 px-4 text-xs font-light mt-4 rounded-lg'
                />
                <Button
                  variant='primary'
                  title='Finish'
                  className=' bg-transparent w-28 border-[#01326A] border-[1px] text-[#01326A] text py-2 px-4 text-xs font-semibold mt-4 rounded-lg'
                />
              </div>
            </div>


            <div class="w-[97%] bg-white justify-center rounded-lg mt-4 items-center">
              <ConsultantTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RadioHome;