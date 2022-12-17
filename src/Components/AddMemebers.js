import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import ListMember from "../Components/ListMembers"
import React, { useState, useRef } from "react";




export default function AddMemebers() {
  const inputRef = useRef(null);
  const list = [];
  const [ShowMember, SetShowMembers] = useState(false)
  const AddtoList = event => {
    list.push(inputRef.current.value);
    console.log("this", list)
  }

  const ShowList = event => {
    SetShowMembers(current => !current);
  }
  return (
    <>
      <Card className="w-100">
        <CardBody className="">
          <div>
            <div className="w-full bg-white px-10">
              <div className="md:flex items-center border-b pb-6 border-gray-200">
                <h1 className="focus:outline-none text-3xl font-bold text-gray-800 mt-2">
                  Add Commitee Members
                </h1>
              </div>
              <div className="mt-8 md:flex justify-start">
                <div className="flex flex-col w-64 ">
                  <label className="mb-3 text-sm leading-none text-gray-800">Member Name</label>
                  <input ref={inputRef} className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" />
                </div>
              </div>

              <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                <button className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full " onClick={AddtoList} >
                  Add  </button>
                <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full " onClick={ShowList}>
                  View
                </button>
              </div>

            </div>
          </div>
        </CardBody>
        <CardFooter className="flex items-center  py-3">

        </CardFooter>
      </Card>


      {/* {ShowMember? <ListMember Mlist={list}/> :null} */}


    </>

  );
}