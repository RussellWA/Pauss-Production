import { Box, Typography } from '@mui/material';
import React from 'react';

const Home = () => {
    return (
        <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{
                marginTop: 10
            }}
        >
            <Box
                component="img"
                alt='pauss logo'
                src='/assets/Logo Perusahaan@4x.png'
                sx={{
                    width: '33%'
                }}
            />

            <Box
                sx={{
                    width: '700px'
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Quicksand',
                        fontWeight: 700,
                        fontSize: '45px',
                        marginTop: 10,
                        marginBottom: 2
                    }}
                >
                    <span style={{ color: '#1F1F1F', margin: '0' }}>Hi, we're</span>
                    <span style={{ color: '#BBCDFF' }}>Pauss Production</span>
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '28px'
                    }}
                >
                    We are a small team of friends creating websites, games, and other digital experiences
                </Typography>
            </Box>
        </Box>
    )
}

export default Home;