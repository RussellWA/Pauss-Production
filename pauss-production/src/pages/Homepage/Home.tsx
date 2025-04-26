import { Box } from '@mui/material';
import React from 'react';
import Intro from './Sections/Intro';
import Navbar from '../../components/Navbar/Navbar';
import Projects from './Sections/Project';

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
            <Projects/>
        </>
    )
}

export default Home;