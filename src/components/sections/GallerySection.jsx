import React, { useState } from 'react';

// Hardcoded data for the memory cards and modal content
const MEMORIES_CARDS = [
    { 
        year: '2024', 
        title: 'The Year We Rocked The Valley', 
        image: 'https://images.unsplash.com/photo-1517457210348-1cb5ba9aa58c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&q=80&w=900',
        delayClass: '',
    },
    { 
        year: '2023', 
        title: 'The First Edition Success', 
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&q=80&w=900',
        delayClass: 'reveal-delay-1',
    },
    { 
        year: '2022', 
        title: 'Throwback to the Kick-Off', 
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&q=80&w=900',
        delayClass: 'reveal-delay-2',
    },
];

const MODAL_PLACEHOLDER_IMAGES = [
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&q=80&w=200",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&q=80&w=200",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&q=80&w=200",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&q=80&w=200",
    "https://images.unsplash.com/photo-1483391265910-a8725f02d7b4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&q=80&w=200",
];

function GallerySection() {
    // State to manage the modal visibility and the year being displayed
    const [modalData, setModalData] = useState({
        isOpen: false,
        year: null,
    });

    const openModal = (year) => {
        setModalData({ isOpen: true, year });
    };

    const closeModal = () => {
        setModalData({ isOpen: false, year: null });
    };

    // Note: The click handling for closing the modal outside the content is handled 
    // by checking event.target === event.currentTarget on the modal div itself.

    return (
        <>
            <section id="gallery" className="section-divider-top-magenta">
                <div className="container">
                    <div className="section-title reveal">
                        <h2>MEMORIES</h2> 
                    </div>
                    
                    <div className="memories-grid">
                        {MEMORIES_CARDS.map((card, index) => (
                            <div 
                                key={index}
                                className={`memory-card reveal ${card.delayClass}`} 
                                style={{ backgroundImage: `url(${card.image})` }} 
                                data-year={card.year}
                                onClick={() => openModal(card.year)}
                            >
                                <div className="memory-overlay">
                                    <h3>{card.year}</h3>
                                    <p>{card.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Gallery Modal */}
            <div 
                id="galleryModal" 
                className="modal"
                style={{ display: modalData.isOpen ? 'block' : 'none' }}
                onClick={(e) => {
                    // Close the modal only if the click is on the backdrop
                    if (e.target === e.currentTarget) {
                        closeModal();
                    }
                }}
            > 
                <div className="modal-content">
                    {/* The times symbol is created via CSS and will be functional using closeModal */}
                    <span 
                        className="modal-close" 
                        onClick={closeModal}
                    >
                        &times;
                    </span>
                    
                    <h2 id="modalGalleryTitle" className="modal-title">
                        {modalData.year ? `Gallery: ${modalData.year} Highlights` : 'Gallery'}
                    </h2> 
                    
                    <div id="modalGalleryGrid" className="modal-gallery-grid">
                        {/* Map placeholder images for the gallery grid */}
                        {modalData.isOpen && MODAL_PLACEHOLDER_IMAGES.map((src, index) => (
                            // Note: In a real app, you'd fetch the actual images for the selected year
                            <img 
                                key={index} 
                                src={src} 
                                alt={`Gallery image from ${modalData.year}`} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default GallerySection;
