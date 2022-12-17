
import './App.css';
import Navbar from './Components/Navbar';
import Layout from './Components/Utils/Layout';
import Cards from './Components/Utils/Cards';
import { BrowserRouter, Routes , Route} from "react-router-dom";

function App() {
  return (
    <>
   
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
         <Route path="/" element={<Cards/>} />
         <Route path="/Teachers" element={<Layout text={"Teachers"}/>}/>
         <Route path="/Department" element={<Layout text={"Department"}/>}/>
         <Route path="/Section-Session" element={<Layout text={"Section"}/>} />
         <Route path="/Commitee" element={<Layout text={"Commitee"}/>} />
    </Routes>
    </BrowserRouter>
   
   </>
  );
}

export default App;
