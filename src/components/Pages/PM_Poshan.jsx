import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function Pmposhan() {
    return (
        <>
       
        <Navbar />
        <div className='bgColor'>
        <Box height={55}/>
        <Box sx={{display:'flex'}}>
            <Sidebar />
                <Box component='main' sx={{flexGrow:1,p:3,}}>
                  Pm Poshan Component

                </Box>
        </Box>
        </div> 
        </>
    );
}

export default Pmposhan;