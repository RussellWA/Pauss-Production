import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useScrollStore } from "../../pages/Homepage/stores/useScrollStore";

const Navbar = () => {

    const { hasHitTop } = useScrollStore();
    
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                top: 0,
                paddingX: '50px',
                paddingY: hasHitTop ? 1 : '20px',
                justifyContent: hasHitTop ? 'space-between' : 'end',
                position: hasHitTop ? 'sticky' : 'static',
                backgroundColor: hasHitTop ? 'white' : 'transparent',
            }}
        >
            {/* Logo */}
            <Box
                component="img"
                alt='pauss logo'
                src='/assets/Pauss.png'
                sx={{
                    display: hasHitTop ? 'block' : 'none',
                    width: '5%'
                }}
            />

            {/* Navigations */}
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