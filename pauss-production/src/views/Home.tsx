import { Box, Typography } from '@mui/material';
import React from 'react';

const Home = () => {
     return (
          <Box
               display="flex"
               justifyContent="space-between"
               alignItems="center"
          >
               <Box
                    component="img"
                    alt='pauss logo'
                    src='/assets/Logo Perusahaan@4x.png'
                    sx={{
                         width: '33%'
                    }}
               />

               <Box>
                    <Typography
                         sx={{
                              fontFamily: 'cursive'
                         }}
                    >
                         <span style={{ color: '#1F1F1F' }}>Hi, we're </span>
                         <span style={{ color: '#BBCDFF' }}>Pauss Production</span>
                    </Typography>
                    <Typography>We are a small team of friends creating websites, games, and other digital experiences</Typography>
                    <p>linked In logo</p>
               </Box>
          </Box>
     )
}

export default Home;