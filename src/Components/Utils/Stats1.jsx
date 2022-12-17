import React from 'react';
import Icon from '../../images/icon-01.svg';

function DashboardCard02(props) {
  const onAddBtnClick = event => {
    props.changeValueSection(false)
  };

  return (
    <>
      <div className=" hover:-mt-4 flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
        <header className="px-5 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-800">View & Manage Section</h2>
        </header>
        <div className="px-5 pt-5">
          <header className="flex justify-between items-start mb-2">
            {/* Icon */}
            <img src={Icon} width="32" height="32" alt="Icon 01" />
          </header>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">Total Section</h2>
          <div className="text-3xl font-semibold text-slate-400 uppercase mb-1">12</div>
          <div className="flex items-start pb-6 pt-3">
            <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
              <button className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full " onClick={onAddBtnClick}>
                Add  </button>
              <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                View Section
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardCard02;

