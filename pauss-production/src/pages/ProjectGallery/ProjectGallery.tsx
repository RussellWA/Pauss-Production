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
                <Box
                    width={'40%'}>
                    {/* This is the image */}
                    <Box
                        component="img"
                        src='/assets/aniroulandingpage.jpg'
                        alt='project 1'
                        width='100%'
                        sx={{
                            borderRadius: '50px',
                            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
                        }}>
                    </Box>

                    {/* This is the description */}
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width= '180px'
                        height= '20px'
                        marginTop={2}
                        sx={{
                            borderRadius: '50px',
                            border: '1px solid black', 
                            padding: 2 
                        }}>
                        <Typography
                            sx={{
                                fontFamily: 'Quicksand',
                                fontWeight: 700,
                                color: '#1F1F1F'
                            }}>
                            Web Dev
                        </Typography>
                    </Box>

                    <Typography
                        variant='h4'
                            sx={{
                                fontFamily: 'Quicksand',
                                fontWeight: 700,
                                color: '#1F1F1F'
                            }}>
                            AniRou
                    </Typography>

                    <Typography
                            sx={{
                                fontFamily: 'Quicksand',
                                fontWeight: 400,
                                color: '#1F1F1F'
                            }}>
                            An random anime generator website based on your preferred Anime Genre’s
                    </Typography>

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

export default ProjectGallery;