import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../css/WordsTransition.css'; // We'll create this CSS file

interface WordsTransitionProps {
    words: string[];
    interval?: number;
}

const WordsTransition: React.FC<WordsTransitionProps> = ({ words, interval }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [inProp, setInProp] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setInProp(false); // Start fade-out
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
                setInProp(true); // Start fade-in
            }, 500); // Match the transition duration in CSS
        }, interval);

        return () => clearInterval(timer); // Clean up the interval on unmount
    }, [words, interval]);

    return (
        <div className="fading-text-container">
            <CSSTransition
                in={inProp}
                timeout={500} // Match the transition duration in CSS
                classNames="fade"
                unmountOnExit
            >
                <span key={currentIndex}>{words[currentIndex]}</span>
            </CSSTransition>
        </div>
    );
};

export default WordsTransition;