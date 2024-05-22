
import './App.css';
import React from 'react';
// import Navbar from '../src/components/Pages/Navbar'
// import Sidebar from '../src/components/Pages/Sidebar'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Dashboard from './components/Pages/Dashboard';
import Loginpage from './components/Pages/Loginpage';
import Udise from './components/Pages/Udise';
import Nas from './components/Pages/Nas';
import PM_Poshan from './components/Pages/PM_Poshan';
import PGI from './components/Pages/PGI';
import Nistha from './components/Pages/Nistha';
import Diksha from './components/Pages/Diksha';
import Setting from './components/Pages/Setting';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <>
   {/* <Navbar/>
   <Sidebar/> */}
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Dashboard></Dashboard>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/" exact element={<Loginpage />}></Route>
    <Route path="udise" exact element={<Udise />}></Route>
    <Route path="pgi" exact element={<PGI/>}></Route>
    <Route path="/pmposhan" element={<PM_Poshan/>}></Route>
    <Route path="/nistha" element={<Nistha/>}></Route>
    <Route path="/nas" element={<Nas/>}></Route>
    <Route path="/diksha" element={<Diksha/>}></Route>
    <Route path="/setting" element={<Setting/>}></Route>
  



   </Routes>
   
   </BrowserRouter>

   </>
  );
}

export default App;
