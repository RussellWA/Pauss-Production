import { Box } from '@mui/material';
import React from 'react';
import Intro from './Intro';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {

    return (
        <>
            <Navbar/>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="flex-start"
                sx={{
                    marginTop: 10
                }}
            >
                <Intro/>
            </Box>
        </>
    )
}

export default Home;