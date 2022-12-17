import React from "react";

function AddDesignation() {
    return (
        <div>
            <div className="w-full bg-white px-12">
                <h1 className="focus:outline-none text-3xl font-bold text-gray-800 mt-10"> Teacher's Designation info </h1>
                <p  className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4">
                    Add Designation of the teacher 
                </p>
                <h2 className="text-xl font-semibold leading-7 text-gray-800 mt-10">Designation</h2>
                <div className="mt-8 md:flex items-center">
                    <div className="flex flex-col">
                        <input type="text" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" placeholder=".." />
                    </div>
                </div>
              
                <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
              <button className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full " >
                Add  </button>
              <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                Back
              </button>
            </div>
            </div>
        </div>
    );
}

export default AddDesignation;