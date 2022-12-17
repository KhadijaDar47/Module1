
import { Radio } from "@material-tailwind/react";
import React from "react";

function TeacherAdd(props) {

    const onAddBtnClick = event => {
        props.changeToDegisnation(false)
    };
    return (
        <div>
            <div className="w-full bg-white px-12">

                <h1 className="focus:outline-none text-3xl font-bold text-gray-800 mt-10"> Profile info </h1>
                <p className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4">
                    Fill in the data of Teacher. It will take a couple of minutes. <br /> Teacher Will be added in the system
                </p>
                <h2 className="text-xl font-semibold leading-7 text-gray-800 mt-10"> Personal data</h2>
                <div className="mt-8 md:flex items-center">
                    <div className="flex flex-col">
                        <label className="mb-3 text-sm leading-none text-gray-800">First name</label>
                        <input type="name" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder="William" />
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800">Last name</label>
                        <input type="name" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder="Smith" />
                    </div>
                </div>
                <div className="mt-12 md:flex items-center">
                    <div className="flex flex-col">
                        <label className="mb-3 text-sm leading-none text-gray-800">Email Address</label>
                        <input type="email" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder="smith.william@gmail.com" />
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800">Phone number</label>
                        <input type="phonenumner" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder="+92xxxxxxxxx" />
                    </div>
                </div>
                <div className="mt-12 md:flex items-center">
                    <div className="flex flex-col">
                        <label className="mb-3 text-sm leading-none text-gray-800">Gender</label>
                        <Radio id="html" name="type" color="blue" label="Male" />
                        <Radio id="react" name="type" color="blue" label="Female" defaultChecked />
                    </div>

                </div>

                <div className=" pb-3 flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                    <button className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full " onClick={onAddBtnClick} >
                        Next  </button>
                    <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                        View
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TeacherAdd;
