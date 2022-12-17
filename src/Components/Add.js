import {React,useState} from "react";
import Addteacher from "./Addteacher";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
  } from "@material-tailwind/react";
import AddDesignation from "./Adddesignation";



function MyApp() {
const [flag, setFlag] = useState(false)
const changeToDegisnation = (value) => {
  setFlag(current => !current);  
  console.log(flag)   
};
    return (
       <>
    <Card className="w-100"> 
    <CardBody className="">
    <div>
        <div className="w-full bg-white ">
          {flag?<AddDesignation/>:<Addteacher changeToDegisnation={changeToDegisnation}/>}
        {/* <Addteacher changeToDegisnation={changeToDegisnation}/>
        <AddDesignation/> */}
        </div> 
    </div>
   
  </CardBody>
</Card>
  </>
    );
}

export default MyApp;

        

