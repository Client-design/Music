import React from 'react';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
// Assume you have created this data file as planned in the first response.
// If you used a different path/name, adjust the import statement below.
import { ARTIST_LINEUP, FESTIVAL_INFO } from '../../data/festivalData'; 

function HeroSection() {
    return (
        <section className="hero hero-style-2" id="home">
            <div className="container hero-content-2">
                
                {/* Event Info Box */}
                <div className="event-info-box reveal">
                    <FaMapMarkerAlt /> {FESTIVAL_INFO.location} | {FESTIVAL_INFO.dates}
                </div>
                
                <div className="hero-main-content">
                    
                    {/* Artist Grid (Visual Lineup) */}
                    <div className="artist-grid reveal reveal-left">
                        {ARTIST_LINEUP.slice(0, 4).map((artist, index) => (
                            // Note: In Next.js, use the <Image> component for production
                            <div 
                                key={index}
                                className="artist-item" 
                                style={{ backgroundImage: `url(${artist.image})` }}
                            ></div>
                        ))}
                        
                        {/* Artist Names Overlay */}
                        <div className="artist-names">
                            {ARTIST_LINEUP.slice(0, 4).map((artist, index) => (
                                <span key={`name-${index}`}>{artist.name}</span>
                            ))}
                        </div>
                    </div>

                    {/* Live Tickets Box (Call to Action) */}
                    <div className="live-tickets-box reveal reveal-delay-2">
                        <h1>{FESTIVAL_INFO.tagline}</h1>
                        <p className="live-now-text">TICKETS</p>
                        {/* The 'tickets-live' class in style.css adds the neon lime color */}
                        <p className="live-now-text tickets-live">LIVE NOW</p>
                        <div className="dates-tag">{FESTIVAL_INFO.dates.split(' - ')[1]}</div> 
                        
                        <a 
                            href={FESTIVAL_INFO.ticketLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-hero-2"
                        >
                            GET YOUR PASS <FaArrowRight />
                        </a>
                    </div>
                </div>
            </div>
            {/* CSS handles the decorative ::before and ::after wave elements */}
        </section>
    );
}

export default HeroSection;
