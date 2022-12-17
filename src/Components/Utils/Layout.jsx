import React from "react";
import Sidenav from "../sidebar";
import Addteacher from '../Teachers/Teacher';
import Commitee from '../Commitee/Commitee';
import Session from '../Session&Section/Session';
import Department from "../Department";
import WelcomeBanner from "../Utils/WelcomeBanner"

const Foo = ({ val }) => {
    switch (val) {
      case "Teachers":
        return <Addteacher/>;
        case "Department":
        return <Department/>;
        case "Commitee":
        return <Commitee/>;
        case "Section":
        return <Session/>;
      default:
        return ;
    }
  };

function Layout(props) {
    return (
        <>
            <div className="flex flex-no-wrap ">
                <Sidenav />
                <div className="container mx-auto py-1 h-64 md:w-4/5 w-11/12 px-6">
                    <WelcomeBanner />
                    <div className="w-full h-full rounded ">
                    <Foo val={props.text} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;

