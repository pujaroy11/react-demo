import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function Nistha() {
  return (
    <>
    <Navbar />
         <div className='bgColor'>
         <Box height={55}/>
         <Box sx={{display:'flex'}}>
             <Sidebar />
                 <Box component='main' sx={{flexGrow:1,p:3,}}>
                  Nistha components
 
                 </Box>
         </Box>
         </div> 
     
    </>
  )
}

export default Nistha
