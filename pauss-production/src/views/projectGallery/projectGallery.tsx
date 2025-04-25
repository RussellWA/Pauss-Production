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
                marginLeft: '8%'
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

            <Box display="flex"
                sx={{
                    marginTop: 5,
                    gap: '10%',
                }}>

                {/*This is one card containing the image and description */}
                <Box>
                    {/* This is the image */}
                    <Box
                        component="img"
                        src='/assets/aniroulandingpage.jpg'
                        alt='project 1'
                        width='40%'
                        sx={{
                            borderRadius: '50px',
                            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
                        }}>
                    </Box>

                    <Box>

                    </Box>

                </Box>
                

                <Box
                    component="img"
                    src='/assets/aniroulandingpage.jpg'
                    alt='project 2'
                    width='40%'
                    sx={{
                        borderRadius: '50px',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
                    }}>
                </Box>
            </Box>

        </Box>


        
    )
}

export default ProjectGallery;