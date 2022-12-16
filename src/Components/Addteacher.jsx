import React from "react";
import { Button } from "@material-tailwind/react";
import { Radio } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import Typography from '@mui/material/Typography';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
  } from "@material-tailwind/react";

function TeacherAdd() {
  
    return (
        <>
              <div className="flex items-center justify-left bg-white" >
                <div class="xl:w-10/12 w-full px-3">
                    <div class="xl:px-3">
                        <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                            <div class="w-72">
                                <div class="flex items-center">
                                    <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">Personal Information</h1>
                                </div>
                                {/* <p class="mt-4 text-sm leading-5 text-gray-600">Information .</p> */}
                            </div>
                            <div>
                                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                    <div class="md:w-64">
                                        <label class="text-sm leading-none text-gray-800" id="firstName" >First name</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="firstName" placeholder="John" />
                                    </div>
                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-sm leading-none text-gray-800" id="lastName">Last name</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="lastName" placeholder="Doe" />
                                    </div>
                                </div>
                                <div class="md:flex items-center lg:ml-24 mt-8">
                                    <div class="md:w-64">
                                        <label class="text-sm leading-none text-gray-800" id="emailAddress">Email address</label>
                                        <input type="email" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="emailAddress" placeholder="youremail@example.com" />
                                    </div>
                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-sm leading-none text-gray-800" id="phone" >Phone number</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="phone" placeholder="123-1234567" />
                                    </div>
                                </div>
                                <div class="md:flex items-center lg:ml-24 mt-8">
                                    <div class="md:w-64">
                                    <div className="flex gap-10">
                                                <Radio id="html" name="type" color="black" label="Male" />
                                                <Radio id="react" name="type" color="blue" label="Female" defaultChecked  />
                                                </div>
                                    </div>
                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                       {/* other */}
                                    </div>
                                </div>
     
                            </div>
                        </div>
                        <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
                            <div class="w-80">
                                <div class="flex items-center">
                                    <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">Designation Information</h1>
                                </div>
                                {/* <p class="mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p> */}
                            </div>
                            <div>
                                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                    <div class="md:w-64">
                                        <label class="text-sm leading-none text-gray-800" id="password">Designation</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="password" placeholder="Teacher's Designation" />
                                    </div>
                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                       {/* other */}
                                    </div>
                                </div>                     
                            </div>
                          
                        </div>
                        
                        </div>
                        <Button variant="filled" color="green" ripple={true} fullWidth>block level button</Button>
                </div>
            </div>
               </>
       

               );
           }
           
export default TeacherAdd;