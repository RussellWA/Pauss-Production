import { Box, Typography } from '@mui/material';
import React from 'react';


const ProjectGallery = () => {
    return (

        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            sx={{
                marginTop: 10,
                marginLeft: 15
            }}>
            <Typography 
                variant='h4'
                sx={{   
                    fontFamily: 'Quicksand',
                    fontWeight: 700,
                    color: '#92BCEA'
                }}>
                Our Project Portfolio
            </Typography>

            <Typography
                sx={{   
                    fontFamily: 'Quicksand',
                    fontWeight: 700,
                }}>
                Here are some of the projects that we have made
            </Typography>

        </Box>
    )
}

export default ProjectGallery;