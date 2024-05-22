import { CardContent, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import EditLocationIcon from '@mui/icons-material/EditLocation';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Profile() {
    return (
        <>
            <Stack spacing={2} direction="row">

                <Card sx={{ minWidth: 300 }}>
                    <Grid item xs={4} sx={{ ml: "3em", mr: "3em" }}>
                        <CardContent sx={{ padding: '10px 0px' }}>
                            <Typography sx={{ padding: '5px 0px' }} >
                                <h5 sx={{ marginTop: "20px" }}>EDO Admin</h5>
                                <Divider sx={{  marginTop: '10px' }} />
                                <br /> <br />
                            </Typography>

                            <Typography sx={{ padding: '10px 0px' }}>
                                <EmailIcon /> : Admin@gmail.com
                                <br />
                                <Divider sx={{  marginTop: '10px' }} />
                            </Typography>
                            <Typography sx={{ padding: '5px 0px' }}>
                                <CallIcon /> : (+91) 999990000
                                <br />
                                <Divider sx={{  marginTop: '10px' }} />
                            </Typography>
                            <Typography sx={{ padding: '10px 0px' }}>
                                <EditLocationIcon /> : EDO Office Raipur
                                <br />
                                <Divider sx={{  marginTop: '10px' }} />
                            </Typography>


                        </CardContent>

                    </Grid>

                </Card>



                {/*  */}

                <Card sx={{ minWidth: 520 }}>
                    <Grid item xs={8} sx={{ ml: "3em", mr: "3em" }}>
                        <CardContent>
                            <Typography sx={{ padding: '0px 0px' }}>
                                <h5>About me</h5>

                                <Divider  />
                                <br />
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</p>
                            </Typography>

                            <Typography sx={{ padding: '5px 0px' }}>
                                <h5>Details</h5>

                                <Divider sx={{  marginTop: '10px' }} />

                                <span>Full Name &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;Education Department</span>


                                <Divider sx={{  marginTop: '2px' }} />
                                <span>Address&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;Eduation Department Office Raipur</span>


                                <Divider  />
                                <span>Zip Code&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;499001</span>


                                <Divider sx={{  marginTop: '2px' }} />

                                <span>Webiste</span>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;<span>www.vsk.cg.gov.in</span>


                                <Divider sx={{  marginTop: '4px' }} />
                            </Typography>
                        </CardContent>
                    </Grid>
                </Card>


            </Stack>

        </>

    )
}

export default Profile



