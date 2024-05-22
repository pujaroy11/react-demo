import { Card, CardContent, Grid, Stack, Typography,Box } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const box11 = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function ChangePassword() {
  return (
    <>
      <Card sx={{ minWidth: "300px" }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card sx={{ maxWidth: 730, height: '60vh', padding: '10px', margin: '0 auto' }}>

                <CardContent>
                  <Typography varient="body2">
                    <Stack spacing={2}>
                      <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                        <TextField
                          required
                          fullWidth
                          name="Current Password"
                          label="Current Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                        />
                      </Grid>
                      <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                        <TextField
                          required
                          fullWidth
                          name="New Password"
                          label="New Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                        />
                      </Grid>

                      <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                        <TextField
                          required
                          fullWidth
                          name="Confirm Password"
                          label="Confi Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                        />
                      </Grid>
                      <Grid item xs={12} sx={{ ml: "5em", mr: "5em" }}>
                        <Stack  spacing={2} direction="row">



                          
                        <Button
                        type='submit'
                        varient="contained"
                        fullWidth='true'
                        size='large'
                        sx={{
                          mt: "10px",
                          mr: "20px",
                          // borderRadius:"40px",
                          color: "#ffffff",
                          // color:"black",
                          minWidth: "170px",
                          backgroundColor: "#FF9A22",
                          '&:hover': {
                            backgroundColor: 'blue',  // Background color on hover
                          },
                        
                        }}
                        
                        
                        
                        >
                         submit 
                        </Button>
                        </Stack>
                        

                      </Grid>

                    </Stack>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </CardContent>

      </Card>
    </>
  )
}

export default ChangePassword
