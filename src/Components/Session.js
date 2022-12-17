import React, { useState } from "react";
import DashboardCard01 from "./DashboardCard01"
import DashboardCard02 from "./Dashboard02"
import ManageSection from "./ManageSection";
import ManageSession from "./ManageSession";
export default function Commitee(props) {

  const [flag, setFlag] = useState(false)
  const [flags, setFlags] = useState(false)
    const changeValue = (value) => {
    setFlags(false)
    setFlag(current => !current);
  };
  const changeValueSection = (value) => {
    setFlag(false)
    setFlags(current => !current);
  };
  return (

    <>
      <div className="px-2 grid grid-cols-12 gap-12">
        <DashboardCard01 changeValue={changeValue} />
        <DashboardCard02 changeValueSection={changeValueSection} />
      </div>
      {flag ? <ManageSession /> : null}
      {flags ? <ManageSection /> : null}

    </>




  );
}