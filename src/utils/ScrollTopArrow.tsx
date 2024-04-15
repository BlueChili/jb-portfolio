'client:only';

import { useState, useEffect } from 'preact/hooks';
import type { FC } from 'preact/compat'; 
import '../styles/scrollTopArrow.css';

type ScrollTopArrowProps = {
        showBelow?: number;
};
const ScrollTopArrow: FC<ScrollTopArrowProps> = ({ showBelow = 400 }) => {
        const [showScroll, setShowScroll] = useState<boolean>(true);

        useEffect(() => {
                const handleScroll = () => {
                        const scrolled = window.scrollY;
                        setShowScroll(scrolled > showBelow);
                };
                window.addEventListener('scroll', handleScroll);
                handleScroll(); // Initial check
                
                return () => window.removeEventListener('scroll', handleScroll);
        }, [showBelow]);

        const scrollTop = () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        return showScroll ? (
                <div
                        className='scrollTop'
                        onClick={scrollTop}>
                        Back To Overview
                </div>
        ) : null;
};

export { ScrollTopArrow };
