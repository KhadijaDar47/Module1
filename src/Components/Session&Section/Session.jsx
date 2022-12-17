import React, { useState } from "react";
import Stats1 from "../Utils/Stats1"
import Stats2 from "../Utils/Stats2"
import ManageSection from "./ManageSection";
import ManageSession from "./ManageSession";
export default function Commitee(props) {

  const [flag, setFlag] = useState(false)
  const [flags, setFlags] = useState(false)
  const changeToSection = (value) => {
    setFlags(false)
    setFlag(current => !current);
  };
  const changeToSession = (value) => {
    setFlag(false)
    setFlags(current => !current);
  };

  return (

    <>
      <div className="px-2 grid grid-cols-12 gap-12">
        <Stats1 changeToSection={changeToSection} />
        <Stats2  changeToSession={changeToSession}/>
      </div>

     
      {flags ? <ManageSession /> : null}
      {flag ? <ManageSection /> : null}

    </>




  );
}