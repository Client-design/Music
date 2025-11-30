import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

// Define navigation items and social links
const NAV_LINKS = [
    { name: 'Home', href: '#home', isExternal: false, isActive: true },
    { name: 'Tickets', href: 'https://www.skillboxes.com/events/hozaak-fest-2025', isExternal: true },
    { name: 'LinesUp', href: '#lineup', isExternal: false },
    { name: 'Events', href: '#events', isExternal: false },
    { name: 'Gallery', href: '#gallery', isExternal: false },
    { name: 'Partners', href: '#partners', isExternal: false },
    { name: 'Team', href: '#members', isExternal: false },
    { name: 'Contact', href: '#contact', isExternal: false },
];

const SOCIAL_LINKS = [
    { icon: FaFacebookF, href: 'https://www.facebook.com/HozaakFest/' },
    { icon: FaInstagram, href: 'https://www.instagram.com/hozaakfestival/' },
];

function Header() {
    // State to handle the mobile menu visibility
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleLinkClick = (isExternal) => {
        // Close the mobile menu when any link is clicked (internal or external)
        if (!isExternal) {
            setIsNavOpen(false);
        }
        // If it's an external link, let the default behavior (new tab) handle it
    };

    // Note: In a real Next.js app, you would use the <Image> component
    // and the <Link> component from next/link for internal navigation.

    return (
        <header>
            <div className="container header-container">
                <div className="logo">
                    {/* Assuming logo.jpg is in the public/images folder */}
                    <a href="#home">
                        <img 
                            src="/images/logo.jpg" 
                            alt="Hozaak Logo" 
                            className="animated-logo" 
                        />
                    </a>
                </div>
                
                {/* Desktop and Mobile Navigation */}
                <nav className={isNavOpen ? 'active' : ''} id="nav-menu">
                    <ul>
                        {NAV_LINKS.map((link, index) => (
                            <li key={index}>
                                <a 
                                    href={link.href}
                                    className={link.isActive ? 'active' : ''}
                                    target={link.isExternal ? '_blank' : '_self'}
                                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                                    onClick={() => handleLinkClick(link.isExternal)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile-only Social Links (nav-social-mobile class in CSS) */}
                    <div className="nav-social-mobile">
                        {SOCIAL_LINKS.map((social, index) => (
                            <a 
                                key={`mobile-social-${index}`}
                                href={social.href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <social.icon />
                            </a>
                        ))}
                    </div>
                </nav>

                {/* Desktop Social Icons (header-social class in CSS) */}
                <div className="header-social">
                    {SOCIAL_LINKS.map((social, index) => (
                        <a 
                            key={`desktop-social-${index}`}
                            href={social.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <social.icon />
                        </a>
                    ))}
                </div>
                
                {/* Mobile Toggle Button */}
                <button 
                    className={`nav-toggle ${isNavOpen ? 'active' : ''}`} 
                    id="nav-toggle" 
                    aria-label="Toggle navigation"
                    onClick={() => setIsNavOpen(!isNavOpen)}
                >
                    {/* Using react-icons to replace the three .bar spans for a cleaner look */}
                    {isNavOpen ? (
                        <FaTimes size={20} style={{ color: 'var(--light)' }} />
                    ) : (
                        <FaBars size={20} style={{ color: 'var(--light)' }} />
                    )}
                </button>
            </div>
        </header>
    );
}

export default Header;
