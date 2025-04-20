import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import WordsTransition from '../components/WordsTransition/WordsTransition';

const Home = () => {
    // Typewriter
    const [ firstDone, setFirstDone ] = useState(false);
    const [ typedLength, setTypedLength ] = useState(0);
    const firstText = "👋 Hi, we're "
    
    // Words Transition
    const words = ['websites', 'games', 'digital experiences'];

    const handleType = () => {
        setTypedLength(prev => {
            const newLength = prev + 1;
            if (newLength >= firstText.length) {
                setFirstDone(true)
            }
            return newLength;
        })
    };


    return (
        <Box
            display="flex"
            justifyContent="center"
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
                    width: '700px',
                    marginLeft: 10
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
                    <span style={{ color: '#1F1F1F' }}>
                        {!firstDone && (
                            <Typewriter
                                words={["👋 Hi, we're " ]}
                                typeSpeed={27}
                                onType={handleType}
                            />
                        )}
                        {firstDone && "👋 Hi, we're " }
                    </span>
                    <span style={{ color: '#BBCDFF' }}>
                        {firstDone && (
                            <Typewriter
                                words={["Pauss Production" ]}
                                typeSpeed={27}
                            />
                        )}
                    </span>
                </Typography>
                <Typography
                    sx={{   
                        fontFamily: 'Poppins',
                        fontSize: '28px'
                    }}
                >
                    We are a small team of friends creating {' '}
                    <WordsTransition items={words}/>
                </Typography>
            </Box>
        </Box>
    )
}

export default Home;