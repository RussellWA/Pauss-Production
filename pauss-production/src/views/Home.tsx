import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../css/WordsTransition.css'
import WordsTransition from '../components/FadingText/WordsTransition';

const Home = () => {
    // Typewriter
    const [ firstDone, setFirstDone ] = useState(false);
    const [ typedLength, setTypedLength ] = useState(0);
    const firstText = "👋 Hi, we're "
    
    // CSS Transition
    const words = ['websites', 'games', 'digital experiences'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [inProp, setInProp] = useState(true);

    const handleType = () => {
        setTypedLength(prev => {
            const newLength = prev + 1;
            if (newLength >= firstText.length) {
                setFirstDone(true)
            }
            return newLength;
        })
    };

    useEffect(() => {
    const timer = setInterval(() => {
        setInProp(false); // Start fade-out
        setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setInProp(true); // Start fade-in
        }, 500); // Match the transition duration in CSS
    }, 2000);

    return () => clearInterval(timer); // Clean up the interval on unmount
    }, [words]);

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
                    We are a small team of friends creating 
                    {/* <WordsTransition words={words} interval={2000}/> */}
                </Typography>
            </Box>
        </Box>
    )
}

export default Home;