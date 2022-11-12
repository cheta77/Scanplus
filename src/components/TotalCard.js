<script>export let total;</script>;

function TotalCard(props) {
    return (
        <div class="flex justify-center items-center space-x-4 py-1.5 px-4 bg-white rounded-2xl w-48 md:w-60 lg:w-60 sm:w-40 ">
            <div class="flex justify-center items-center lg:space-x-6 space-x-4">
                <div class="w-10 md:w-12 h-10 md:h-12 flex-none">
                    <div class="w-full h-full  font-bold text-xl text-center rounded-full bg-[#2984FF]  text-white flex justify-center items-center">
                        <div>
                            <img src={props.ImgUrl} class="w-5 h-5" />
                        </div>
                    </div>
                </div>

                <div>
                    <h5 class="text-xs md:text-xs sm:text-xs font-semibold text-gray-600">
                        Total Consultants
                    </h5>
                    <h3 class="text-lg md:text-lg font-bold text-black">200</h3>
                </div>
            </div>
        </div>
    );
}
export default TotalCard;
