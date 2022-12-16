import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import Add from './Components/Add';
import Table from './Components/Table';
import Commitee from './Components/Commitee';
import Department from './Components/Department';
import Session from './Components/Session';
import AddSession from './Components/addSession';
import Main from './Components/Main';
import Sidenav from './Components/sidebar';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  return (
    <>
    
   
 
     <div className='bg-grey-100'>
     <Navbar/>
     <Commitee/>
  
     </div>
   
     {/* <Add/> */}
     {/* <Table/> */}

     {/* <Table/>  */}
     
     {/* <Department/> */}
     {/* <Session/> */}
     {/* <AddSession/> */}
     {/* <Main/> */}
     
    {/* <Router>
    <Routes>
    <Route exact path="/commitee" element={ <Commitee/>} />
    <Route exact path="/Deparment" element={ <Department/>} />
   
  </Routes>
</Router> */}
   </>
  );
}

export default App;
