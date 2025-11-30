import React from 'react';

/**
 * Reusable Button component that can render as a <button> or <a> tag.
 *
 * @param {string} as - The element to render: 'button' or 'a'. Defaults to 'button'.
 * @param {string} variant - Defines the styling: 'default' (for general CTAs) or 'hero' (for the main hero button).
 * @param {string} href - URL for the anchor tag (if as='a').
 * @param {string} className - Additional CSS classes to apply.
 * @param {object} props - Any other standard HTML attributes (onClick, target, etc.).
 */
function Button({ as = 'button', variant = 'default', href, className = '', children, ...props }) {
    
    // Determine the base CSS class based on the variant prop
    let variantClass = 'btn';

    if (variant === 'hero') {
        // This is the style for the main button in the Hero section
        variantClass = 'btn-hero-2'; 
    } 
    // The 'default' variant uses the base '.btn' class, 
    // and specific block styles (like tickets-block .btn) are handled 
    // by the parent component's scope in the global CSS.

    const allClasses = `${variantClass} ${className}`;

    if (as === 'a') {
        return (
            <a 
                href={href}
                className={allClasses}
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <button 
            className={allClasses}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
