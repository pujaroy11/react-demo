import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useState } from 'react';
import { FormControl, Grid, InputLabel, Select, MenuItem } from '@mui/material';


function Chart() {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('Chhattisgarh');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict('');
  };


  return (
    <>
      <div style={{ textAlign: "center", color: "black", padding: "20px" }}>
        <Typography variant='h4'><strong>Percentage of Amenities in {selectedDistrict ? selectedDistrict : "District"}</strong></Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <FormControl style={{ minWidth: 200, marginBottom: '20px' }}>
              <InputLabel>Select State</InputLabel>
              <Select
                              
                value={selectedState}
                onChange={handleStateChange}
                MenuProps={{
                  PaperProps: {
                    style: {
                      marginTop: '40px', 
                      elevation: 1,
                    },
                  },
                }}
              >
                {states.map((state, index) => (
                  <MenuItem key={index} value={state}>{state}</MenuItem>
                ))}

              </Select>

            </FormControl>

          </Grid>
          
          

        </Grid>
      </div>
    </>
  );
}


export default Chart;


