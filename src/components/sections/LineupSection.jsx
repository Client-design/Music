import React from 'react';
// Assuming you have created DAY_ONE_EVENTS array in your festivalData.js
import { DAY_ONE_EVENTS } from '../../data/festivalData'; 

function LineupSection() {
    return (
        <>
            {/* Section 1: Artist Lineup Title (Anchor: #lineup) */}
            <section className="artist-lineup-title" id="lineup">
                <div className="container reveal">
                    <h2>ARTIST LINEUP</h2>
                    <h3>DAY ONE HIGHLIGHTS</h3>
                </div>
            </section>
            
            {/* Section 2: Events Details Grid (Anchor: #events) */}
            <section id="events" className="section-divider-bottom-yellow">
                <div className="container">
                    <div className="events-grid">
                        
                        {/* Map over the day's events to create the cards */}
                        {DAY_ONE_EVENTS.map((event, index) => {
                            let delayClass = '';
                            if (index === 1) {
                                delayClass = 'reveal-delay-1';
                            } else if (index === 2) {
                                delayClass = 'reveal-delay-2';
                            }

                            return (
                                <div 
                                    key={index} 
                                    className={`event-card reveal ${delayClass}`}
                                >
                                    {/* The image is set via inline style based on your original structure */}
                                    <div 
                                        className="event-img" 
                                        style={{ 
                                            backgroundImage: `url(${event.image})`, 
                                            height: '350px' 
                                        }}
                                        role="img"
                                        aria-label={`Artist: ${event.name}`}
                                    ></div>
                                    
                                    <div className="event-content" style={{ textAlign: 'center' }}>
                                        <h3 style={{ fontSize: '1.8rem' }}>{event.name}</h3>
                                        {/* Stage and Time */}
                                        <p style={{ marginBottom: 0 }}>{event.stage} | {event.time}</p>
                                    </div>
                                </div>
                            );
                        })}
                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default LineupSection;
