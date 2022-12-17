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
import { BrowserRouter, Routes , Route,Link} from "react-router-dom";



function App() {
  return (
    <>
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
         <Route path="/home" element={<div>home page</div>} />
         <Route path="/About" element={<div>About page</div>} />
         {/* <Route path="/AddTeacher" element={<div>deed</div>} /> */}
    </Routes>
    <Commitee/>
    </BrowserRouter>
    {/* <Link to="/About" > About</Link> */}
   
   </>
  );
}

export default App;
