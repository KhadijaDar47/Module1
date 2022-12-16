import React from 'react';
import {
Button
} from "@material-tailwind/react";

import Icon from '../images/icon-01.svg';

function DashboardCard02() {


  return (
    <>
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">View & Manage Section</h2>  
      </header>
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          {/* <img src={Icon} width="32" height="32" alt="Icon 01" /> */}
          {/* Menu button */}
      
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Total Section</h2>
        <div className="text-3xl font-semibold text-slate-400 uppercase mb-1">12</div>
        <div className="flex items-start pb-6 pt-3">
        <Button color="green">Manage Section</Button>

        </div>
      </div>
   
    </div>
  
    </>
    
    
    
  );
}

export default DashboardCard02;

