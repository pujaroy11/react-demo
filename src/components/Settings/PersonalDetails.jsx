import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";
import Divider from '@mui/material/Divider';
import EmailIcon from '@mui/icons-material/Email';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import EditLocationIcon from '@mui/icons-material/EditLocation';

function PersonalDetails() {
  return (
    <>
    <Stack spacing={1} direction="row" >

<Card sx={{ minWidth: 430 }}>
 <Grid item xs={6} sx={{ ml: "3em", mr: "3em" }}>
 <CardContent sx={{ padding:'10px 0px'}}>
   <Typography sx={{ padding:'5px 0px'}}>
    
      <h5 sx={{marginTop:'20px'}}>Personal Information</h5>
      <Divider sx={{backgroundColor:'black',marginTop:'10px'}}  />
      <br/> <br/>
      <Stack spacing={2} direction='row'  >
          <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <TextField
                            required
                            fullWidth
                            name="Name"
                            label="Name"
                            type="text"
                            id="Name"
                            
                            value='Admin'
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <TextField
                            required
                            fullWidth
                            name="New Password"
                            label="Location"
                            type="text"
                            id="Location"
                            value='Raipur'
                          />
                        </Grid>
                        </Stack>
                        <Grid item xs={12} sx={{ marginTop:'20px' }}>
                          <TextField
                            required
                            fullWidth
                            name="Name"
                            label="Bio"
                            type="text"
                            id="Name"
                            multiline
                            rows={4}
                            value='Vidhya Samiksha Kendra Dashboard'
                          />
                        </Grid> 
                
    <br/>
    
     <Stack spacing={2} direction='row'  >
          <Grid item xs={12} >
                      <TextField
                            required
                            fullWidth
                            name="UserType"
                            label="UserType"
                            type="text"
                            id="Name"
                            
                            value='Master Admin'
                          />
                        </Grid>
                     
                        </Stack>
      </Typography>
     
         </CardContent>  
               </Grid>
               </Card>
     
     {/* Right side Card */}
     <Card >
     <Grid item xs={6} sx={{ ml: "3em", mr: "3em" }}>
       <CardContent>
       <Typography sx={{ padding:'0px 0px'}}>
      <h5>Contact Information</h5>
     
      <Divider sx={{backgroundColor:'black'}}  />
      <br/>
      <Stack spacing={2} direction='row'  >
          <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <TextField
                            required
                            fullWidth
                            name="Name"
                            label="Contact Number"
                            type="text"
                            id="Name"
                            
                            value='9010002000'
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <TextField
                            required
                            fullWidth
                            name="New Password"
                            label="Email ID"
                            type="text"
                            id="Location"
                            value='vskcg@gmail.com'
                          />
                        </Grid>
                        </Stack>
                        <Grid item xs={12} sx={{ marginTop:'20px' }}>
                          <TextField
                            required
                            fullWidth
                            name="Name"
                            label="Profile link"
                            type="text"
                            id="Name"
                         
                            value='www.vsk.cg.gov.in'
                          />
                        </Grid> 
                
    <br/>
    
     <Stack spacing={2}   >
          <Grid item xs={12} >
                      <TextField
                            required
                            fullWidth
                            name="UserType"
                            label="Address"
                            type="text"
                            id="Address"
                            multiline
                            rows={4}
                            value=''
                          />
                        </Grid>
                     
                        </Stack>
      </Typography>
    
     
       </CardContent>
</Grid>
     </Card>
              
              
   </Stack>
    </>
  )
}

export default PersonalDetails
