import React from "react";

const Add = (props) => {
    return (
        <div>
            <div className="mt-5 py-3 w-full px-5">
                <div className=" flex flex-row justify-evenly">
                    <form className=" items-center flex mt-4">
                        <label>
                            <p>{props.label}</p>
                            <input
                                className="border-[1.5px] rounded-md border-[#D6DDEB] lg:w-96 w-96 py-3 pl-5"
                                type="text"
                                name="name"
                                placeholder={props.name}
                            />
                        </label>
                    </form>

                    <form className=" items-center flex mt-4">
                        <label>
                            <p>{props.label}</p>
                            <input
                                className="border-[1.5px] rounded-md border-[#D6DDEB] lg:w-96 w-96 py-3 pl-5"
                                type="text"
                                name="name"
                                placeholder={props.name}
                            />
                        </label>
                    </form>
                </div>

                <div className=" flex flex-row justify-evenly">
                    <form className=" items-center flex mt-4">
                        <label>
                            <p>{props.label}</p>
                            <input
                                className="border-[1.5px] rounded-md border-[#D6DDEB] lg:w-96 w-96 py-3 pl-5"
                                type="text"
                                name="name"
                                placeholder={props.name}
                            />
                        </label>
                    </form>

                    <form className=" items-center flex mt-4">
                        <label>
                            <p>{props.label}</p>
                            <input
                                className="border-[1.5px] rounded-md border-[#D6DDEB] lg:w-96 w-96 py-3 pl-5"
                                type="text"
                                name="name"
                                placeholder={props.name}
                            />
                        </label>
                    </form>
                </div>
                <div className=" flex flex-row justify-evenly">
                    <form className=" items-center flex mt-4">
                        <label>
                            <p>{props.label}</p>
                            <input
                                className="border-[1.5px] rounded-md border-[#D6DDEB] lg:w-96 w-96 py-3 pl-5"
                                type="text"
                                name="name"
                                placeholder={props.name}
                            />
                        </label>
                    </form>

                    <form className=" items-center flex mt-4">
                        <label>
                            <p>{props.label}</p>
                            <input
                                className="border-[1.5px] rounded-md border-[#D6DDEB] lg:w-96 w-96 py-3 pl-5"
                                type="text"
                                name="name"
                                placeholder={props.name}
                            />
                        </label>
                    </form>
                </div>
                <div className="h-50 w-100 border-[2px] "></div>

                <div className=" items-center flex mt-10 px-5 py-lg-5">
                    <Link to="/">
                        <Button
                            variant="primary"
                            title="Create Account"
                            className="bg-[#1C4D94] border-[1.5px] border-[#1C4D94] rounded-lg  py-3 lg:w-96 md:w-96 w-64 text-sm  text-[white]"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Add;
