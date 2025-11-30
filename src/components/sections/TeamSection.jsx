import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaArrowRight } from 'react-icons/fa';
// Assuming you have created TEAM_MEMBERS array in your festivalData.js
import { TEAM_MEMBERS } from '../../data/festivalData'; 

function TeamSection() {
    // State to toggle the 'show-all' class on the members grid
    const [showAllMembers, setShowAllMembers] = useState(false);

    const handleViewAllClick = () => {
        setShowAllMembers(true);
    };

    return (
        <section id="members" className="section-divider-top-magenta">
            <div className="container">
                <div className="section-title reveal">
                    <h2>THE CORE TEAM</h2> 
                </div>
                
                {/* The class 'show-all' is conditionally applied based on state */}
                <div className={`members-grid members-grid-main ${showAllMembers ? 'show-all' : ''}`}>
                    
                    {TEAM_MEMBERS.map((member, index) => {
                        let delayClass = '';
                        if (index === 1) {
                            delayClass = 'reveal-delay-1';
                        } else if (index === 2) {
                            delayClass = 'reveal-delay-2';
                        }

                        // Apply 'reveal' class only to the first three members initially
                        const revealClass = index < 3 ? `reveal ${delayClass}` : '';
                        
                        return (
                            <div 
                                key={index} 
                                className={`member-card ${revealClass}`} 
                                style={{ backgroundImage: `url(${member.image})` }}
                            >
                                {member.tag && (
                                    <div className="member-golden-tag">{member.tag}</div>
                                )}
                                <div className="member-overlay">
                                    <h3>{member.name}</h3>
                                    <p className="role">{member.role}</p>
                                    <p>{member.bio}</p>
                                    <div className="social-links">
                                        {/* Placeholder social links */}
                                        <a href="#"><FaFacebookF /></a>
                                        <a href="#"><FaInstagram /></a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                {/* The 'View All' button container conditionally hides itself with CSS when showAllMembers is true */}
                {!showAllMembers && (
                    <div className="view-all-container reveal">
                        <button 
                            id="view-all-members" 
                            className="btn btn-view-all"
                            onClick={handleViewAllClick}
                        >
                            View All Members <FaArrowRight />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default TeamSection;
