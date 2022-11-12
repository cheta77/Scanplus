import Man1 from "../assets/Man1.png";
import Man2 from "../assets/Man2.png";
import Man3 from "../assets/Man3.png";

function NewConstCard(props) {
    return (
        <div class="flex justify-between items-center space-x-4 py-4 px-4 bg-white rounded-2xl w-[90%] shadow pb-16 ">
            <div class=" justify-start items-center">
                <div>
                    <h3 class="text-xs md:text-lg  font-bold text-[#494646]">
                        {props.Title}
                    </h3>
                </div>
                <div class="flex  items-center lg:space-x-6 space-x-4  mt-10 ">
                    <div class="w-10 md:w-12 h-10 md:h-12 flex-none">
                        <div class="w-full h-full  font-bold text-xl text-center rounded-full bg-[#2984FF]  text-white flex justify-center items-center">
                            <div>
                                <img src={Man1} alt="Heyy" class="w-30 h-30" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-lg md:text-lg font-bold text-[#494646] ">
                            Evelyn James{" "}
                        </h3>
                        <h5 class="text-sm md:text-sm sm:text-xs font-semibold text-[#3F3F3F]">
                            Associate Radiograpger
                        </h5>
                    </div>
                </div>

                <div class="flex  items-center lg:space-x-6 space-x-4  mt-10">
                    <div class="w-10 md:w-12 h-10 md:h-12 flex-none">
                        <div class="w-full h-full  font-bold text-xl text-center rounded-full bg-[#2984FF]  text-white flex justify-center items-center">
                            <div>
                                <img src={Man2} alt="file" class="w-30 h-30" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-lg md:text-lg font-bold text-[#494646]">
                            Slyvia Dame{" "}
                        </h3>
                        <h5 class="text-sm md:text-sm sm:text-xs font-semibold text-[#3F3F3F]">
                            {" "}
                            Radiographer
                        </h5>
                    </div>
                </div>

                <div class="flex  items-center lg:space-x-6 space-x-4  mt-10">
                    <div class="w-10 md:w-12 h-10 md:h-12 flex-none">
                        <div class="w-full h-full  font-bold text-xl text-center rounded-full bg-[#2984FF]  text-white flex justify-center items-center">
                            <div>
                                <img src={Man3} alt="file" class="w-30 h-30" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-lg md:text-lg font-bold text-[#494646]">
                            Evelyn James{" "}
                        </h3>
                        <h5 class="text-sm md:text-sm sm:text-xs font-semibold text-[#3F3F3F]">
                            Associate Radiograpger
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NewConstCard;
