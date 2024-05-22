import React from 'react'
import Box from '@mui/material/Box';
import Navbar from './Navbar';
import Sidebar from './Sidebar'
function Nas() {
  return (
    <>
    
        <Navbar />
        <div className='bgColor'>
        <Box height={55}/>
        <Box sx={{display:'flex'}}>
            <Sidebar />
                <Box component='main' sx={{flexGrow:1,p:3,}}>
                NAS Components

          </Box>
        </Box>
        </div>
        </>
    
  )
}

export default Nas
