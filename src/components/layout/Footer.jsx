import React from 'react';
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';

// Define the data for the footer to keep the component clean
const QUICK_LINKS = [
    { name: 'Line Up', href: '#lineup' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Partners', href: '#partners' },
    { name: 'Our Team', href: '#members' },
    { name: 'Book Tickets', href: 'https://www.skillboxes.com/events/hozaak-fest-2025', isExternal: true },
];

const EXPLORE_LINKS = [
    { name: 'Artist Hub', href: '#' },
    { name: 'Submit Your Music', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Use', href: '#' },
];

const SOCIAL_LINKS = [
    { icon: FaFacebookF, href: 'https://www.facebook.com/HozaakFest/' },
    { icon: FaInstagram, href: 'https://www.instagram.com/hozaakfestival/' },
];

function Footer() {
    return (
        <footer id="contact"> 
            <div className="container">
                <div className="footer-content">
                    
                    {/* Column 1: About Hozaak & Social */}
                    <div className="footer-column reveal">
                        <h3>About Hozaak</h3>
                        <p style={{ color: 'var(--dark)' }}>
                            Hozaak is your gateway to the vibrant music of Assam's Barak Valley. Discover artists, events, and the rich musical heritage of our region.
                        </p>
                        <div className="social-icons">
                            {SOCIAL_LINKS.map((social, index) => (
                                <a 
                                    key={`footer-social-${index}`}
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label={`Follow us on ${social.icon.name}`}
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer-column reveal reveal-delay-1">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            {QUICK_LINKS.map((link, index) => (
                                <li key={`quick-link-${index}`}>
                                    <a 
                                        href={link.href}
                                        target={link.isExternal ? '_blank' : '_self'}
                                        rel={link.isExternal ? 'noopener noreferrer' : undefined}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Explore */}
                    <div className="footer-column reveal reveal-delay-2">
                        <h3>Explore</h3>
                        <ul className="footer-links">
                            {EXPLORE_LINKS.map((link, index) => (
                                <li key={`explore-link-${index}`}>
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div className="footer-column reveal reveal-delay-3">
                        <h3>Contact Us</h3>
                        <p style={{ color: 'var(--dark)' }}>
                            <FaMapMarkerAlt /> Silchar, Assam, India<br />
                            <FaEnvelope /> contact@hozaak.com<br />
                            <FaPhone /> +91 12345 67890
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="copyright">
                    &copy; 2025 Hozaak. All Rights Reserved. Designed with <FaHeart style={{ color: 'var(--primary)' }} /> for Barak Valley.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
