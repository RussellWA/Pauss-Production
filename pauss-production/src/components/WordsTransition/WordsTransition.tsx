import React, { useEffect, useState } from 'react';
import { useTransitionState } from 'react-transition-state';
import './WordsTransition.css';

interface WordsTransitionProps {
    items: string[];
}

const WordsTransition: React.FC<WordsTransitionProps> = ({ items }) => {
    const [state, toggle] = useTransitionState({ timeout: 750, preEnter: true });
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            toggle();
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % items.length);
                toggle();
            }, 750);
        }, 2500);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`example ${state.status}`}>
            {items[index]}
        </div>
    );
};

export default WordsTransition;