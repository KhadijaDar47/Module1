
import React, { useState } from "react";
import DashboardCard01 from "./DashboardCard01"
import DashboardCard02 from "./Dashboard02"
import ReactDOM from "react-dom";
import AddSession from "./addSession";
import ManageSection from "./ManageSection";
import ManageSession from "./ManageSession";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function Commitee(props){
 
 

    return(

        <>
         
         <div className="px-2 grid grid-cols-12 gap-12">
        
         <DashboardCard01 />
         <DashboardCard02 />
       
        </div> 
        {/* <ManageSection/> */}
        {/* <ManageSession/> */}
        </>




    );
}