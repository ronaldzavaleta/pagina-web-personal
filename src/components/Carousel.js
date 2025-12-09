import React, { useState, useEffect, useRef } from 'react';
import ProfileCard from './ProfileCard';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStart = useRef(null);

    const goToPrevious = () => {
        const isFirstItem = currentIndex === 0;
        const newIndex = isFirstItem ? items.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastItem = currentIndex === items.length - 1;
        const newIndex = isLastItem ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const handleTouchStart = (e) => {
        touchStart.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        if (touchStart.current === null) {
            return;
        }

        const currentTouch = e.touches[0].clientX;
        const diff = touchStart.current - currentTouch;

        if (diff > 5) {
            goToNext();
        } else if (diff < -5) {
            goToPrevious();
        }

        touchStart.current = null;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 7000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    if (!items || items.length === 0) {
        return null;
    }

    return (
        <div 
            className="relative w-full"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <div className="overflow-hidden">
                <div 
                    className="whitespace-nowrap transition-transform duration-300" 
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, index) => (
                        <div className="inline-block w-full" key={index}>
                            <ProfileCard 
                                title={item.title}
                                text={item.text}
                                image={item.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button 
                onClick={goToPrevious} 
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 focus:outline-none"
            >
                &#10094;
            </button>
            <button 
                onClick={goToNext} 
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 focus:outline-none"
            >
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;
