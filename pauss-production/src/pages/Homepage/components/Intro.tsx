import { Box, Typography } from "@mui/material";
import WordsTransition from "../../../components/WordsTransition/WordsTransition";
import React, { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useScrollStore } from "../stores/useScrollStore";


const Intro = () => {
    // Typewriter
    const [ firstDone, setFirstDone ] = useState(false);
    const [ typedLength, setTypedLength ] = useState(0);
    const firstText = "👋 Hi, we're "
    
    // Words Transition
    const words = ['websites', 'games', 'digital experiences'];

    // Navbar State
    const logoRef = useRef<HTMLImageElement>(null);
    const { setHasHitTop } = useScrollStore();

    useEffect(() => {
        const handleScroll = () => {
            if (logoRef.current) {
                const rect = logoRef.current.getBoundingClientRect();
                if (rect.top <= 0) setHasHitTop(true);
                else setHasHitTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleTypeWriter = () => {
        setTypedLength(prev => {
            const newLength = prev + 1;
            if (newLength >= firstText.length) {
                setFirstDone(true)
            }
            return newLength;
        })
    };

    return (
        <>
            <Box
                ref={logoRef}
                component="img"
                alt='pauss logo'
                src='/assets/Pauss.png'
                sx={{
                    width: '20%'
                }}
            />

            <Box
                ml={10}
                sx={{
                    width: '700px',
                }}
            >
                <Typography
                    mt={10}
                    mb={2}
                    sx={{
                        fontFamily: 'Quicksand',
                        fontWeight: 700,
                        fontSize: '45px',
                    }}
                >
                    <span style={{ color: '#1F1F1F' }}>
                        {!firstDone && (
                            <Typewriter
                                words={["👋 Hi, we're " ]}
                                typeSpeed={27}
                                onType={handleTypeWriter}
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
                    <WordsTransition items={words} timeout={500} duration={3000}/>
                </Typography>
            </Box>
        </>
    )
};

export default Intro;