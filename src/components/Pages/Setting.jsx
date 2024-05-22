import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Profile from '../Settings/Profile';
import PersonalDetails from '../Settings/PersonalDetails';
import ChangePassword from '../Settings/ChangePassword'

function Setting() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Navbar />
      <div className='bgColor'>
        <Box height={55} />
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box component='main' sx={{ flexGrow: 1, p: 3, }}>

            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Profile" value="1" />
                  <Tab label="Personal Details" value="2" />
                  <Tab label="Change Password" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1"><Profile/></TabPanel>
              <TabPanel value="2"><PersonalDetails/></TabPanel>
              <TabPanel value="3"><ChangePassword/></TabPanel>
            </TabContext>
          </Box>
        </Box>
      </div>
    </>
  )
}

export default Setting
