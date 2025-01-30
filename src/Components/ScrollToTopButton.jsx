import React, { useEffect, useState } from 'react';
import { ArrowUpCircle } from 'lucide-react';
import '../CSS/StyleScrollToTopButton.css';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > window.innerHeight / 2) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
            <ArrowUpCircle size={32} />
        </button>
        )
    );
}

export default ScrollToTopButton;
