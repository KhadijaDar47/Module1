import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

import AddMembers from "../Components/AddMemebers"




export default function AddSession() {
  const [AddCommitee, useSetAddCommitee] = useState(false);
  
  const OnAddBtnClick = event => {
    useSetAddCommitee(current => !current);
  }
  return (
     <>
     {AddCommitee? <AddMembers /> : 
    <Card className="w-100">
    
      <CardBody className="">

        <div>
            <div className="w-full bg-white p-10">
                <div className="md:flex items-center border-b pb-6 border-gray-200">
                <h1 tabIndex={0} role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800 mt-12">
                   Create Commitee
                </h1>
                </div>
                <div className="mt-8 md:flex justify-start">
                    <div className="flex flex-col w-64 ">
                        <label className="mb-3 text-sm leading-none text-gray-800">Commitee Title</label>
                        <input  tabIndex={0} aria-label="Title of the commitee" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"  />
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800">Discription</label>
                        <input  tabIndex={0} aria-label="Discription of the commitee" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"  />
                    </div>
                  
                </div>     
                <button role="button" aria-label="Next step" className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100 
                 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700" onClick={OnAddBtnClick}>
                    <span className="text-sm font-medium text-center text-gray-800 capitalize">Done</span>
                    <svg className="mt-1 ml-3" width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
                    </svg>
                </button>
            </div>
            <style dangerouslySetInnerHTML={{ __html: "\n          .checkbox:checked + .check-icon {\n              display: flex;\n          }\n      " }} />
        </div>


      </CardBody>
      <CardFooter divider className="flex items-center  py-3">
        <Typography variant="small"></Typography>
      
      </CardFooter>
    </Card>}
    </>
  );
}