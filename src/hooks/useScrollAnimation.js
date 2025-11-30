import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to detect when an element enters the viewport.
 * It is used to apply the 'visible' class for CSS animations defined in style.css.
 * * @param {number} threshold - Percentage of the element that must be visible to trigger (0.1 = 10%).
 * @param {boolean} once - If true, the observer stops after the element is visible once.
 * @returns {{ref: React.MutableRefObject, isVisible: boolean}} An object containing the ref to attach to the element and the visibility state.
 */
function useScrollAnimation(threshold = 0.1, once = true) {
    const ref = useRef(null);
    // isVisible starts as false, matching the initial opacity/transform set by the '.reveal' class
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) {
                        // Stop observing, replicating the original script.js behavior
                        observer.unobserve(entry.target);
                    }
                }
                // Note: We don't set setIsVisible(false) here, as per the original one-time animation logic
            },
            { threshold }
        );

        observer.observe(currentRef);

        // Cleanup function
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, once]);

    return { ref, isVisible };
}

export default useScrollAnimation;
