import { Box, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '20px',
                marginX: '50px',
                backgroundColor: 'white'
            }}
        >
            <Box
                component="img"
                alt='pauss logo'
                src='/assets/Pauss.png'
                sx={{
                    width: '5%'
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginRight: '100px',
                    gap: '100px'
                }}
            >
                <Typography
                    sx={{
                        fontSize: '20px'
                    }}
                >Intro</Typography>
                <Typography
                    sx={{
                        fontSize: '20px'
                    }}
                >Projects</Typography>
                <Typography
                    sx={{
                        fontSize: '20px'
                    }}
                >The Team</Typography>
            </Box>
        </Box>
    )
};

export default Navbar;