import React from 'react';
import { FaHeadphonesAlt, FaBroadcastTower, FaTicketAlt, FaStore } from 'react-icons/fa';

// Define the partner data, mapping the Font Awesome classes to React Icons
const PARTNERS = [
    { name: 'AudioBrand', icon: FaHeadphonesAlt, delayClass: '' },
    { name: 'Valley Radio', icon: FaBroadcastTower, delayClass: 'reveal-delay-1' },
    { name: 'Events Co.', icon: FaTicketAlt, delayClass: 'reveal-delay-2' },
    { name: 'Local Beats', icon: FaStore, delayClass: 'reveal-delay-3' },
];

function PartnersSection() {
    return (
        <section id="partners" className="partners-section">
            <div className="container">
                <div className="section-title reveal">
                    <h2>OUR PARTNERS</h2>
                </div>
                
                <p className="partners-subtitle reveal">
                    We are proud to collaborate with brands that support local music and art.
                </p>
                
                <div className="partners-grid">
                    {PARTNERS.map((partner, index) => {
                        // Dynamically select the icon component
                        const PartnerIcon = partner.icon;

                        return (
                            <div 
                                key={index}
                                className={`partner-logo reveal ${partner.delayClass}`}
                            >
                                <PartnerIcon />
                                <span>{partner.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* CSS handles the ::after skewed section divider */}
        </section>
    );
}

export default PartnersSection;
