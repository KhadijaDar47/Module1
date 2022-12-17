import React, { useState } from "react";
import { Card, CardBody, CardFooter} from "@material-tailwind/react";
import AddMembers from "../Components/AddMemebers"

export default function AddSession() {
  const [AddCommitee, useSetAddCommitee] = useState(false);
  const OnAddBtnClick = event => {
    useSetAddCommitee(current => !current);
  }
  return (
    <>
      {AddCommitee ? <AddMembers /> : <Card className="w-100">
          <CardBody className="">
            <div>
              <div className="w-full bg-white p-10">
                <div className="md:flex items-center border-b pb-6 border-gray-200">
                  <h1 className="focus:outline-none text-3xl font-bold text-gray-800 mt-3">
                    Create Commitee
                  </h1>
                </div>
                <div className="mt-6 md:flex justify-start">
                  <div className="flex flex-col w-64 ">
                    <label className="mb-3 text-sm leading-none text-gray-800">Commitee Title</label>
                    <input className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" />
                  </div>
                  <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                    <label className="mb-3 text-sm leading-none text-gray-800">Description</label>
                    <input className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" />
                  </div>
                </div>
                <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                  <button className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full " onClick={OnAddBtnClick}>
                    Add  </button>
                  <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                    View
                  </button>
                </div>

              </div>
            </div>
          </CardBody>
          <CardFooter divider className="flex items-center  py-1">

          </CardFooter>
        </Card>}
    </>
  );
}