import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Container, Stack, Typography } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { dark } from '@mui/material/styles/createPalette';
import color from '@mui/material/colors';

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className='bgColor'>
        <Box height={60} />
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          {/* <Box component='main' sx={{ flexGrow: 1, p: 3, }}>
            Dashboard Component
          </Box> */}
          <Container sx={{ margin: "15px 10px", border: "0px solid red" }}>
            <Typography sx={{ color: "darkblue" }}>
              <strong>CHHATTISGARH - VIDYA SAMIKSHA KENDRA (VSK) </strong>
              <hr />
            </Typography>
            <Box sx={{ border: "1ps solid lightgray" }}>
              <Stack
              
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={0}
              padding='10px'
              flexWrap="wrap"


              >
                <ThemeProvider
                  theme={{
                    Palette: {
                      primary: {
                        main: '#007fff',
                        dark: '#007fff'
                      }
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: '30%',
                      height: 100,
                      margin: '10px 0px',
                      borderRadius: 1,
                      bgcolor: 'primary.main',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    }}
                  />
                   <Box
                    sx={{
                      width: '30%',
                      height: 100,
                      margin: '10px 0px',
                      borderRadius: 1,
                      bgcolor: 'primary.main',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    }}
                  />
                   <Box
                    sx={{
                      width: '30%',
                      height: 100,
                      margin: '10px 0px',
                      borderRadius: 1,
                      bgcolor: 'primary.main',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    }}
                  />
                  <Box
                    sx={{
                      width: '30%',
                      height: 100,
                      margin: '10px 0px',
                      borderRadius: 1,
                      bgcolor: 'primary.main',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    }}
                  />
                  <Box
                    sx={{
                      width: '30%',
                      height: 100,
                      margin: '10px 0px',
                      borderRadius: 1,
                      bgcolor: 'primary.main',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    }}
                  />
                  <Box
                    sx={{
                      width: '30%',
                      height: 100,
                      margin: '10px 0px',
                      borderRadius: 1,
                      bgcolor: 'primary.main',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    }}
                  />
                  <Box
                    sx={{
                      width: '30%',
                      height: 100,
                      margin: '10px 0px',
                      borderRadius: 1,
                      bgcolor: 'primary.main',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    }}
                  />
                  <Box
                    sx={{
                      width: '30%',
                      height: 100,
                      margin: '10px 0px',
                      borderRadius: 1,
                      bgcolor: 'primary.main',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    }}
                  />
                  <Box
                    sx={{
                      width: '30%',
                      height: 100,
                      margin: '10px 0px',
                      borderRadius: 1,
                      bgcolor: 'primary.main',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    }}
                  />
                  
                  
                 





                </ThemeProvider>

              </Stack>

            </Box>

          </Container>
        </Box>
      </div>
    </>
  )
}

export default Dashboard
