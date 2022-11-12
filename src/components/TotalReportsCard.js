function TotalReportsCard(props) {
    return (
        <div class="flex space-x-4 py-4 px-4 bg-white rounded-2xl w-full shadow">
            <div>
                <h3 class="text-xs md:text-lg  font-bold text-[#494646]">
                    {props.Title}
                </h3>
            </div>
            <div class="flex justify-start items-center lg:space-x-16 space-x-10">
                <div class="w-[60%] flex-none">
                    <div class="w-full h-full  ">
                        <div>
                            <img src="/" alt="course" class="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TotalReportsCard;
