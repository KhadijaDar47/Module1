


import React from "react";
import Sidenav from "../Components/sidebar";
import Add from '../Components/Add';
import AddSession from '../Components/addSession';
import Com from '../Components/com';
import Session from '../Components/Session';
import Department from "./Department";
import WelcomeBanner from "./WelcomeBanner"
function Commitee() {
    return (
        <>
        
        <div className="flex flex-no-wrap bg-grey-100">
           
           <Sidenav/>
            {/* Sidebar ends */}
            {/* Remove class [ h-64 ] when adding a card block */}
            <div className="container mx-auto py-1 h-64 md:w-4/5 w-11/12 px-6">
            <WelcomeBanner />
                {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                <div className="w-full h-full rounded ">
                    {/* <Add/> */}
                    {/* <AddSession/> */}
                    {/* <Com/> */}
                    <Session/>
                    {/* <Department/> */}
                </div>
            </div>
        </div>
        </>
    );
}

export default Commitee;

