import React, { useEffect, useState } from 'react';
import { useTransitionState } from 'react-transition-state';
import './WordsTransition.css';

interface WordsTransitionProps {
    items: string[];
    timeout: number;
    duration: number;
}

const WordsTransition: React.FC<WordsTransitionProps> = ({ items, timeout, duration }) => {
    const [ state, toggle ] = useTransitionState({ timeout: timeout });
    const [ index, setIndex ] = useState(0);

    useEffect(() => {
        if (state.status === "exited") {
            setIndex((prev) => (prev + 1) % items.length);
            toggle();
        }
    }, [state.status]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (state.status === "entered") {
                toggle();
            }
        }, duration);
    
        return () => clearInterval(interval);
    }, [state.status]);

    return (
        <div className={`example ${state.status}`}>
            {items[index]}
        </div>
    );
};

export default WordsTransition;