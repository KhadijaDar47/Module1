


import React from "react";
import Sidenav from "../Components/sidebar";
import Add from '../Components/Add';
import AddSession from '../Components/addSession';
import Com from '../Components/com';
import Session from '../Components/Session';
import Department from "./Department";
import WelcomeBanner from "./WelcomeBanner"
import Table from "./Table"
import Main from "./Main"
function Commitee() {
    return (
        <>

            <div className="flex flex-no-wrap ">
                <Sidenav />
                <div className="container mx-auto py-1 h-64 md:w-4/5 w-11/12 px-6">
                    <WelcomeBanner />
                    <div className="w-full h-full rounded ">
                        <Add/>
                        {/* <AddSession /> */}
                        {/* <Com/> */}
                        {/* <Session/> */}
                        {/* <Department/> */}
                        {/* <Table/> */}
                        {/* <Main/> */}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Commitee;

