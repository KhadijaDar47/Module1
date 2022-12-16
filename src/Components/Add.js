import React from "react";
import { Button } from "@material-tailwind/react";
import { Radio } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import Typography from '@mui/material/Typography';
import Addteacher from "./Addteacher";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
  } from "@material-tailwind/react";

function MyApp() {
  
    return (
        <>
           
    
    <Card className="w-100">
  
  <CardBody className="">

    <div>
        <div className="w-full bg-white ">
            <div className="md:flex text-center border-b pb-3 border-gray-200 pt-1 px-6 ">
            <h1 className="focus:outline-none text-2xl font-bold text-gray-800 mt-3 flex text-center">
              Add Teacher
            </h1>
            </div>
          
        </div>
        
    </div>
    <Addteacher/>
      

  </CardBody>
</Card>

    </>
       

    );
}

export default MyApp;

        

